
Ext.define('backoffice.view.estado.Listado', {
    extend: 'Ext.panel.Panel',
    xtype: 'listadoestado',
    requires: [
        'backoffice.view.estado.ListadoController',
        'backoffice.view.estado.ListadoModel'
    ],

    controller: 'estado-listado',
    viewModel: {
        type: 'estado-listado'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        let estado = tools.Util.getStoreById('stEstadoConductor');
        Ext.apply(me, {
            items: [
                me._grilla(estado)
            ]
        });
        me.callParent();
    },
    _grilla: function (_estado) {
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable: true,
            height: 550,
            items: [
                {
                    xtype: 'grid',
                    flex: 1,
                    itemId: 'dgvEstado',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    //scrollable: false,
                    sortableColumns: false,
                    store: _estado,
                    bbar: me._paginacion(),
                    columns: [
                        {
                            xtype: 'actioncolumn',
                            width: 25,
                            align: 'center',
                            anchorSize: 50,
                            items: [{
                                iconCls: 'x-fa fa-pencil',
                                tooltip: 'Editrar',
                                handler: 'onClick_Editar',
                                padding: '5'
                            }
                            ]
                        },
                        {
                            xtype: 'actioncolumn',
                            width: 25,
                            align: 'center',
                            anchorSize: 50,
                            items: [
                                {
                                    iconCls: 'x-fa fa-trash',
                                    tooltip: 'Anular',
                                    handler: 'onClick_Anular',
                                    padding: '5'
                                }
                            ]
                        },
                        {
                            dataIndex: 'nombre',
                            header: '<div>Nombre</div>',
                            align: 'left',
                            width:600
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
    _paginacion: function () {
        return {

            xtype: 'pagingtoolbar',
            displayInfo: true,
            //displayMsg: 'Displaying topics {0} - {1} of {2}',
            //emptyMsg: "No topics to display",

        }
    }
});
