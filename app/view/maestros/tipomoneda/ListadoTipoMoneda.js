
Ext.define('backoffice.view.maestros.tipomoneda.ListadoTipoMoneda', {
    extend: 'Ext.panel.Panel',

    xtype: 'listado-tipomoneda',

    requires: [
        'backoffice.view.maestros.tipomoneda.ListadoTipoMonedaController',
        'backoffice.view.maestros.tipomoneda.ListadoTipoMonedaModel'
    ],

    controller: 'maestros-tipomoneda-listadotipomoneda',
    viewModel: {
        type: 'maestros-tipomoneda-listadotipomoneda'
    },



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
                    text: 'NUEVO',
                    tooltip: 'Agrega un registro de nuevo Tipo de Moneda',
                    listeners: {
                        click: 'onClickNuevo'
                    }
                },
                {
                    ui: 'button-sistema',
                    iconCls: 'fa fa-file-excel-o',
                    tooltip: 'Genera reporte en excel',
                    listeners: {
                        click: 'onClickExcel'
                    }
                }
            ]

        };
    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<h2>Información de Tipos de Moneda</h2>'

        }
    },
    _grilla: function () {
        let store = tools.Util.getStoreById('stCoin');
        store = tools.Util.setHeaderAuth(store);
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
                    xtype: 'exportablegrid',
                    flex: 1,
                    itemId: 'dgvMoneda',
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
                            dataIndex: 'description',
                            header: '<div>Descripcion</div>',
                            align: 'left',
                            width: 500,
                        },
                        {
                            dataIndex: 'simbolo',
                            header: '<div>Simbolo</div>',
                            align: 'left',
                            width: 200,
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
