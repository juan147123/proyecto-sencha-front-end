
Ext.define('backoffice.view.contacto.FormCliente', {
    extend: 'Ext.form.Panel',
    xtype: 'cliente-registro',
    itemId: 'cliente-registro',
    requires: [
        'backoffice.view.contacto.FormClienteController',
        'backoffice.view.contacto.FormClienteModel'
    ],
    controller: 'contacto-formcliente',
    viewModel: {
        type: 'contacto-formcliente'
    },
    bodyPadding: '15 40 15 40',
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            trackResetOnLoad: false,
            items: [
                me._panelDatos(),
                me._panelConf()
            ]
        });
        me.callParent();
    },
    _panelDatos: function () {
        let tipoDocumento    = tools.Util.getStoreById('stTypeDocument');
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
                    xtype : 'hiddenfield',
                    name : 'idstore',
                    itemId : 'idstorecli',
                    value : tools.Jwt.getStore() // TODO: Cambiar por el store seleccionado del login
                },
                {
                    xtype : 'hiddenfield',
                    value : 0,
                    name : 'idclient',
                    itemId: 'idclient'
                },
                {
                    xtype: 'label',
                    text: 'Tipo Documento',
                    flex: 1,

                },
                {  //dni | 10
                    xtype :'combo',
                    store : tipoDocumento,
                    displayField  : 'description',
                    valueField : 'idtype_document',
                    queryMode: 'local',
                    editable : false,
                    flex :1,
                    name : 'idtype_document',
                    itemId : 'idtype_documentcli',
                    allowBlank : false
                },
                /*{
                    xtype: 'segmentedbutton',
                    reference: 'positionBtn',
                    defaultUI: "default-toolbar",
                    name : 'idtype_document',
                    items: [{
                        text: 'RUC',
                        value: 1
                    }, {
                        text: 'DNI',
                        value: 2
                    }]
                },*/

                {
                    xtype: 'label',
                    text: 'Nro Documento',
                    flex: 1,

                },

                {
                    xtype: 'fieldcontainer',
                    itemId : 'panelDocumento',
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
                            name : 'number_document',
                            itemId : 'number_documentcli',
                            enableKeyEvents: true,
                            listeners : {
                                keypress: "onKeyPressBuscarDocumento" //( this, e, eOpts ) 
                            },
                            allowBlack:false


                            //44866701 / enter => busqueda();

                        }, {
                            xtype: 'button',
                            ui: 'button-sistema',
                            iconCls: 'fa fa-search',
                            itemId: 'btnBuscarDoc',
                            listeners: {
                                click: 'onClickBuscarPersona'
                            }
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
                            flex: 1,
                            text: 'Nombres'

                        },
                        {
                            xtype: 'label',
                            flex: 1,
                            text: 'Apellidos'

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
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name : 'name',
                            itemId : 'namecli'
                           
                            /* allowBlack:false */
                        },
                        {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            name : 'lastname',
                            itemId : 'lastnamecli',
                           
                        },
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
                    name : 'businessname',
                    itemId : 'businessnamecli',
                    
                   
                },
                {
                    xtype: 'label',
                    text: 'Dirección',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    name : 'address',
                    itemId : 'addresscli',
                    allowBlack:false
                },
                {
                    xtype: 'label',
                    text: 'Dirección Fiscal',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    name: 'address_fiscal',
                    itemId: 'address_fiscalcli'
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
                            name : 'email',
                            itemId : 'emailcli',
                            vtype: 'email',
                            allowBlack:false

                        }, {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            name : 'cell_phone',
                            itemId : 'cell_phonecli'

                        }
                    ]
                },
            ]

        };
    },
    _panelConf: function () {
        let tipoContacto = tools.Util.getStoreById('stTypeContact');
        tipoContacto     = tools.Util.setHeaderAuth(tipoContacto);
        let descuento    = tools.Util.getStoreById('stDiscount');
        descuento        = tools.Util.setHeaderAuth(descuento);
        tipoContacto.load();
        descuento.load();

        return {
            xtype: 'panel',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5,
                ui: 'datefield-sistema',
            },
            //bodyStyle:{'background-image': 'linear-gradient(red, orange);'},
            bbar: [
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'Cancelar',
                    itemId : 'btnCancelar',
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
                },
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'Cerrar',
                    itemId:'btnCerrarPopup',
                    hidden:true,
                    listeners: {
                        click: 'onClickCerrar'
                    }
                },
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
                            name : 'phone1',
                            itemId : 'phone1cli'

                        }, {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            name : 'phone2',
                            itemId : 'phone2cli'

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
                    name : 'webpage',
                    itemId : 'webpagecli',
                    vtype: 'url'

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
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            store : tipoContacto,
                            valueField : 'idtype_contact',
                            displayField : 'description',
                            editable:false,
                            queryMode: 'local',
                            name : 'idtype_contact',
                            itemId : 'idtype_contactcli',
                            allowBlack:false
                        },
                        {
                            xtype: 'combo',
                            ui: 'datefield-sistema',
                            flex: 1,
                            store : descuento,
                            valueField : 'iddiscount',
                            displayField : 'description',
                            editable:false,
                            queryMode: 'local',
                            name: 'iddiscount',
                            itemId: 'iddiscountcli',
                            allowBlack:false
                        },
                    ]
                },



                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                    },
                    items: [
                        {
                            ui: 'datefield-sistema',
                            xtype: 'label',
                            text: 'Linea de Credito (S/.)',
                            flex: 1,
                        },
                        {
                            ui: 'datefield-sistema',
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
                            ui: 'datefield-sistema',
                            flex: 1,
                            value: 0,
                            padding: '0 5 0 0',
                            name : 'credit_line',
                            itemId : 'credit_linecli',
                            minValue : 0
                        },

                        {
                            xtype: 'numberfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            value: 0,
                            name : 'avaible_credit',
                            itemId : 'avaible_creditcli',
                            minValue : 0,
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
                    value: '',
                    name : 'note',
                    itemId : 'notecli'
                },
                this._status()

            ]

        };
    },
    _status:function(){
        return {
            xtype: 'radiogroup',

            layout: {
                autoFlex: false
            },

            defaults: {
                name: 'enable',
                margin: '0 15 0 0'
            },

            items: [{
                boxLabel: 'ACTIVO',
                inputValue: 1,
                checked: true
            }, {
                boxLabel: 'INACTIVO',
                inputValue: 0
            }]
        };
    },

});
