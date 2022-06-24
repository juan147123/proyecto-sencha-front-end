
Ext.define('backoffice.view.compra.ListadoCompra',{
    extend: 'Ext.panel.Panel',
    xtype: 'listado-compra',
    requires: [
        'backoffice.view.compra.ListadoCompraController',
        'backoffice.view.compra.ListadoCompraModel'
    ],

    controller: 'compra-listadocompra',
    viewModel: {
        type: 'compra-listadocompra'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent:function(){
        me = this;
        let conductores = tools.Util.getStoreById('stConductores').load();
        Ext.apply(me, {
            items:[
                me._botones(),
                me._buscarFechas(),
               // me._buscarNro(),
               // me._buscarDni(),
               // me._buscarDatos(),
                me._grilla(conductores)
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
                    text : 'NUEVA COMPRA',
                    tooltip : 'Genera nueva del sistema',
                    listeners: {
                        click :'onClickNuevo'
                    }
                },
                {
                    
                    ui : 'button-sistema',
                    iconCls : 'fa fa-cloud-download',
                    tooltip : 'Generar reporte en pdf'
                },{
                    ui : 'button-sistema',
                    iconCls : 'fa fa-file-excel-o',
                    tooltip : 'Genera reporte en excel'
                },
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
                    flex: 1,
                    emptyText : 'BUSCAR RUC',
                    padding: 2
                }/*,{
                    xtype : 'button',
                    iconCls : 'fa fa-search'
                },*/
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
                    flex: 1,
                    emptyText : 'NOMBRES Y APELLIDOS/RAZON SOCIAL',
                    padding: 2
                }/*,{
                    xtype : 'button',
                    iconCls : 'fa fa-search'
                },*/
            ]

        };
    },
    _grilla: function (_conductores) {
        return {
            xtype : 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable : true,
            height: 550,
            items:[
                {
                    xtype: 'grid',
                    flex : 1,
                    itemId : 'dgvCompras',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                   // scrollable: false,
                    sortableColumns :false,
                    store : _conductores,
                    bbar : me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'codigo',
                            header: '<div>Numero</div>',
                            align: 'center',
                            width:120,
                        },
                        {
                            dataIndex: 'cliente',
                            header: '<div>Cliente</div>',
                            align: 'left',
                            width:400,
                        },
                        {
                            dataIndex: 'fechacrea',
                            header: '<div>Creacion</div>',
                            align: 'center',
                            width:100,
                        },
                        {
                            dataIndex: 'fechacrea',
                            header: '<div>Vencimiento</div>',
                            align: 'center',
                            width:100,
                        },
                        {
                            dataIndex: 'enabletext',
                            header: '<div>Estado</div>',
                            align: 'left',
                            width:100,
                            renderer:function(value,metadata,record){
                                if(value ==='ACTIVO'){
                                    return '<div class="x-status-activo">'+value+'</div>';
                                }else{
                                    return '<div class="x-status-inactivo">'+value+'</div>';
                                }
                            }
                        },
                        {
                            type: 'numbercolumn',
                            dataIndex: 'total',
                            header: '<div>Total</div>',
                            align: 'center',
                            width:150,
                        },
                        {
                            xtype:'actioncolumn',
                            width:150,
                            align: 'center',
                            header: '<div>Acciones</div>',
                            anchorSize:100,
                            items: [{
                                        iconCls: 'x-fa fa-eye',
                                        tooltip: 'Visualizar',
                                        handler: 'onClickVer',
                                        padding : '0 10 0 0'
                                    },
                                    {
                                        iconCls: 'x-fa fa-pencil',
                                        tooltip: 'Editrar',
                                        handler: 'onClickEditar',
                                        padding : '0 10 0 0'
                                    },
                                    {
                                        iconCls: 'x-fa fa-trash',
                                        tooltip: 'Anular',
                                        handler: 'onClickAnular',
                                        padding : '0 10 0 0'
                                    },
                                    {
                                        iconCls: 'x-fa fa-send',
                                        tooltip: 'Notificar',
                                        handler: 'onClickNotificar',
                                        padding : '0 10 0 0'
                                    },
                                    {
                                        iconCls: 'x-fa fa-file-pdf-o',
                                        tooltip: 'Descargar PDF',
                                        handler: 'onClickDescargar',
                                        padding : '5'
                                    }
                                    
                                    
                                
                            ]
                        },
                        {
                            flex:1
                        }
                        
                      
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
