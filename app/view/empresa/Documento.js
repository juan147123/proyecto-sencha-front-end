
Ext.define('backoffice.view.empresa.Documento',{
    extend: 'Ext.panel.Panel',
    xtype: 'empresa-documento',
    requires: [
        'backoffice.view.empresa.DocumentoController',
        'backoffice.view.empresa.DocumentoModel'
    ],

    controller: 'empresa-documento',
    viewModel: {
        type: 'empresa-documento'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        let tipodocumento = tools.Util.getStoreById('stTipoDocumento');
        //tipodocumento.load();
        Ext.apply(me, {
            items:[
                me._titulo(),
                me._botones(),
                me._grilla(tipodocumento)
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
                    text : 'CANCELAR',
                    listeners : {
                        click : 'onClickCancelar'
                    }
                },
                {
                    ui : 'button-sistema',
                    text : 'NUEVO',
                    tooltip : 'Agrega un registro de nueva tienda',
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
            html : '<div style="font-size:25px;">Información de documentos y series</div>'
            
        }
    },
    _grilla: function (_tipodocumento) {
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
                    itemId : 'dgvDocumentoSunat',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                   // scrollable: false,
                    sortableColumns :false,
                    store : _tipodocumento,
                    bbar : me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'nombre',
                            header: '<div>Dirección</div>',
                            align: 'left',
                            width:500,
                        },
                        {
                            dataIndex: 'nombre',
                            header: '<div>Celular</div>',
                            align: 'left',
                            width:200,
                        },
                        {
                            dataIndex: 'nombre',
                            header: '<div>Telefono</div>',
                            align: 'left',
                            width:200,
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
                                        padding : '5'
                                    },
                                    {
                                        iconCls: 'x-fa fa-stack-overflow',
                                        tooltip: 'Agregar serie de documento dital',
                                        handler: 'onClickAgredaSerie',
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
                //displayMsg: 'Displaying topics {0} - {1} of {2}',
                //emptyMsg: "No topics to display",
            
        }
    }
});
