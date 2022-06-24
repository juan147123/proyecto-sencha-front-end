
Ext.define('backoffice.view.contacto.ListadoProveedor',{
    extend: 'Ext.panel.Panel',
    xtype : 'listado-proveedor',
    requires: [
        'backoffice.view.contacto.ListadoProveedorController',
        'backoffice.view.contacto.ListadoProveedorModel',
        'Ext.util.Format'
    ],

    controller: 'contacto-listadoproveedor',
    viewModel: {
        type: 'contacto-listadoproveedor'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent:function(){
        me = this;
        let proveedores = tools.Util.getStoreById('stSupplier');
        proveedores = tools.Util.setHeaderAuth(proveedores);
        proveedores.load();

        Ext.apply(me, {
            items:[
                me._botones(),
                me._buscarDni(),
                me._buscarDatos(),
                me._grilla(proveedores)
            ]
        });
        me.callParent();
    },
    _botones:function(){
        return  {
            xtype : 'toolbar',
            userCls: 'big-100 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                '->',
                {
                    ui : 'button-sistema',
                    text : 'NUEVO PROVEEDOR',
                    tooltip : 'Registro del nuevo cliente',
                    listeners : {
                        click : 'onClickNuevo'
                    }
                },
                {
                    
                    ui : 'button-sistema',
                    iconCls : 'fa fa-cloud-download',
                    tooltip : 'Generar reporte en pdf'
                },
                {
                    ui: 'button-sistema',
                    iconCls: 'fa fa-file-excel-o',
                    tooltip: 'Genera reporte en excel',
                    listeners: {
                        click: 'onClickExcel'
                    }
                }
            ]

        };
    },
    _buscarFechas:function(){
        return  {
            xtype : 'toolbar',
            userCls: 'big-100 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                '->',
                {
                    xtype : 'datefield',
                    ui : 'datefield-sistema',
                    tooltip : 'Desde',
                    value : new Date(),
                    editable :false
                },{
                    xtype : 'datefield',
                    ui : 'datefield-sistema',
                    tooltip : 'Hasta',
                    value : new Date(),
                    editable :false
                }
            ]

        };
    },
    _buscarNro:function(){
        return  {
            xtype : 'container',
            userCls: 'big-10 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                {
                    xtype: 'textfield', 
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText : 'NRO.',
                    padding: 2
                }
            ]

        };
    },
    _buscarDni:function(){
        return  {
            xtype : 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                {
                    xtype: 'textfield', 
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText : 'BUSCAR RUC / DNI',
                    padding: 2,
                    enableKeyEvents:true,
                    listeners : {
                        keypress:'onKeyPressDocument'
                    }
                }
            ]

        };
    },
    _buscarDatos:function(){
        return  {
            xtype : 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[
                {
                    xtype: 'textfield', 
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText : 'NOMBRES Y APELLIDOS/RAZON SOCIAL',
                    padding: 2,
                    enableKeyEvents:true,
                    listeners : {
                        keypress:'onKeyPressName'
                    }
                }
            ]

        };
    },
    _grilla: function (_store) {
        return {
            xtype : 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable : true,
            height: 800,
            items:[
                {
                    xtype: 'exportablegrid',
                    itemId: 'dgvProveedor',
                    flex : 1,
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                  //  scrollable: false,
                    sortableColumns :false,
                    store : _store,
                    bbar: me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'business_name',
                            header: '<div>Razon Social</div>',
                            width:300,
                            align : 'left',
                            renderer:function(v, m){ 
                                m.style = 'color:#3073a6;';
                                m.tdAttr = Ext.String.format('data-qtip="{0}"', v);
                                return v;
                            }
                           
                        },
                        
                        {
                            dataIndex: 'number_document',
                            header: '<div>Documento</div>',
                            width: 200,
                            align: 'left',
                            renderer: function (value, metadata, record) {
                                if(record.get('type_document')){
                                    return record.get('type_document').description;
                                }   
                                else{
                                    return '';
                                }
                            }

                        },
                        
                        {
                            dataIndex: 'number_document',
                            header: '<div>Nro</div><div>Documento</div>',
                            width:150,
                            align : 'center'
                        },
                        {
                            dataIndex: 'phone1',
                            header: '<div>Telefono</div>',
                            width:300,
                            align : 'center'  
                        },
                        {
                            dataIndex: 'created_at',
                            header: '<div>Fecha</div>',
                            width:300,
                            align : 'center'    
                        },
                        {
                            dataIndex: 'enabletext',
                            header: '',
                            align: 'left',
                            width:80,
                            renderer:function(value,metadata,record){
                                if(value ==='ACTIVO'){
                                    return '<div class="x-status-activo">'+value+'</div>';
                                }else{
                                    return '<div class="x-status-inactivo">'+value+'</div>';
                                }
                            }
                        },
                        {
                            xtype: 'actioncolumn',
                            width: 150,
                            align: 'center',
                            header: '<div>Acciones</div>',
                            anchorSize: 100,
                            items: [{
                                iconCls: 'x-fa fa-pencil',
                                tooltip: 'Editar',
                                handler: 'onClick_Editar',
                                padding: '5'
                            },
                            {
                                iconCls: 'x-fa fa-trash',
                                tooltip: 'Anular',
                                handler: 'onClickAnular',
                                padding: '5'
                            }
                            ]
                        },


                      
                        { flex: 1}
                       
                                         
                    ]
        
                }
              
            ]
        };
    },
    _paginacion:function(){
        return {
            
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "Sin elementos a mostrar",
            
        }
    }
});
