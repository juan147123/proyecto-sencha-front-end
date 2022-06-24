
Ext.define('backoffice.view.empresa.Series',{
    extend: 'Ext.panel.Panel',
    xtype  : 'empresa-series',
    requires: [
        'backoffice.view.empresa.SeriesController',
        'backoffice.view.empresa.SeriesModel'
    ],

    controller: 'empresa-series',
    viewModel: {
        type: 'empresa-series'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    listeners: {
        beforeactivate : 'onBeforeActivate'
    },
    initComponent: function () {
        me = this;
        let store = tools.Util.getStoreById('stCorrelative');
        store = tools.Util.setHeaderAuth(store);
      
        Ext.apply(me, {
            items:[
                me._titulo(),
                me._botones(),
                me._grilla(store),
                me._titulo(),
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
                    text : 'ATRAS',
                    listeners : {
                        click : 'onClickCancelar'
                    }
                },
                {
                    ui : 'button-sistema',
                    text : 'NUEVO',
                    tooltip : 'Agrega nuevo correlativo',
                    listeners : {
                        click : 'onClickNuevo'
                    }
                }
            ]

        };
    },
    _titulo:function(){
        return {
            xtype :'container',
            userCls: 'big-100 small-100',
            html : '<div style="font-size:25px;">Configuración de correlativos</div><p>Configure los documentos de ventas y sus series para ser usada en las tiendas o sucursales.'
            
        }
    },
    _grilla: function (store) {
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
                    itemId : 'dgvCorrelative',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                   // scrollable: false,
                    sortableColumns :false,
                    store : store,
                    bbar : me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'document',
                            header: '<div>Documento Venta</div>',
                            align: 'left',
                            width:400,
                            renderer: function (value, metadata, record) {
                                if (record.get('document_sale')) {
                                    metadata.tdAttr = Ext.String.format('data-qtip="{0}"', 
                                    record.get('document_sale').description);
                                    return record.get('document_sale').description;
                                } else {
                                    return '';
                                }


                            }
                        },
                        {
                            dataIndex: 'serie',
                            header: '<div>Serie</div>',
                            align: 'left',
                            width:300,
                        },
                        {
                            dataIndex: 'correlative',
                            header: '<div>Correlativo</div>',
                            align: 'left',
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
                            xtype:'actioncolumn',
                            width:150,
                            align: 'center',
                            header: '<div>Acciones</div>',
                            anchorSize:100,
                            items: [/*{
                                        iconCls: 'x-fa fa-eye',
                                        tooltip: 'Visualizar',
                                        handler: 'onClickVer',
                                        padding : '0 10 0 0'
                                    },*/
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
                                        padding : '5'
                                    },
                                    
                                    
                                    
                                
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
                //displayMsg: 'Displaying topics {0} - {1} of {2}',
                //emptyMsg: "No topics to display",
            
        }
    },
  
});
