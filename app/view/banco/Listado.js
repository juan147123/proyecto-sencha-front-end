
Ext.define('backoffice.view.banco.Listado',{
    extend: 'Ext.panel.Panel',
    xtype: 'listadobanco',
    requires: [
        'backoffice.view.banco.ListadoController',
        'backoffice.view.banco.ListadoModel',
        'Ext.grid.feature.Grouping'
    ],

    controller: 'banco-listado',
    viewModel: {
        type: 'banco-listado'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        //Cargas stores
        let bancos = tools.Util.getStoreById('stBancos');
        bancos.load();   
        //-****

        Ext.apply(me, {
            items:[
                me._grilla(bancos)
            ]
        });
        me.callParent();
    },
    _grilla: function (_bancos) {
        
        //Configuraciones 
        var feature = Ext.create('Ext.grid.feature.Grouping', {
            startCollapsed: true,
            groupers: [{
                property: 'asset',
                groupFn: function (val) {
                    return '';
                }
            }]
        });

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
                    itemId : 'dgvBanco',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                   // scrollable: false,
                    sortableColumns :false,
                    store : _bancos,
                    bbar : me._paginacion(),
                    features: feature,
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
                            width : 700,
                        },
                        {
                            dataIndex: 'iniciales',
                            header: '<div>Iniciales</div>',
                            align: 'center',
                            width : 200,
                        },
                        {
                            dataIndex: 'enabletext',
                            header: '<div>Baja</div>',
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
