
Ext.define('backoffice.view.empresa.Tienda', {
    extend: 'Ext.panel.Panel',
    xtype: 'empresa-tienda',
    requires: [
        'backoffice.view.empresa.TiendaController',
        'backoffice.view.empresa.TiendaModel'
    ],

    controller: 'empresa-tienda',
    viewModel: {
        type: 'empresa-tienda'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    /*listeners: {
        beforeactivate : 'onBeforeActivate'
    },*/
    initComponent: function () {
        me = this;
        let store = tools.Util.getStoreById('stStore');
        store = tools.Util.setHeaderAuth(store);
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._botones(),
                me._grilla(store)
            ]
        });
        me.callParent();
    },
    _botones: function () {
        return {



            xtype: 'toolbar',
            userCls: 'big-100 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                '->',
                {
                    ui: 'button-sistema',
                    text: 'ATRAS',
                    listeners: {
                        click: 'onClickCancelar'
                    }
                },
                {
                    ui: 'button-sistema',
                    text: 'NUEVO',
                    tooltip: 'Agrega un registro de nueva tienda',
                    listeners: {
                        click: 'onClickNuevo'
                    }
                }
            ]

        };
    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="font-size:25px;">Información de tiendas o surcursales</div>'

        }
    },
    _grilla: function (store) {
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
                    itemId: 'dgvTienda',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    // scrollable: false,
                    sortableColumns: false,
                    store: store,
                    bbar: me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'address',
                            header: '<div>Dirección</div>',
                            align: 'left',
                            width: 400,
                        },
                        {
                            dataIndex: 'contact',
                            header: '<div>Contacto</div>',
                            align: 'left',
                            width: 300,
                        },
                        {
                            dataIndex: 'cell_phone',
                            header: '<div>Celular</div>',
                            align: 'left',
                            width: 100,
                        },
                        {
                            dataIndex: 'phone',
                            header: '<div>Telefono</div>',
                            align: 'left',
                            width: 100,
                        },
                        {
                            dataIndex: 'ipaddress',
                            header: '<div>IP</div>',
                            align: 'left',
                            width: 150,
                        },
                        {
                            dataIndex: 'enabletext',
                            header: '<div>Estado</div>',
                            align: 'left',
                            width: 100,
                            renderer: function (value, metadata, record) {
                                if (value === 'ACTIVO') {
                                    return '<div class="x-status-activo">' + value + '</div>';
                                } else {
                                    return '<div class="x-status-inactivo">' + value + '</div>';
                                }
                            }
                        },
                        {
                            xtype: 'actioncolumn',
                            width: 150,
                            align: 'center',
                            header: '<div>Acciones</div>',
                            anchorSize: 100,
                            items: [
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
                        {
                            flex: 1
                        }


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
