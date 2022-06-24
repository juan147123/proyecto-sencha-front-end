
Ext.define('backoffice.view.empresa.Registro', {
    extend: 'Ext.form.Panel',
    xtype: 'empresa-registro',
    itemId: 'form-registro',
    requires: [
        'backoffice.view.empresa.RegistroController',
        'backoffice.view.empresa.RegistroModel',
        'Ext.button.Button',
        'Ext.form.field.FileButton',
        'Ext.form.field.Text',
        'Ext.form.field.File',
    ],
    controller: 'empresa-registro',
    viewModel: {
        type: 'empresa-registro'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    //listeners: {
        //render: 'onRenderPanel'
     /*   beforeshow: 'onBeforeShow'
    },*/
    initComponent: function () {
        me = this;
        let empresa = tools.Util.getStoreById('stBusiness');
        empresa = tools.Util.setHeaderAuth(empresa);
       // empresa.load();
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._panelDatos(),
                //me._panelConf(),
                me._getFoto(),
                me._documento()
            ]
        });
        me.callParent();

        Ext.getBody().mask(Ext.manifest.msgCargando);
        empresa.load({
            callback: function (records, operation, success) {

                if (success) {
                    let business = records[0].data;
                    let nameimg = business.img_logo_empresa_name;
                    tools.Jwt.saveBusiness(business.idbusiness)
                    tools.Util.getByName('idbusiness').setValue(business.idbusiness);
                    tools.Util.getByName('name').setValue(business.name);
                    tools.Util.getByName('idtype_document').setValue(business.idtype_document);
                    tools.Util.getByName('number').setValue(business.number);
                    tools.Util.getByName('address').setValue(business.address);
                    tools.Util.getByName('fiscal_address').setValue(business.fiscal_address);
                    tools.Util.getByName('email').setValue(business.email);
                    tools.Util.getByName('cell_phone').setValue(business.cell_phone);
                    tools.Util.getByName('phone1').setValue(business.phone1);
                    tools.Util.getByName('phone2').setValue(business.phone2);
                    tools.Util.getByName('webpage').setValue(business.webpage);
                    tools.Util.getById('img_logo_empresa_name').setValue(nameimg);
                    if (nameimg != "") {
                        tools.Util.getById('img_logo_empresa').setSrc(
                            Ext.manifest.urlimg + nameimg,
                        );
                    }else{
                        tools.Util.getById('img_logo_empresa').setSrc(
                           'resources/images/not-available.png',
                        );
                    }
                    Ext.getBody().unmask();

                }
            },
            scope: this
        });

    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="font-size:25px;">Configuración de Empresa</div>'

        }
    },
    _panelDatos: function () {
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
                padding: 5,
                ui: 'datefield-sistema',
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'idbusiness',
                    itemId: 'idbusiness',
                    value: 0
                },
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
                    itemId: 'idtype_documentE',
                    queryMode: 'local',
                    editable: false,
                    flex: 1,
                    name: 'idtype_document',
                    allowBlank: false
                },

                {
                    xtype: 'container',
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
                            name : 'number',
                            itemId : 'numberbusiness',
                            enableKeyEvents: true,
                            listeners : {
                                keypress: "onKeyPressBuscarDocumento" //( this, e, eOpts ) 
                            },
                            allowBlack:false

                        }, {
                            xtype: 'button',
                            ui: 'button-sistema',
                            itemId: 'btnBuscarDoc',
                            iconCls: 'fa fa-search',
                            listeners: {
                                click: 'onClickBuscarPersona'
                            }
                        }
                    ]

                },
                {
                    xtype: 'label',
                    text: 'Razon Social',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Razon Social',
                    name: 'name',
                    itemId: 'namebusiness',
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
                },
                {
                    xtype: 'label',
                    text: 'Dirección Fiscal',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Dirección Fiscal',
                    name: 'fiscal_address',
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: 0,
                    items: [
                        {
                            xtype: 'label',
                            text: 'Correo',
                            flex: 1,

                        }, {
                            xtype: 'label',
                            text: 'Celular',
                            flex: 1,

                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
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
                            name: 'email',

                        }, {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            name: 'cell_phone',

                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Telefono 1',
                            flex: 1,

                        }, {
                            xtype: 'label',
                            text: 'Telefono 2',
                            flex: 1,

                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
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
                            name: 'phone1',

                        }, {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            name: 'phone2',

                        }
                    ]
                },
                {
                    xtype: 'label',
                    text: 'Página Web',
                    flex: 1,

                }, {
                    xtype: 'textfield',
                    flex: 1,
                    name: 'webpage',

                }



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
                    html: '<div style="background-color:#F8D7DA;color:#721C24;font-size: 14px;height: 40px;padding: 10px;"><b>IMAGEN :</b> Peso menos a 2MB</div>',

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
                            height: 300,
                            width: 170,
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
    _panelConf: function () {

        return {
            xtype: 'panel',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5
            },
            //bodyStyle:{'background-image': 'linear-gradient(red, orange);'},
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
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Tipo Contacto',
                            flex: 1,
                        },
                        {
                            xtype: 'label',
                            text: 'Descuento (%)',
                            flex: 1,
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combo',
                            flex: 1,
                            padding: '0 5 0 0'
                        },
                        {
                            xtype: 'combo',
                            flex: 1,
                        },
                    ]
                },



                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Linea de Credito (S/.)',
                            flex: 1,
                        },
                        {
                            xtype: 'label',
                            text: 'Credito Disponible (S/.)',
                            flex: 1,
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            flex: 1,
                            value: 0,
                            padding: '0 5 0 0'
                        },

                        {
                            xtype: 'numberfield',
                            flex: 1,
                            value: 0
                        },
                    ]
                },
                {
                    xtype: 'label',
                    text: 'Notas ',
                    flex: 1,
                },
                {
                    xtype: 'textarea',
                    flex: 1,
                    value: 0
                }

            ]

        };
    },
    _documento: function () {
        return {
            xtype: 'container',
            userCls: 'big-25 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            bodyStyle: 'background:#f6f6f6; padding:10px;',
            items: [
                {
                    xtype: 'container',
                    height: 10
                },
                {
                    xtype: 'container',
                    html: '<div style="color:#721C24;font-size: 14px;height: 15px;padding: 10px;">Tiendas</div>',

                },
                {
                    xtype: 'container',
                    height: 10
                },
                {
                    xtype: 'container',
                    html: '<div style="color:#606060;font-size: 14px;height: 100px;padding: 10px;">Configura las tiendas o sucursales, series como Facturas, Boletas,Nota de Crédito,Notas de Venta y Guias de Remisión</div>',

                },
                {
                    xtype: 'button',
                    text: 'Configurar',
                    listeners: {
                        click: 'onClickTiendas'
                    }
                },

                {
                    xtype: 'container',
                    height: 10
                },
                {
                    xtype: 'container',
                    html: '<div style="color:#721C24;font-size: 14px;height: 15px;padding: 10px;">Series</div>',

                },
                {
                    xtype: 'container',
                    height: 10
                },
                {
                    xtype: 'container',
                    html: '<div style="color:#606060;font-size: 14px;height: 70px;padding: 10px;">Configura las series de los documentos digitales</div>',

                },
                {
                    xtype: 'button',
                    text: 'Configurar',
                    listeners: {
                        click: 'onClickSeries'
                    }
                },


            ]
        };
    },
    _tienda: function () {
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
                    html: '<div style="background-color:#F8D7DA;color:#721C24;font-size: 14px;height: 40px;padding: 10px;"><b>IMAGEN :</b> Peso menos a 2MB</div>',

                },
                {
                    xytpe: 'panel',
                    flex: 1,
                    bodyPadding: 10,
                    layout: 'center',
                    bodyStyle: 'background:#ececea; padding:10px;',

                    items: [
                        {
                            xtype: 'textfield',
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



});
