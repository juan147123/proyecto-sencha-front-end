
Ext.define('backoffice.view.gasto.Listado', {
    extend: 'Ext.panel.Panel',
    xtype: 'gasto-listado',
    itemId: 'gasto-listado',
    requires: [
        'backoffice.view.gasto.ListadoController',
        'backoffice.view.gasto.ListadoModel'
    ],

    controller: 'gasto-listado',
    viewModel: {
        type: 'gasto-listado'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    listeners: {
        beforeactivate : 'onBeforeActivate'
    },
    
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._botones(),
                me._buscarFechas(),
                me._grilla()
            ]
        });
        me.callParent();
    },
    _titulo: function () {
        return {
            xtype: 'container',
            pading: 10,
            userCls: 'big-100 small-100',
            html: '<div style="font-size:25px;">Listado de Gastos</div><p><p>[descripcion].'

        }
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
                    tooltip: 'Genera nuevo gasto',
                    listeners: {
                        click: 'onClickNuevo'
                    }
                },
                {

                    ui: 'button-sistema',
                    iconCls: 'fa fa-cloud-download',
                    tooltip: 'Generar reporte en pdf'
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
    _buscarFechas: function () {
        return {
            xtype: 'toolbar',
            userCls: 'big-50 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                //'->',
                {
                    xtype: 'datefield',
                    itemId:'date1',
                    ui: 'datefield-sistema',
                    tooltip: 'Desde',
                    value: moment(new Date()).format("01-MM-YYYY"),
                    listeners: {
                        select:'onClickFiltrarFecha',
                    },
                    editable: false,
                    flex: 1
                }, {
                    xtype: 'datefield',
                    itemId:'date2',
                    ui: 'datefield-sistema',
                    tooltip: 'Hasta',
                    value: new Date(),
                    editable: false,
                    listeners: {
                        select:'onClickFiltrarFecha',
                    },
                    flex: 1
                }
            ]

        };
    },
   
    _grilla: function () {

        let store = tools.Util.getStoreById('stSpent');
        store = tools.Util.setHeaderAuth(store);
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable: true,
            height: Ext.manifest.gridHeightAll,
            items: [
                {
                    xtype: 'exportablegrid',
                    itemId: 'dgvGasto',
                    flex: 1,
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    //  scrollable: false,
                    sortableColumns: false,
                    store: store,
                    bbar: me._paginacion(),
                    columns: [
                        {
                            xtype: 'actioncolumn',
                            width: 90,
                            align: 'center',
                            anchorSize: 70,
                            items: [
                                {
                                    iconCls: 'x-fa fa-trash',
                                    tooltip: 'Anular',
                                    handler: 'onClickAnular',
                                    padding: '5'
                                },
                                {
                                    iconCls: 'x-fa fa-pencil',
                                    tooltip: 'Editrar',
                                    handler: 'onClickEditar',
                                    padding: '5'
                                },
                            ]
                        },

                        {
                            dataIndex: 'date',
                            header: '<div>Fecha</div>',
                            xtype: 'datecolumn',
                            format:'d/m/Y',
                            width: 300,
                            align: 'left',
                        },
                        {
                            dataIndex: 'description',
                            header: '<div>Descripcion</div>',
                            align: 'left',
                            width: 550,
                        },

                        {
                            dataIndex: 'amount',
                            xtype: 'numbercolumn',
                            format:'0.00',
                            header: '<div>Monto</div>',
                            width: 300,
                            align: 'left',

                        },
                        { flex: 1 }

                    ]

                }

            ]
        };
    },
    _paginacion: function () {
        return {

            xtype: 'pagingtoolbar',
            displayInfo: true,
            emptyMsg: "Sin elementos a mostrar",

        }
    }
});
