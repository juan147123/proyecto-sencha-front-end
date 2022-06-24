
Ext.define('backoffice.view.tipodocumento.Listado',{
    extend: 'Ext.panel.Panel',
    xtype: 'listadotipodocumento',
    requires: [
        'backoffice.view.tipodocumento.ListadoController',
        'backoffice.view.tipodocumento.ListadoModel'
    ],

    controller: 'tipodocumento-listado',
    viewModel: {
        type: 'tipodocumento-listado'
    },

    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        let tipodocumento = tools.Util.getStoreById('stTipoDocumento');
        tipodocumento.load();
        Ext.apply(me, {
            items:[
                me._grilla(tipodocumento)
            ]
        });
        me.callParent();
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
                    itemId : 'dgvTipoDocumento',
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
                            xtype:'actioncolumn',
                            width:25,
                            align: 'center',
                            anchorSize:50,
                            items: [
                                    {
                                        iconCls: 'x-fa fa-trash',
                                        tooltip: 'Anular',
                                        handler: 'onClick_Anular',
                                        padding : '5'
                                    }
                            ]
                        },
                        {
                            xtype:'actioncolumn',
                            width:25,
                            align: 'center',
                            anchorSize:50,
                            items: [{
                                        iconCls: 'x-fa fa-pencil',
                                        tooltip: 'Editrar',
                                        handler: 'onClick_Editar',
                                        padding : '5'
                                    }
                                
                            ]
                        },
                        {
                            dataIndex: 'nombre',
                            header: '<div>Nombre</div>',
                            align: 'left',
                            width:500,
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
