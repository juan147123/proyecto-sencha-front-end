
Ext.define('backoffice.view.maestros.tipocontacto.ListadoTipoContacto',{
    extend: 'Ext.panel.Panel',

    xtype: 'listado-tipocontacto',

    requires: [
        'backoffice.view.maestros.tipocontacto.ListadoTipoContactoController',
        'backoffice.view.maestros.tipocontacto.ListadoTipoContactoModel'
    ],

    controller: 'maestros-tipocontacto-listadotipocontacto',
    viewModel: {
        type: 'maestros-tipocontacto-listadotipocontacto'
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
                    tooltip: 'Agrega un registro de nuevo Tipo de Contacto',
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
            html: '<h2>Información de Tipos de Contacto</h2>'

        }
    },
    _grilla: function () {
        let _store = tools.Util.getStoreById('stTypeContact');
        _store = tools.Util.setHeaderAuth(_store);
        _store.load();
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
                    itemId: 'dgvTipoContacto',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    // scrollable: false,
                    sortableColumns: false,
                    store: _store,
                    bbar: me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'description',
                            header: '<div>Descripcion</div>',
                            align: 'left',
                            width: 700,
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
                            },
                            {
                                iconCls: 'x-fa fa-stack-overflow',
                                tooltip: 'Agregar serie de documento dital',
                                handler: 'onClickConfiguraSerie',
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
