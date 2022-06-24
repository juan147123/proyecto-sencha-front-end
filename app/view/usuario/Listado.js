
Ext.define('backoffice.view.usuario.Listado',{
    extend: 'Ext.panel.Panel',
    xtype: 'listadousuario',
    
    requires: [
        'backoffice.view.usuario.ListadoController',
        'backoffice.view.usuario.ListadoModel'
    ],

    controller: 'usuario-listado',
    viewModel: {
        type: 'usuario-listado'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },

    initComponent: function () {
        me = this;
        Ext.apply(me, {
            items:[
                me._grilla()
            ]
        });
        me.callParent();
    },
    _grilla: function () {
        let _storeusuario = tools.Util.getStoreById('stUser');
        _storeusuario = tools.Util.setHeaderAuth(_storeusuario);
        _storeusuario.load();
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
                    itemId : 'dgvUsuario',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                  //  scrollable: false,
                    sortableColumns :false,
                    store : _storeusuario,
                    bbar : me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'name',
                            header: '<div>User Name</div>',
                            width : 200,
                            align: 'left'
                        },
                        {
                            dataIndex: 'nro_orden',
                            header: '<div>Nombres y Apellidos</div>',
                            width:350,
                            align : 'left',
                            renderer: function (value, metadata, record) {
                                if(record.get('employee')){
                                    return record.get('employee').name + ' ' +record.get('employee').lastname ;
                                }   
                                else{
                                    return '';
                                }
                            }
                           
                        },
                        {
                            dataIndex: 'email',
                            header: '<div>Email</div>',
                            width:400,
                            align: 'center',
                            renderer:function(v,m){
                                m.tdAttr = Ext.String.format('data-qtip="{0}"', v);
                                m.style = 'color:#cc0315;';
                                return v;
                            }
                        },
                        {
                            dataIndex: 'enabletext',
                            header: '<div>Estado</div>',
                            align: 'center',
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
                            xtype: 'actioncolumn',
                            width: 150,
                            align: 'center',
                            header: '<div>Acciones</div>',
                            anchorSize: 100,
                            items: [{
                                iconCls: 'x-fa fa-eye',
                                tooltip: 'Visualizar',
                                handler: 'onClickVer',
                                padding: '0 10 0 0'
                            },
                            {
                                iconCls: 'x-fa fa-pencil',
                                tooltip: 'Editrar',
                                handler: 'onClickEditar',
                                padding: '0 10 0 0'
                            },
                            {
                                iconCls: 'x-fa fa-trash',
                                tooltip: 'Anular',
                                handler: 'onClickAnular',
                                padding: '5'
                            }

                            ]
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
