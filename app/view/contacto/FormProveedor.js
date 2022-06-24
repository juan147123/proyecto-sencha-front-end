
Ext.define('backoffice.view.contacto.FormProveedor',{
    extend: 'Ext.form.Panel',
    xtype  :'proveedor-registro',
    itemId  :'proveedor-registro',
    requires: [
        'backoffice.view.contacto.FormProveedorController',
        'backoffice.view.contacto.FormProveedorModel'
    ],

    controller: 'contacto-formproveedor',
    viewModel: {
        type: 'contacto-formproveedor'
    },

    bodyPadding : '15 40 15 40',
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
        tipoDocumento     = tools.Util.setHeaderAuth(tipoDocumento);
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
                    value : 0,
                    name : 'idstore',
                    itemId : 'idstore',
                    value : tools.Jwt.getStore()  // TODO: Cambiar por el store seleccionado del login
                },
                {
                    xtype : 'hiddenfield',
                    value : 0,
                    name : 'idsupplier',
                    itemId: 'idsupplier'
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
                    itemId: 'idtype_documentp',
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
                            name : 'number_document',
                            itemId : 'number_documentpr',
                            enableKeyEvents: true,
                            listeners : {
                                keypress: "onKeyPressBuscarDocumento" //( this, e, eOpts ) 
                            },
                            allowBlack:false

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
                    xtype: 'label',
                    text: 'Razon Social',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    name : 'business_name'
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
                    allowBlack:false
                },
                {
                    xtype : 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items : [
                        {
                            xtype: 'label', 
                            text : 'Correo',
                            flex: 1,
                            
                        },{
                            xtype: 'label', 
                            text : 'Celular',
                            flex: 1,
                            
                        }
                    ]  
                },
                {
                    xtype : 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items : [
                        {
                            xtype: 'textfield', 
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name: 'email',
                            vtype: 'email',
                            allowBlack:false
                        },{
                            xtype: 'textfield', 
                            ui: 'datefield-sistema',
                            flex: 1,
                            name : 'cell_phone'
                            
                        }
                    ]  
                },
                {
                    xtype : 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items : [
                        {
                            xtype: 'label', 
                            text : 'Telefono 1',
                            flex: 1,
                            
                        },{
                            xtype: 'label', 
                            text : 'Telefono 2',
                            flex: 1,
                            
                        }
                    ]  
                },
                {
                    xtype : 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items : [
                        {
                            xtype: 'textfield', 
                            ui: 'datefield-sistema',
                            flex: 1,
                            padding: '0 5 0 0',
                            name : 'phone1'
                            
                        },{
                            xtype: 'textfield', 
                            ui: 'datefield-sistema',
                            flex: 1,
                            name : 'phone2'
                            
                        }
                    ]  
                },



            ]

        };
    },
    _panelConf: function () {
        let tipoTasa = tools.Util.getStoreById('stTypeTax');
        tipoTasa     = tools.Util.setHeaderAuth(tipoTasa);
        tipoTasa.load();
        let tipoCompany = tools.Util.getStoreById('stCompanyType');
        tipoCompany     = tools.Util.setHeaderAuth(tipoCompany);
        tipoCompany.load();

        me = this;

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
                    ui : 'button-sistema',
                    text  :'Cancelar',
                    listeners : {
                        click : 'onClickCancelar'
                    }
                },{
                    xtype: 'button', 
                    ui : 'button-sistema-sc',
                    text  :'Grabar',
                    listeners: {
                        click : 'onClickGuardar'
                    }
                
                
                    
                }
            ],
            items: [
                {
                    xtype: 'label',
                    text: 'Tipo Impuesto',
                    flex: 1,
                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    store :tipoTasa,
                    valueField : 'idtype_tax',
                    displayField : 'description',
                    queryMode: 'local',
                    editable: false,
                    name : 'idtype_tax'
                    
                },
                {
                    xtype: 'label',
                    text: 'Tipo Empresa',
                    flex: 1,
                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    store :tipoCompany,
                    valueField : 'idcompany_type',
                    displayField : 'description',
                    queryMode: 'local',
                    editable: false,
                    name : 'idcompany_type'
                    
                },
                {
                    xtype: 'label',
                    text: 'Nota',
                    flex: 1,
                },
                {
                    xtype: 'textarea',
                    flex: 1,
                    name : 'note'
                    
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
