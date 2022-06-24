
Ext.define('backoffice.view.venta.Facturacion', {
    extend: 'Ext.form.Panel',
    xtype: 'venta-facturacion',
    itemId: 'venta-facturacion',
    requires: [
        'backoffice.view.venta.FacturacionController',
        'backoffice.view.venta.FacturacionModel'
    ],

    controller: 'venta-facturacion',
    viewModel: {
        type: 'venta-facturacion'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            items: [
                me._titulo(),
                // me._panelLogo(),
                me._panelEmpresa(),
                me._panelSerie(),
                me._panelSeparador(),
                me._panelCliente(),
                me._panelDatos(),
                me._grilla(),
                me._panelEspacio(),
                me._panelTotales(),
                // me._panelTerminos(),
                me._panelNota(),
                me._panelToolBar()

            ]
        });
        me.callParent();
    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="font-size:25px;text-align:right;">Nueva Venta </div>'

        }
    },
    _panelLogo: function () {
        return {
            xtype: 'container',
            userCls: 'big-30 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5
            },
            items: [
                {
                    xtype: 'image',
                    src: Ext.manifest.urlLogoColor,
                    width: 180,
                    height: 180
                }
            ]

        };
    },
    _panelEmpresa: function () {
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5
            },
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'image',
                    name: 'img_logo',
                    margin: '5 10 10 40',
                    border: true,
                    itemId: 'img_logo',
                    src: 'resources/images/isamc.png',
                    height: 150,
                    width: 150,
                },
            ]

        };
    },
    _panelSerie: function () {

        let documentsales = tools.Util.getStoreById('stDocumentSales');
        let Correlativo = tools.Util.getStoreById('stCorrelative');
        documentsales = tools.Util.setHeaderAuth(documentsales);
        Correlativo = tools.Util.setHeaderAuth(Correlativo);

        documentsales.load();
        Correlativo.load();
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },

            defaults: {
                padding: 5,
            },
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults: {
                        padding: 4,
                        ui: 'datefield-sistema',
                    },
                    items: [
                        {
                            xtype: 'hiddenfield',
                            name: 'idsales',
                            itemId: 'idsalesF',
                            value: 0,
                            editable: false,
                            allowBlack: false
                        },
                        {
                            xtype: 'hiddenfield',
                            value: tools.Jwt.getStore(),
                            editable: false,
                            name: 'idstore',
                            itemId: 'idstoreF',
                            allowBlack: false

                        },
                        {
                            xtype: 'label',
                            text: 'Documento de cotizacion'
                        },
                        {
                            xtype: 'combo',
                            flex: 1,
                            padding: '0 5 0 0',
                            store: documentsales,
                            valueField: 'iddocument_sales',
                            displayField: 'description',
                            editable: false,
                            queryMode: 'local',
                            name: 'iddocument_sales',
                            itemId: 'iddocument_salesF',
                            listeners: {
                                select: 'onSelectedDocument'
                            },
                            allowBlack: false

                        },
                        /* {
                            xtype: 'label',
                            text: 'Tienda'
                        },
                        {
                            xtype: 'combo',
                        }, */
                        {
                            xtype: 'label',
                            text: 'Correlativo'
                        },
                        {
                            xtype: 'combo',
                            flex: 1,
                            padding: '0 5 0 0',
                            store: Correlativo,
                            valueField: 'idcorrelative',
                            displayField: 'serie',
                            editable: false,
                            queryMode: 'local',
                            name: 'idcorrelative',
                            itemId: 'idcorrelativeF',
                            allowBlack: false
                        }
                    ]

                }
            ]

        };
    },
    _panelSeparador: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            flex: 1,
            html: '<div style=" border-bottom: 2px solid #64B7B2;"></div>'

        };
    },
    _panelTotales: function () {
        return {
            xtype: 'panel',
            userCls: 'big-30 small-100',
            bodyStyle: 'background:#fbfafa; padding:5px;',
            flex: 1,
            layout: {
                type: 'vbox',
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
                            text: 'Sub Total',
                            style: {
                                fontWeight: 'bold',
                                fontSize: '15px',
                                textAlign: 'right'
                            }

                        },
                        {
                            xtype: 'numberfield',
                            name: 'subtotal',
                            itemId: 'subtotal2F',
                            value: 0.0,
                            format: '0.00',
                            fieldStyle: 'font-size :15px;text-align:right;',
                            allowBlank: false
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
                            text: 'IGV(18%)',
                            labelAlign: 'right',
                            style: {
                                fontWeight: 'bold',
                                fontSize: '15px',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'numberfield',
                            name: 'igv',
                            itemId: 'igv2F',
                            value: 0,
                            format: '0.00',
                            fieldStyle: 'font-size :15px;text-align:right;',
                            allowBlank: false
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
                            text: 'Total',
                            style: {
                                fontWeight: 'bold',
                                fontSize: '15px',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'numberfield',
                            value: 0,
                            name: 'total',
                            itemId: 'total2F',
                            format: '0.00',
                            fieldStyle: 'font-size :15px;text-align:right;',
                            allowBlank: false
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
                            value: 0,
                            enableKeyEvents: true,
                            style: {
                                fontWeight: 'bold',
                                fontSize: '15px',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'numberfield',
                            name: 'delanto',
                            itemId: 'delanto2F',
                            value: 0,
                            enableKeyEvents: true,
                            listeners: {
                                keyup: "onKeyPressCalcularDelanto"
                            },
                            fieldStyle: 'font-size :15px;text-align:right;',
                            allowBlank: false
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
                            style: {
                                fontWeight: 'bold',
                                fontSize: '15px',
                                textAlign: 'right'
                            }
                        },
                        {
                            xtype: 'numberfield',
                            name: 'saldo',
                            itemId: 'saldo2F',
                            value: 0,
                            fieldStyle: 'font-size :15px;text-align:right;',
                            allowBlank: false
                        }
                    ]

                }
            ]

        };
    },
    _panelTerminos: function () {
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            defaults: {
                padding: 5
            },
            flex: 1,
            items: [
                {
                    xtype: 'label',
                    text: 'Terminos y Condiciones'
                },
                {
                    xtype: 'textarea',
                    name: 'terminos',
                    ui: 'datefield-sistema'
                }
            ]

        };
    },
    _panelNota: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            defaults: {
                padding: 5
            },
            flex: 1,
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'label',
                    text: 'Notas Tecnicas (Fabricación y/o Biselado)'
                },
                {
                    xtype: 'textarea',
                    name: 'notes',
                    itemId: 'notes2F',
                    height: 150,
                    ui: 'datefield-sistema'
                }
            ]

        };
    },
    _panelToolBar: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            flex: 1,
            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        '->',
                        {
                            xtype: 'button',
                            ui: 'button-sistema',
                            text: 'Cancelar',
                            listeners: {
                                click: 'onClickCancelar'
                            }
                        },
                        {
                            xtype: 'button',
                            ui: 'button-sistema',
                            text: 'Guardar',
                            listeners: {
                                click: 'onClickGuardar'
                            }


                        }
                    ]
                }
            ]
        }
    },
    _panelEspacio: function () {
        return {
            xtype: 'container',
            userCls: 'big-70 small-100',
            flex: 1,
        };
    },
    _panelNotificaciones: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            flex: 1,
            html: '<div style=" border-bottom: 2px solid #64B7B2;"></div>'

        };
    },
    _panelCliente: function () {
        let tipoDocumento = tools.Util.getStoreById('stTypeDocument');
        tipoDocumento = tools.Util.setHeaderAuth(tipoDocumento);
        tipoDocumento.load();
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
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
                    xtype: 'label',
                    text: 'Tipo Documento',
                    flex: 1,

                },
                {  //dni | 10
                    xtype: 'combo',
                    store: tipoDocumento,
                    displayField: 'description',
                    valueField: 'idtype_document',
                    queryMode: 'local',
                    editable: false,
                    flex: 1,
                    name: 'idtype_document',
                    itemId: 'idtype_documentF',
                    allowBlank: false
                },
                {
                    xtype: 'label',
                    text: 'Nro Documento',
                    flex: 1,

                },

                {
                    xtype: 'fieldcontainer',
                    itemId: 'panelDocumento',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name: 'number_document',
                            itemId: 'number_documentF',
                            enableKeyEvents: true,
                            listeners: {
                                keypress: "onKeyPressBuscarDocumento" //( this, e, eOpts ) 
                            },
                            allowBlack: false


                            //44866701 / enter => busqueda();

                        }, {
                            xtype: 'button',
                            ui: 'button-sistema',
                            iconCls: 'fa fa-search',
                            itemId: 'btnBuscarDoc',
                            listeners: {
                                click: 'onClickBuscarDocumento'
                            }
                        }
                    ]

                },
                {
                    xtype: 'label',
                    text: 'Cliente',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Razon Social',
                    name: 'businessname',
                    itemId: 'businessnameF',
                    allowBlank: false
                },

                {
                    xtype: 'label',
                    text: 'Dirección',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Dirección',
                    name: 'address',
                    itemId: 'addressF',
                    allowBlank: false
                },
                {
                    xtype: 'label',
                    text: 'Telefono',
                    flex: 1,
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Telefono',
                    name: 'phone',
                    itemId: 'phoneF',
                    allowBlank: false
                },
            ]

        };
    },
    _panelDatos: function () {
        let formapago = tools.Util.getStoreById('stFormaPago');
        formapago = tools.Util.setHeaderAuth(formapago);

        let personal = tools.Util.getStoreById('stEmployee');
        personal = tools.Util.setHeaderAuth(personal);

        let pago = tools.Util.getStoreById('stCoin');
        pago = tools.Util.setHeaderAuth(pago);

        pago.load();
        personal.load();
        formapago.load();
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 4
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
                            text: 'Fecha Emision',

                        },
                        {
                            xtype: 'label',
                            text: 'Tiempo de Entrega',


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
                            xtype: 'datefield',
                            name: 'date_issue',
                            itemId: 'date_issueF',
                            value: new Date()
                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            defaults: {
                                flex: 1,
                                ui: 'datefield-sistema'
                            },
                            items: [
                                {
                                    xtype: 'datefield',
                                    name: 'delivery_date',
                                    itemId: 'delivery_dateF',
                                    value: new Date()


                                },
                                {
                                    xtype: 'timefield',
                                    name: 'delivery_time',
                                    itemId: 'delivery_timeFac',
                                    value: new Date()
                                }
                            ]
                        }

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
                        flex: 1,
                        padding: 0,
                        ui: 'datefield-sistema'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Forma Pago',
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
                        flex: 1,
                        padding: 2,
                        ui: 'datefield-sistema'
                    },
                    items: [
                        {
                            xtype: 'combo',
                            emptyText: '-- SELECCIONAR --',
                            flex: 1,
                            padding: '0 5 0 0',
                            store: formapago,
                            valueField: 'idmethodpay',
                            displayField: 'description',
                            editable: false,
                            queryMode: 'local',
                            name: 'idmethodpay',
                            itemId: 'idmethodpayFac',
                            allowBlack: false

                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        flex: 1,
                        padding: 0,
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Moneda',
                        },
                        {
                            xtype: 'label',
                            text: 'Tipo Cambio',
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        flex: 1,
                        padding: 2,
                        ui: 'datefield-sistema'
                    },
                    items: [
                        {
                            xtype: 'combo',
                            emptyText: '-- SELECCIONAR --',
                            flex: 1,
                            padding: '0 5 0 0',
                            store: pago,
                            valueField: 'idcoin',
                            displayField: 'description',
                            editable: false,
                            queryMode: 'local',
                            name: 'idcoin',
                            itemId: 'idcoinF',
                            allowBlack: false
                        },

                        {
                            xtype: 'numberfield',
                            name: 'exchange_type',
                            itemId: 'exchange_typeF',
                            value: 0.0
                        }
                    ]
                },
                {
                    xtype: 'label',
                    text: 'Vendedor',
                    flex: 1,
                    padding: 4

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    emptyText: '-- SELECCIONAR --',
                    flex: 1,
                    padding: '0 5 0 0',
                    store: personal,
                    valueField: 'idemployee',
                    displayField: 'datos',
                    editable: false,
                    queryMode: 'local',
                    name: 'idemployee',
                    itemId: 'idemployeeF',
                    allowBlack: false
                },



            ]

        };
    },
    _getFoto: function () {
        return {
            xtype: 'form',
            itemId: 'form_empresafoto',
            userCls: 'big-25 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            bodyStyle: 'background:#f6f6f6; padding:10px;',
            bbar: [
                '->',
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'Cancelar',
                    listeners: {
                        click: 'onClickCancelar'
                    }
                }, {
                    xtype: 'button',
                    ui: 'button-sistema-sc',
                    text: 'Grabar',
                    listeners: {
                        click: 'onClickGuardar'
                    }



                }
            ],
            items: [
                {
                    xtype: 'container',
                    html: '<div style="background-color:#F8D7DA;color:#721C24;font-size: 14px;height: 40px;padding: 10px;">IMAGEN : Peso menos a 2MB</div>',

                },
                {
                    xytpe: 'panel',
                    flex: 1,
                    bodyPadding: 10,
                    layout: 'center',
                    bodyStyle: 'background:#ececea; padding:10px;',

                    items: [
                        {
                            xtype: 'hiddenfield',
                            itemId: 'img_logo_empresa_name'
                        },
                        {
                            xtype: 'image',
                            name: 'img_logo_empresa',
                            border: true,
                            itemId: 'img_logo_empresa',
                            src: 'resources/images/not-available.png',
                            height: 150,
                            width: 150,
                            tooltip: 'Seleccionar una imagen con las extensiones ( jpg,jpeg,bmp )'
                        },

                    ],

                    tbar: [
                        {
                            xtype: 'container',
                            html: '<h3>Foto</h3>'

                        },
                        {
                            xtype: 'filebutton',
                            itemId: 'file_foto_empresa',
                            iconCls: 'fa fa-camera',
                            listeners: {
                                change: 'onChangeCargarImgEmpresa'
                            },
                        },
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-bitbucket',
                            tooltip: 'Quitar imagen',
                            handler: 'onClickRemoverImgEmpresa'
                        }
                    ],

                }
            ]
        };
    },
    _grilla: function () {
        let _detalle = tools.Util.getStoreById('stDetalleFacturacion');
        _detalle.removeAll();

        rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToMoveEditor: 1,
            autoCancel: false
        });
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable: true,
            bodyStyle: 'background:#f4f5f5; padding:5px;',
            height: Ext.manifest.gridHeightAll,
            tbar: [
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'AGREGAR PRODUCTO',
                    listeners: {
                        click: 'onClickBuscarProducto'
                    }
                },
                /* {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'AGREGAR PRODUCTO',
                    listeners: {
                        click: 'onTest'
                    }
                } */
            ],
            items: [
                {
                    xtype: 'grid',
                    flex: 1,
                    itemId: 'dgvDetVentas',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    sortableColumns: false,
                    store: _detalle,
                    height: 400,
                    selModel: 'rowmodel',
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 1
                    },
                    listeners: {
                        edit: 'onEditCantidadPrecio'
                    },
                    columns: [
                        {
                            dataIndex: 'descripcion',
                            header: '<div>Descripcion</div>',
                            align: 'left',
                            width: 500,
                        },
                        {
                            dataIndex: 'add',
                            header: '<div>ADD</div>',
                            align: 'left',
                            width: 100,
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            dataIndex: 'cantidad',
                            header: '<div>Cantidad</div>',
                            align: 'right',
                            width: 130,
                            editor: {
                                xtype: 'numberfield'
                            }
                        },
                        {
                            type: 'numbercolumn',
                            dataIndex: 'precio',
                            header: '<div>Precio U.</div>',
                            align: 'right',
                            format: '0.00',
                            width: 130,
                            editor: {
                                xtype: 'numberfield'
                            }
                        },
                        /*{
                            type: 'numbercolumn',
                            dataIndex: 'impuesto',
                            header: '<div>Impuesto</div>',
                            align: 'right',
                            width: 130,
                            format : '0.00',
                        },*/
                        {
                            type: 'numbercolumn',
                            dataIndex: 'total',
                            header: '<div>Total</div>',
                            align: 'right',
                            width: 150,
                            format: '0.00',
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
                                    tooltip: 'Anular',
                                    handler: 'onClickAnular',
                                    padding: '0 10 0 0'
                                }
                            ]
                        },
                        {
                            flex: 1
                        }


                    ]

                }

            ]
        };
    },
});
