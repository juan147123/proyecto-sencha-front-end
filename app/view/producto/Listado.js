
Ext.define('backoffice.view.producto.Listado', {
    extend: 'Ext.container.Container',
    xtype: 'producto-listado',
    requires: [
        'backoffice.view.producto.ListadoController',
        'backoffice.view.producto.ListadoModel'
    ],

    controller: 'producto-listado',
    viewModel: {
        type: 'producto-listado'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    listeners: {
        beforeactivate: 'onBeforeActivate'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._panelFiltros(),
                me._botones(),
                me._grilla()
            ]
        });
        me.callParent();
    },
    _panelFiltros: function () {
        return {
            xtype: 'panel',
            title: 'Buscar Por',
            ui: 'light',
            userCls: 'big-100 small-100',
            layout: {
                type: 'responsivecolumn',
                align: 'stretch'
            },
            titleCollapse: true,
            wrapOver: false,
            collapsible: true,
            collapsed: true,
            items: [
                me._buscarCategoria(),
                me._buscarMaterial(),
                me._buscarTipo(),
                me._buscarColor(),
                me._buscarIndice(),
                me._buscarMarca(),
                me._buscarTratamiento(),
                me._botonBuscar()
            ]


        };
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
                    tooltip: 'Agrega un registro de nueva Categoria',
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
            html: '<div style="font-size:25px;">Listado de Productos</div><p><p>[comentario]',
            padding: '20 0 20 0',

        }
    },
    _buscarCategoria: function () {
        let store = tools.Util.getStoreById('stCategory').load();
        return {
            xtype: 'container',
            userCls: 'big-30 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'CATEGORIA',
                    padding: 2,
                    store: store,
                    displayField: 'description',
                    valueField: 'idcategory',
                    editable: true,
                    queryMode: 'local',
                    itemId: 'cboCategoria',
                    enableKeyEvents: true,
                    listeners: {
                        select: 'onSelectCategoria',
                        keyup: 'onkeyUpCategoria'
                    }

                }
            ]

        };
    },
    _buscarMaterial: function () {
        let store = tools.Util.getStoreById('stMaterial').load();
        return {
            xtype: 'container',
            userCls: 'big-30 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'MATERIAL',
                    padding: 2,
                    store: store,
                    displayField: 'description',
                    valueField: 'idmaterial',
                    editable: true,
                    queryMode: 'local',
                    itemId: 'cboMaterial',
                    listeners: {
                        select: 'onSelectMaterial'
                    }

                }
            ]

        };
    },
    _buscarTipo: function () {
        let store = tools.Util.getStoreById('stType').load();
        return {
            xtype: 'container',
            userCls: 'big-30 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TIPO',
                    padding: 2,
                    store: store,
                    displayField: 'description',
                    valueField: 'idtype',
                    itemId: 'cboTipo',
                    editable: true,
                    queryMode: 'local',
                    listeners: {
                        select: 'onSelectType'
                    }

                }
            ]

        };
    },
    _buscarColor: function () {
        let store = tools.Util.getStoreById('stInventoryStatus').load();
        store = tools.Util.setHeaderAuth(store);
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'COLOR',
                    padding: 2,
                    store: store,
                    itemId: 'cboColor',
                    displayField: 'description',
                    valueField: 'idcolor',
                    editable: true,
                    queryMode: 'local',
                    listeners: {
                        select: 'onSelectColor'
                    }

                }
            ]

        };
    },
    _buscarIndice: function () {
        let store = tools.Util.getStoreById('stInventoryStatus').load();
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'INDICE',
                    padding: 2,
                    store: store,
                    itemId: 'cboIndex',
                    displayField: 'description',
                    valueField: 'idindex',
                    editable: true,
                    queryMode: 'local',
                    listeners: {
                        select: 'onSelectIndice'
                    }

                }
            ]

        };
    },
    _buscarMarca: function () {
        let store = tools.Util.getStoreById('stInventoryStatus').load();
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'MARCA',
                    padding: 2,
                    store: store,
                    itemId: 'cboMarca',
                    displayField: 'description',
                    valueField: 'idbrand',
                    editable: true,
                    queryMode: 'local',
                    listeners: {
                        select: 'onSelectMarca'
                    }

                }
            ]

        };
    },
    _buscarTratamiento: function () {
        let store = tools.Util.getStoreById('stInventoryStatus').load();
        return {
            xtype: 'container',
            userCls: 'big-30 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TRATAMIENTO',
                    padding: 2,
                    store: store,
                    itemId: 'cboTratamiento',
                    displayField: 'description',
                    valueField: 'idtreatment',
                    editable: true,
                    queryMode: 'local',
                    listeners: {
                        select: 'onSelectTratamiento'
                    }

                }
            ]

        };
    },
    _botonBuscar: function () {
        return {
            xtype: 'container',
            userCls: 'big-10 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'Buscar',

                    //anita
                }
            ]

        };
    },
    _grilla: function () {
        let store = tools.Util.getStoreById('stProduct');
        store = tools.Util.setHeaderAuth(store);
        store.load({
            params: {
                idcategory: 0,
                idmaterial: 0,
                idtype: 0,
                idcolor: 0,
                idindex: 0,
                idbrand: 0,
                idtreatment: 0
            },
        });

        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            //padding : '50 0 0 0',
            scrollable: true,
            height: 700,
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
                    // scrollable: false,
                    sortableColumns: false,
                    store: store,
                    bbar: me._paginacion(store),
                    columns: [
                        {
                            dataIndex: 'description',
                            header: '<div>Descripcion</div>',
                            align: 'left',
                            width: 900,
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
    _paginacion: function (store) {
        return {

            xtype: 'pagingtoolbar',
            displayInfo: true,
            //displayMsg: 'Displaying topics {0} - {1} of {2}',
            //emptyMsg: "No topics to display",
            listeners: {
                beforechange: function () {
                    store.getProxy().extraParams = {
                        idcategory: null,
                        idmaterial: null,
                        idtype: null,
                        idcolor: null,
                        idindex: null,
                        idbrand: null,
                        idtreatment: null
                    };
                }
            }

        }
    }
});
