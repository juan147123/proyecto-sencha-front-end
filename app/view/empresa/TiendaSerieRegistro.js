
Ext.define('backoffice.view.empresa.TiendaSerieRegistro', {
    extend: 'Ext.form.Panel',
    xtype: 'empresa-tienda-series-registro',
    itemId: 'empresa-tienda-series-registro',
    requires: [
        'backoffice.view.empresa.TiendaSerieRegistroController',
        'backoffice.view.empresa.TiendaSerieRegistroModel'
    ],
    tienda: '',

    controller: 'empresa-tiendaserieregistro',
    viewModel: {
        type: 'empresa-tiendaserieregistro'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    padding: 30,
    listeners: {
        beforeactivate: 'onBeforeActivate'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            trackResetOnLoad: false,
            items: [
                me._titulo(),
                me._panelSerie(),
                me._grilla()
            ]
        });
        me.callParent();

    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            itemId: 'viewTitulo',
        }
    },
    _panelSerie: function () {
        let documentoVenta = tools.Util.getStoreById('stDocumentSales');
        let series = tools.Util.getStoreById('stCorrelativeDocumentSales');
        //documentoVenta.load();
        return {
            xtype: 'panel',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5,
                allowBlank: false
            },
            items: [
                {
                    xtype: 'hiddenfield',
                    name: 'idstore_correlative',
                    value: 0
                },
                {
                    xtype: 'hiddenfield',
                    name: 'idcorrelative',
                    itemId: 'idcorrelative',
                    value: 0
                },
                {
                    xtype: 'label',
                    text: 'Documento de Venta',
                    flex: 1,
                },
                {
                    xtype: 'combo',
                    flex: 1,
                    emptyText: 'Documento Venta',
                    name: 'iddocument_sales',
                    store: documentoVenta,
                    valueField: 'iddocument_sales',
                    displayField: 'description',
                    editable: false,
                    queryMode: 'local',
                    listeners: {
                        select: 'onSelectDocumento'
                    }

                },
                {
                    xtype: 'label',
                    text: 'Serie',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    flex: 1,
                    emptyText: 'Serie',
                    name: 'serie',
                    itemId: 'serie',
                    store: series,
                    valueField: 'idcorrelative',
                    displayField: 'serie',
                    editable: false,
                    queryMode: 'local',
                    /*displayTpl: '<tpl for=".">' +
                    'Serie : {serie} , Inicia en : {correlative}'+ 
                    '</tpl>'*/

                },
                {
                    xtype: 'fieldset',
                    title: 'Inicia en',
                    flex: 1,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'numberfield',
                            value: '0',
                            editable: false,
                            flex: 1
                        }
                    ]
                }
            ],
            bbar: [
                '->',
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'Cancelar',
                    listeners: {
                        click: 'onClickCancelar'
                    }
                }, {
                    xtype: 'button',
                    ui: 'button-sistema-sc',
                    text: 'Grabar',
                    listeners: {
                        click: 'onClickGuardar'
                    }



                }
            ],


        };

    },
    _grilla: function (store) {
        return {
            xtype: 'panel',
            userCls: 'big-50 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable: true,
            height: 400,
            items: [
                {
                    xtype: 'grid',
                    flex: 1,
                    itemId: 'dgvTiendaSeriesVenta',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    // scrollable: false,
                    sortableColumns: false,
                    // store : store,
                    bbar : me._paginacion(),
                    columns: [
                        {
                            dataIndex: 'address',
                            header: '<div>Tipo</div><div>Documento</div>',
                            align: 'left',
                            width: 200,
                        },
                        {
                            dataIndex: 'address',
                            header: '<div>Serie</div>',
                            align: 'left',
                            width: 100,
                        },
                        {
                            dataIndex: 'address',
                            header: '<div>Número</div>',
                            align: 'left',
                            width: 100,
                        },

                        {
                            xtype: 'actioncolumn',
                            width: 150,
                            align: 'center',
                            header: '<div>Acciones</div>',
                            anchorSize: 100,
                            items: [
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
