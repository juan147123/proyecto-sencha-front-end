
Ext.define('backoffice.view.producto.ListadoProducto',{
    extend: 'Ext.panel.Panel',
    xtype: 'listado-producto',

    requires: [
        'backoffice.view.producto.ListadoProductoController',
        'backoffice.view.producto.ListadoProductoModel'
    ],

    controller: 'listado-producto',

    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },

    initComponent: function () {
        me = this;
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._botones(),
                me._grilla()
            ]
        })
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
                    text: 'NUEVO',
                    tooltip: 'Agrega un registro de nuevo Forma de Pago',
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
            html: '<h2>Información de Productos</h2>'

        }
    },
    _grilla: function () {
       let store = tools.Util.getStoreById('stProduct');
       store.load();

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
                    itemId: 'dgvProducto',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    sortableColumns: false,
                    store: store,
                    bbar: me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'description',
                            header: '<div>Descripcion</div>',
                            align: 'left',
                            width: 500,
                        },
                        {
                            dataIndex: 'priceunit',
                            header: '<div>Precio</div>',
                            align: 'left',
                            width: 200,
                        },
                        {
                            dataIndex: 'stock',
                            header: '<div>Stock</div>',
                            align: 'left',
                            width: 200,
                        },
                        {
                            dataIndex: 'enabletext',
                            header: '<div>Estado</div>',
                            align: 'left',
                            width: 100
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
