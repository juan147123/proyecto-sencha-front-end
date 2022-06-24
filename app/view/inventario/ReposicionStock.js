
Ext.define('backoffice.view.inventario.ReposicionStock', {
    extend: 'Ext.panel.Panel',
    xtype: 'reposicion-stock',
    itemId: 'reposicion-stock',
    requires: [
        'backoffice.view.inventario.ReposicionStockController',
        'backoffice.view.inventario.ReposicionStockModel',
        'Ext.ux.RowExpander'
    ],

    controller: 'inventario-reposicionstock',
    viewModel: {
        type: 'inventario-reposicionstock'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        let pedidos = tools.Util.getStoreById('stReplacement')
        pedidos = tools.Util.setHeaderAuth(pedidos);
        pedidos.getProxy().url = Ext.manifest.api + 'replacement/store/' + tools.Jwt.getStore().toString();
        pedidos.load();
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._boton_ver_stock(),
                /* me._boton_ingresar_pedido(), */
                me._boton_mas_opciones(),
                me._buscarNro(),
                me._buscarEstado(),
                me._buscarFechas(),
                //me._buscarDatos(),
                me._grilla(pedidos)
            ]
        });
        me.callParent();
    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="font-size:25px;">Reposicion o Pedido de Productos</div><p><p>Envie y notifique su solicitud al almacen central para reponer stock interno.'

        }
    },
    _boton_ver_stock: function () {
        return {
            xtype: 'container',
            userCls: 'big-10 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            padding: '8 0 0 0',
            items: [
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'VER STOCK',
                    flex: 1,
                    tooltip: 'Muestra el stock actual',
                    listeners: {
                        click: 'onClickStock'
                    }
                },
            ]
        };
    },
    _boton_mas_opciones: function () {
        return {
            xtype: 'container',
            userCls: 'big-10 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            padding: '8 0 0 0',
            items: [
                {
                    xtype: 'button',
                    text: 'Más',
                    ui: 'button-sistema-sc',
                    flex: 1,
                    menu: [
                        {
                            iconCls: 'fa fa-cloud-download',
                            text: 'Reporte PDF',
                            tooltip: 'Generar reporte en pdf'
                        }, {
                            iconCls: 'fa fa-file-excel-o',
                            text: 'Reporte Excel',
                            tooltip: 'Genera reporte en excel'
                        },
                    ]
                },
            ]
        };
    },
    _buscarFechas: function () {
        return {
            xtype: 'container',
            userCls: 'big-30 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'datefield',
                    ui: 'datefield-sistema',
                    tooltip: 'Desde',
                    value: new Date(),
                    editable: false
                }, {
                    xtype: 'datefield',
                    ui: 'datefield-sistema',
                    tooltip: 'Hasta',
                    value: new Date(),
                    editable: false
                }
            ]

        };
    },
    _buscarNro: function () {
        return {
            xtype: 'container',
            userCls: 'big-30 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textfield',
                    ui: 'textfield-filtro',
                    flex: 1,
                    emptyText: 'Nro Pedido',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressNroPedido'
                    }
                }
            ]

        };
    },
    _buscarEstado: function () {
        let store = tools.Util.getStoreById('stInventoryStatus').load();
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'ESTADO',
                    padding: 2,
                    store: store,
                    displayField: 'description',
                    valueField: 'idinventory_status',
                    editable: false,
                    queryMode: 'local',
                    listeners: {
                        select: 'onSelectEstado'
                    }

                }
            ]

        };
    },
    _grilla: function (store) {
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable: true,
            height: Ext.manifest.gridHeightAll,
            items: [
                {
                    xtype: 'grid',
                    itemId: 'dgvReposicion',
                    flex: 1,
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    //  scrollable: false,
                    sortableColumns: false,
                    store: store,
                    bbar: me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'nro_orden',
                            header: '<div>Nro. Orden</div>',
                            width: 150,
                            align: 'center'

                        },
                        {
                            dataIndex: 'nro_orden',
                            header: '<div>Tienda</div>',
                            width: 400,
                            align: 'left',
                            renderer: function (value, metadata, record) {
                                if (record.get('store')) {
                                    return record.get('store').address;
                                }
                                else {
                                    return '';
                                }
                            }

                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'date',
                            format: 'Y-m-d',
                            header: '<div>Fecha Pedido</div>',
                            width: 150,
                            align: 'center'

                        },
                        {
                            text: "Estado",
                            columns: [
                                {
                                    dataIndex: 'enabletext',
                                    header: '<div>Status</div>',
                                    align: 'left',
                                    width: 100,
                                },
                                {
                                    dataIndex: 'idinventory_status',
                                    header: '<div>Estado Reposición</div>',
                                    align: 'left',
                                    width: 200,
                                },
                            ]
                        },
                        {
                            xtype: 'actioncolumn',
                            width: 100,
                            align: 'center',
                            anchorSize: 70,
                            header: '<div>Acciones</div>',
                            items: [
                                {
                                    iconCls: 'x-fa fa-pencil',
                                    tooltip: 'Editar',
                                    itemId: 'btnEditarReplacement',
                                    //handler: 'onClick_Editar',
                                    padding: '5'
                                },
                                {
                                    iconCls: 'x-fa fa-trash',
                                    tooltip: 'Eliminar',
                                    itemId: 'btnEliminarReplacemnt',
                                    //handler: 'onClick_Anular',
                                    padding: '5'
                                },
                                {
                                    iconCls: 'x-fa fa-archive',
                                    tooltip: 'Ver detalle a almacen',
                                    handler: 'onClickIngresaPedidoAlamacen',
                                    padding: '5'
                                }
                            ]
                        },
                        { flex: 1 }
                    ]
                }

            ]
        };
    },
    _paginacion: function () {
        return {

            xtype: 'pagingtoolbar',
            displayInfo: true,
            emptyMsg: "Sin elementos a mostrar",

        }
    }
});
