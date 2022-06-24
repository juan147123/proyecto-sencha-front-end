
Ext.define('backoffice.view.contacto.FormPersonal', {
    extend: 'Ext.form.Panel',
    xtype: 'personal-registro',
    itemId: 'personal-registro',
    requires: [
        'backoffice.view.contacto.FormPersonalController',
        'backoffice.view.contacto.FormPersonalModel'
    ],

    controller: 'contacto-formpersonal',
    viewModel: {
        type: 'contacto-formpersonal'
    },
    bodyPadding: '15 40 15 40',
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            trackResetOnLoad: false,
            items: [
                me._panelDatos(),
                me._panelConf()
            ]
        });
        me.callParent();
    },
    _panelDatos: function () {
        let tipoDocumento = tools.Util.getStoreById('stTypeDocument')
        tipoDocumento     = tools.Util.setHeaderAuth(tipoDocumento);
        tipoDocumento.load();

        return {
            xtype: 'form',
            userCls: 'big-50 small-100',// response
            itemId : 'panel1',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5,
                allowBlack:false,
                ui: 'datefield-sistema',
            },
            items: [
                {
                    xtype :'hiddenfield',
                    name : 'iduser',
                    itemId: 'iduser',
                    value : 0,
                   
                },
                {
                    xtype :'hiddenfield',
                    name : 'idemployee',
                    itemId: 'idemployee',
                    value : 0
                },
                {
                    xtype: 'label',
                    text: 'Tipo Documento',
                    flex: 1,

                },
                {
                    xtype :'combo',
                    store : tipoDocumento,
                    displayField  : 'description',
                    valueField : 'idtype_document',
                    itemId: 'idtype_documentPe',
                    queryMode: 'local',
                    editable : false,
                    flex :1,
                    name : 'idtype_document',
                    allowBlank : false
                },
                {
                    xtype: 'label',
                    text: 'Nro Documento',
                    flex: 1,

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
                            name : 'number_document',
                            itemId : 'number_documentp',
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
                    xtype: 'fieldcontainer',
                    padding: 0,
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
                    padding: 0,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults : {
                        allowBlack:false
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name : 'name',
                            itemId: 'namep',
                          
                            
                        },
                        {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name : 'lastname',
                            itemId : 'lastnamep',
                           
                            
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
                    itemId : 'businessnamepr',
                    
                    
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
                    itemId : 'addressp',
                  
                },
                {
                    xtype: 'label',
                    text: 'Direccion Fiscal',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    name  :'address_fiscal',
                    itemId  :'address_fiscalp'
                },
                {
                    xtype: 'label',
                    text: 'Correo',
                    flex: 1,

                }, 
                {
                            
                    xtype: 'textfield',
                    flex: 1,
                    padding: '0 5 0 0',
                    name : 'email',
                    itemId : 'correop',
                    vtype: 'email',
                  
                    

                }, 
                {
                    xtype: 'label',
                    text: 'Celular',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    padding: '0 5 0 0',
                    name : 'cell_phone',
                    itemId : 'cell_phonep',
                  

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
                    padding: 0,
                    items: [
                        {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name : 'phone1',
                            itemId : 'phone1p'

                        }, {
                            xtype: 'textfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name : 'phone2',
                            itemId : 'phone2p'

                        }
                    ]
                }
            ]

        };
    },
    _panelConf: function () {
        let rol = tools.Util.getStoreById('stRol');
        rol     = tools.Util.setHeaderAuth(rol);
        rol.load();

        let store = tools.Util.getStoreById('stStore');
        store.getProxy().url = Ext.manifest.api +  'store';
        store     = tools.Util.setHeaderAuth(store);
        store.load();


        me = this;
        return {
            xtype: 'form',
            userCls: 'big-50 small-100',
            itemId : 'panel2',
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
                    xtype: 'label',
                    text: 'Página Web',
                    flex: 1,

                }, {
                    xtype: 'textfield',
                    flex: 1,
                    name : 'webpage',
                    itemId : 'webpagep',
                    vtype: 'url'

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
                            text: 'Titulo Profesional',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    padding: 0,
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
                            name : 'job_title',
                            itemId : 'job_titlep',
                            allowBlack:false,
                            
                        }

                    ]
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
                            text: 'Salario',
                            flex: 1,

                        },
                        {
                            xtype: 'label',
                            text: 'Tipo Usuario',
                            flex: 1,
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    padding: 0,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [

                        {
                            xtype: 'numberfield',
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name : 'salary',
                            itemId : 'salaryp',
                            value : 0,
                            minValue : 1,
                            maxValue : 5000,
                            allowBlack:false

                        },
                        {
                            xtype: 'combo',
                            ui: 'datefield-sistema',
                            store: rol,
                            displayField: 'description',
                            valueField: 'idrol',
                            queryMode: 'local',
                            editable: false,
                            flex: 1,
                            name: 'idrol',
                            itemId: 'idrolp',
                            padding: '0 5 0 0',
                            emptyText: 'Tipo Usuario',
                            allowBlack:false

                        }

                    ]
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
                            text: 'Tienda',
                            flex: 1,
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    padding: 0,
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
                            name : 'idstore',
                            itemId : 'storep',
                            store : store,
                            valueField : 'idstore',
                            displayField : 'address',
                            editable:false,
                            queryMode : 'local',
                            emptyText : 'Store',
                            allowBlack:false
                        }

                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    padding: 0,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Usuario',
                            flex: 1,
                            
                        },
                        {
                            xtype: 'label',
                            text: 'Password',
                            flex: 1,
                            
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    padding: 0,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            name : 'usuario',
                            ui: 'datefield-sistema',
                            itemId : 'usuario',
                            allowBlack:false,
                            xtype: 'textfield',
                            flex: 1,
                            padding: '0 5 0 0',

                        },
                        {   
                            name : 'password',
                            ui: 'datefield-sistema',
                            itemId : 'contrasena',
                            allowBlack:false,
                            xtype: 'textfield',
                            padding: '0 5 0 0',
                            minLength: 6,
                            flex: 1,
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
                    name : 'note',
                    itemId : 'notep'
                },
                me._status()

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
