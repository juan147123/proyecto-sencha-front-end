
Ext.define('backoffice.view.facturacion.ListadoPagos', {
    extend: 'Ext.window.Window',
    xtype: 'listado-pagos',
    requires: [
        'backoffice.view.facturacion.ListadoPagosController',
        'backoffice.view.facturacion.ListadoPagosModel'
    ],
    config: {
        ancho: 0,
        largo: 0
    },
    controller: 'listado-pagos',
    viewModel: {
        type: 'listado-pagos'
    },
    title: "Pagos",
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    //autoScroll: true,
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            height: me.getLargo(),
            width: me.getAncho(),
            bodyPadding: 10,
            items: [
                me._panelTitulo('PAGOS'),
                me._formulario(),
                me._grilla(),
                me._panelTotales(),
            ]
        });
        me.callParent();
    },



    _panelTitulo: function (_texto) {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="background-color:#F8D7DA;color:#721C24;font-size: 14px;height: 40px;padding: 10px;">' + _texto + '</div>',

        };
    },
    _formulario: function () {
        let tipopago = tools.Util.getStoreById('stTipoPago');
        tipopago = tools.Util.setHeaderAuth(tipopago);
        tipopago.load();
        return {
            xtype: 'form',
            itemId: 'formpago',
            userCls: 'big-100 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 4,
                ui: 'datefield-sistema'
            },
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [

                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    defaults: {
                        flex: 1,
                        padding: 0,
                        ui: 'datefield-sistema'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Tipo Pago',

                        },
                        {
                            xtype: 'label',
                            text: 'Monto',


                        },
                        
                        {
                            xtype: 'label',
                            text: 'Fecha',


                        },
                        {
                            xtype: 'label',
                            text: '',


                        },
                        {
                            xtype: 'label',
                            text: '',


                        },
                    ]


                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    defaults: {
                        padding: 2,
                        flex: 1,
                        ui: 'datefield-sistema'
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                            itemId: 'idsales',
                            name: 'idsales'

                        },
                        {
                            xtype: 'combo',
                            store: tipopago,
                            displayField: 'descripcion',
                            valueField: 'id',
                            queryMode: 'local',
                            emptyText:'Seleccionar',
                            editable: false,
                            flex: 1,
                            name: 'descripcion',
                            itemId: 'descriptionF',
                            allowBlank: false

                        },
                        {
                            xtype: 'numberfield',
                            flex: 1,
                            emptyText: 'Monto',
                            name: 'monto',
                            itemId: 'montoF',
                            minValue: 1,
                            value: 0,
                            allowBlank: false
                        },
                        {
                            xtype: 'datefield',
                            flex: 1,
                            name: 'fecha',
                            itemId: 'fechaF',
                            value: new Date(),
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
                            ui: 'button-sistema',
                            text: 'AGREGAR PAGO',
                            listeners: {
                                click: 'onClickGuardar'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'button-sistema',
                            text: 'Cerrar',
                            listeners: {
                                click: 'onClickCerrar'
                            }
                        },
                    ]

                }

            ]

        };
    },
    _grilla: function () {
        let store = tools.Util.getStoreById('stPagos');
        store = tools.Util.setHeaderAuth(store);
        /*store.load({
            params: {
                idsales: 45,
            },
        });*/
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable: true,
            height: 400,
            /*tbar: [
                
            ],*/
            items: [
                {
                    xtype: 'grid',
                    flex: 1,
                    itemId: 'dgvPagos',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    sortableColumns: false,
                    store: store,
                    columns: [
                        {
                            dataIndex: 'fecha',
                            header: '<div>Fecha</div>',
                            align: 'center',
                            width: 180,
                        },
                        {
                            dataIndex: 'descripcion',
                            header: '<div>Descripción</div>',
                            align: 'left',
                            width: 400,
                            flex: 1
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'monto',
                            header: '<div>Monto</div>',
                            align: 'rigth',
                            width: 180,
                            format:'0.00'
                        },
                        
                        {
                            xtype: 'actioncolumn',
                            width: 150,
                            align: 'center',
                            header: '<div>Acciones</div>',
                            anchorSize: 100,
                            items: [
                                {
                                    iconCls: 'x-fa fa-trash',
                                    tooltip: 'Eliminar',
                                    handler: 'onClickEliminar',
                                    padding: '0 10 0 0'
                                },
                            ]
                        },

                    ]

                }

            ]
        };
    },

    _panelTotales: function () {
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            bodyStyle: 'background:#fbfafa; padding:5px;',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch',
            },
            defaults: {
                flex: 1,
                padding: 5,
                readOnly: true,
                ui: 'datefield-sistema',
            },
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },
                    defaults: {
                        flex: 1,
                        padding: 5,
                        ui: 'datefield-sistema',
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Total',
                            style: {
                                fontWeight: 'bold',
                                fontSize: '15px',
                                textAlign: 'right'
                            }

                        },
                        {
                            xtype: 'textfield',
                            name: 'total',
                            itemId: 'total',
                            fieldStyle: 'font-size :15px;text-align:right;',
                            allowBlank: false,
                            readOnly:true

                        }
                    ]

                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },
                    defaults: {
                        flex: 1,
                        padding: 5,
                        ui: 'datefield-sistema',
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Delanto',
                            style: {
                                fontWeight: 'bold',
                                fontSize: '15px',
                                textAlign: 'right'
                            }

                        },
                        {
                            xtype: 'textfield',
                            name: 'delanto',
                            itemId: 'delanto',
                            fieldStyle: 'font-size :15px;text-align:right;',
                            allowBlank: false,
                            readOnly:true

                        }
                    ]

                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },
                    defaults: {
                        flex: 1,
                        padding: 5,
                        ui: 'datefield-sistema',
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Saldo',
                            labelAlign: 'right',
                            style: {
                                fontWeight: 'bold',
                                fontSize: '15px',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'textfield',
                            name: 'saldo',
                            itemId: 'saldo',
                            fieldStyle: 'font-size :15px;text-align:right;',
                            allowBlank: false,
                            readOnly:true
                        }
                    ]

                },
            ]

        };
    },
    
});