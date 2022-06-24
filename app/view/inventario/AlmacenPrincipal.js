
Ext.define('backoffice.view.inventario.AlmacenPrincipal', {
    extend: 'Ext.panel.Panel',
    xtype: 'almacen-principal',
    requires: [
        'backoffice.view.inventario.AlmacenPrincipalController',
        'backoffice.view.inventario.AlmacenPrincipalModel'
    ],

    controller: 'inventario-almacenprincipal',
    viewModel: {
        type: 'inventario-almacenprincipal'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            items: [
                // me._botones(),
                me._filtroLocal(),
                me._filtroEstatus(),
                me._buscarFechas(),
                //me._buscarDni(),
                //me._buscarDatos(),
                me._grilla()
            ]
        });
        me.callParent();
    },
    _filtroLocal: function () {
        let store = tools.Util.getStoreById('stStore');
        store.getProxy().url = Ext.manifest.api + 'store';
        store = tools.Util.setHeaderAuth(store);
        store.load();
        return {
            xtype: 'toolbar',
            userCls: 'big-35 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            items: [
                '->',
                {
                    xtype: 'combo',
                    padding: 15,
                    emptyText: '-- STORE --',
                    flex: 1,
                    store: store,
                    displayField: 'address',
                    valueField: 'idstore',
                    editable: false,
                    queryMode: 'local'
                    /* listeners : {
                        click : 'onClickStock'
                    }*/
                },

            ]

        };
    },
    _filtroEstatus: function () {
        let status = tools.Util.getStoreById('stInventoryStatus').load();
        status = tools.Util.setHeaderAuth(status);
        return {
            xtype: 'toolbar',
            userCls: 'big-20 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            items: [
                '->',
                {
                    xtype: 'combo',
                    padding: 15,
                    emptyText: '-- STATUS --',
                    flex: 1,
                    store: status,
                    displayField: 'description',
                    valueField: 'idinventory_status',
                    editable: false,
                    queryMode: 'local'
                    /* listeners : {
                        click : 'onClickStock'
                    }*/
                },

            ]

        };
    },
    _botones: function () {
        return {
            xtype: 'toolbar',
            userCls: 'big-100 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                '->',
                {
                    ui: 'button-sistema',
                    text: 'STOCK',
                    tooltip: 'Muestra el stock actual',
                    listeners: {
                        click: 'onClickStock'
                    }
                },
                {
                    ui: 'button-sistema',
                    text: 'GENERAR',
                    tooltip: 'Genera nueva reposición de stock',
                    listeners: {
                        click: 'onClickGenera'
                    }
                },
                {

                    ui: 'button-sistema',
                    iconCls: 'fa fa-cloud-download',
                    tooltip: 'Generar reporte en pdf'
                }, {
                    ui: 'button-sistema',
                    iconCls: 'fa fa-file-excel-o',
                    tooltip: 'Genera reporte en excel'
                },
            ]

        };
    },
    _buscarFechas: function () {
        return {
            xtype: 'toolbar',
            userCls: 'big-40 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                '->',
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
            userCls: 'big-10 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'NRO.',
                    padding: 2
                }
            ]

        };
    },
    _buscarDni: function () {
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'BUSCAR RUC / DNI',
                    padding: 2
                }
            ]

        };
    },
    _buscarDatos: function () {
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'NOMBRES Y APELLIDOS/RAZON SOCIAL',
                    padding: 2
                }
            ]

        };
    },
    _buscarPlaca: function () {
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'PLACA',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressPlaca'
                    }
                }/*,{
                    xtype : 'button',
                    iconCls : 'fa fa-search'
                },*/
            ]

        };
    },
    _grilla: function () {
        let store = tools.Util.getStoreById('stReplacement')
        store = tools.Util.setHeaderAuth(store);
        store.getProxy().url = Ext.manifest.api + 'replacement';
        store.load();
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
                    itemId: 'dgvAlmacenPrincipal',
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
                            width: 200,
                            align: 'center',
                            anchorSize: 70,
                            header: '<div>Detalle de reposición</div>',
                            items: [
                                {
                                    iconCls: 'x-fa fa-paper-plane',
                                    tooltip: 'Detalles',
                                    handler: 'onClickDetalleReposicion',
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
