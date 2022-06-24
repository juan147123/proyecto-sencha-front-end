
Ext.define('backoffice.view.proveedor.ListadoPedido', {
    extend: 'Ext.panel.Panel',
    xtype: 'proveedor-listado-pedido',
    requires: [
        'backoffice.view.proveedor.ListadoPedidoController',
        'backoffice.view.proveedor.ListadoPedidoModel'
    ],

    controller: 'proveedor-listadopedido',
    viewModel: {
        type: 'proveedor-listadopedido'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        let order = tools.Util.getStoreById('stOrder').load();
        order = tools.Util.setHeaderAuth(order);
        console.log(order)
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._botones(),
                me._buscarFechas(),
                me._buscarDni(),
                me._buscarDatos(),
                me._grilla(order)
            ]
        });
        me.callParent();
    },
    _titulo: function () {
        return {
            xtype: 'container',
            pading: 10,
            userCls: 'big-100 small-100',
            html: '<div style="font-size:25px;">Listado de Pedido a Proveedor</div><p><p>[descripcion].'

        }
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
                    text: 'NUEVO',
                    tooltip: 'Genera nuevo pedido al proveedor',
                    listeners: {
                        click: 'onClickNuevo'
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
            userCls: 'big-30 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                //'->',
                {
                    xtype: 'datefield',
                    itemId: 'date1',
                    ui: 'datefield-sistema',
                    tooltip: 'Desde',
                    value: moment(new Date()).format("01-MM-YYYY"),
                    listeners: {
                        select: 'onClickFiltrarFecha',
                    },
                    editable: false,
                    flex: 1
                }, {
                    xtype: 'datefield',
                    itemId: 'date2',
                    ui: 'datefield-sistema',
                    tooltip: 'Hasta',
                    value: new Date(),
                    editable: false,
                    flex: 1,
                    listeners: {
                        select: 'onClickFiltrarFecha',
                    },
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
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'BUSCAR DOCUMENTO',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressDocument'
                    }
                }
            ]

        };
    },
    _buscarDatos: function () {
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'NOMBRES Y APELLIDOS/RAZON SOCIAL',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressName'
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
            height: 800,
            items: [
                {
                    xtype: 'grid',
                    itemId: 'dgvOrder',
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
                            xtype: 'actioncolumn',
                            width: 25,
                            align: 'center',
                            anchorSize: 70,
                            items: [
                                {
                                    iconCls: 'x-fa fa-trash',
                                    tooltip: 'Baja',
                                    handler: 'onClickAnular',
                                    padding: '5'
                                }
                            ]
                        },

                        {
                            dataIndex: 'typetransaction',
                            header: '<div>Tipo transacción</div>',
                            width: 300,
                            align: 'left',


                        },
                        {
                            dataIndex: 'business_name',
                            header: '<div>Proveedor</div>',
                            width: 300,
                            align: 'left',


                        },
                        {
                            dataIndex: 'number_document',
                            header: '<div>Nro Documento</div>',
                            width: 300,
                            align: 'left',


                        },
                        {
                            xtype: 'actioncolumn',
                            width: 25,
                            align: 'center',
                            anchorSize: 70,
                            items: [
                                {
                                    iconCls: 'x-fa fa-pencil',
                                    tooltip: 'Editar',
                                    handler: 'onClickEditar',
                                    padding: '5'
                                }

                            ]
                        },
                        {
                            dataIndex: 'statustext',
                            header: '',
                            align: 'left',
                            width: 100,
                            renderer: function (value, metadata, record) {
                                if (value === 'ACTIVO') {
                                    return '<div class="x-status-activo">' + value + '</div>';
                                } else {
                                    return '<div class="x-status-inactivo">' + value + '</div>';
                                }
                            }
                        },
                        {
                            xtype: 'datecolumn',
                            format: 'd/m/Y',
                            dataIndex: 'date',
                            header: '<div>Fecha</div>',
                            width: 300,
                            align: 'center',


                        },


                        { flex: 1 }
                        /*{
                            dataIndex: 'idEstadoConductor',
                            text: 'Estado',
                            align : 'center',
                            flex: 1,
                            renderer:function(value,metadata,record){
                                return record.get('estadoConductor').nombre;
                            }
                        },*/

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
