
Ext.define('backoffice.view.cotizacion.ListadoCotizacion', {
    extend: 'Ext.panel.Panel',
    xtype: 'listado-cotizacion',
    itemId: 'listado-cotizacion',
    requires: [
        'Ext.util.Format',
        'backoffice.view.cotizacion.ListadoCotizacionController',
        'backoffice.view.cotizacion.ListadoCotizacionModel'
    ],

    controller: 'cotizacion-listadocotizacion',
    viewModel: {
        type: 'cotizacion-listadocotizacion'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        let conductores = null; // tools.Util.getStoreById('stConductores').load();
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._botones(),
                me._buscarFechas(),
                me._buscarNro(),
                me._buscarDni(),
                me._buscarDatos(),
                me._grilla()
            ]
        });
        me.callParent();
    },
    _titulo: function () {
        return {
            xtype :'container',
            userCls: 'big-100 small-100',
            html : '<div style="font-size:25px;">Listado de Cotizaciones</div>',
            padding : '20 0 20 0',
            
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
                    text: 'NUEVA COTIZACION',
                    tooltip: 'Genera nueva cotizacion',
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
            userCls: 'big-100 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                '->',
                {
                    xtype: 'datefield',
                    itemId: 'date1',
                    ui: 'datefield-sistema',
                    tooltip: 'Desde',
                    value: moment(new Date()).format("01-MM-YYYY"),
                    listeners: {
                        select: 'onClickFiltrarFecha',
                    },
                    editable: false,
                },
                {
                    xtype: 'datefield',
                    itemId: 'date2',
                    ui: 'datefield-sistema',
                    tooltip: 'Hasta',
                    value: new Date(),
                    editable: false,
                    listeners: {
                        select: 'onClickFiltrarFecha',
                    },
                }
            ]

        };
    },
    _buscarNro: function () {
        return {
            xtype: 'container',
            userCls: 'big-10 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'NRO.',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressDocumentCotizacion'
                    }
                }
            ]

        };
    },
    _buscarDni: function () {
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'BUSCAR DOCUMENTO',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressDocument'
                    }
                }
            ]

        };
    },
    _buscarDatos: function () {
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'NOMBRES Y APELLIDOS/RAZON SOCIAL',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressName'
                    }
                }
            ]

        };
    },
    _grilla: function () {
        let store = tools.Util.getStoreById('stQuotation');
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
                    itemId: 'dgvCotizacion',
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
                            dataIndex: 'document',
                            header: '<div>Numero</div>',
                            align: 'center',
                            width: 120,
                        },
                        {
                            dataIndex: 'businessname',
                            header: '<div>Cliente</div>',
                            width: 300,
                            align: 'left',
                            renderer: function (v, m) {
                                m.style = 'color:#3073a6;';
                                m.tdAttr = Ext.String.format('data-qtip="{0}"', v);
                                return v;
                            }
                        },
                        {
                            dataIndex: 'number_document',
                            header: '<div>Ruc</div>',
                            width: 200,
                            align: 'left',
                        },
                        {
                            dataIndex: 'date_issue',
                            header: '<div>Creacion</div>',
                            xtype: 'datecolumn',
                            format: 'd/m/Y',
                            align: 'center',
                            width: 150,
                        },
                        {
                            dataIndex: 'delivery_date',
                            header: '<div>Vencimiento</div>',
                            xtype: 'datecolumn',
                            format: 'd/m/Y',
                            align: 'center',
                            width: 150,
                        },
                        {
                            type: 'numbercolumn',
                            dataIndex: 'total',
                            header: '<div>Total</div>',
                            align: 'center',
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
                                    handler: 'onClick_Editar',
                                    padding: '0 10 0 0'
                                },
                                {
                                    iconCls: 'x-fa fa-trash',
                                    tooltip: 'Anular',
                                    handler: 'onClickAnular',
                                    padding: '0 10 0 0'
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
            emptyMsg: "Sin elementos a mostrar",

        }
    }

});
