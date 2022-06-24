
Ext.define('backoffice.view.inventario.GuiaEntradaAlmacenLocal', {
    extend: 'Ext.panel.Panel',
    xtype: 'guia-entrada-almacen-local',
    requires: [
        'backoffice.view.inventario.GuiaEntradaAlmacenLocalController',
        'backoffice.view.inventario.GuiaEntradaAlmacenLocalModel',
        'Ext.grid.plugin.RowEditing'
    ],

    controller: 'inventario-guiaentradaalmacenlocal',
    viewModel: {
        type: 'inventario-guiaentradaalmacenlocal'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },

    initComponent: function () {
        me = this;
        var store = tools.Util.getStoreById('stReplacementDetails');
        store = tools.Util.setHeaderAuth(store);
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._buscarFechas(),
                me._grilla(store),
                me._botones(),
            ]
        });
        me.callParent();
    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<h2>Guia de ingreso almacen</h2>'

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
                    xtype: 'hiddenfield',
                    itemId: 'idreplacementUPDATE',
                    readOnly: true,
                    padding: '0px 0px 0px 15px',
                    flex: 1
                },
                {
                    xtype: 'hiddenfield',
                    itemId: 'idinventory_statusUPDATE',
                    readOnly: true,
                    padding: '0px 0px 0px 15px',
                    flex: 1
                },
                {
                    ui: 'button-sistema',
                    text: 'GUARDAR',
                    itemId:'btnGuardarReplacement',
                    hidden:false,
                    listeners: {
                        click: 'onClickGuardarGuiaEntrada'
                    }
                },
                {
                    ui: 'button-sistema-sc',
                    text: 'CERRAR',
                    listeners: {
                        click: 'onClickCerrarGuiaEntrada'
                    }
                },


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
                    ui: 'datefield-sistema',
                    tooltip: 'Hasta',
                    value: new Date(),
                    editable: false,
                    fieldLabel: 'Fecha Ingreso',
                    styleLabel: {
                        fontSize: '13px;'
                    }
                }
            ]

        };
    },
    _grilla: function (store) {
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
         /*    scrollable: true, */
            height: Ext.manifest.gridHeightAll,
            items: [
                {
                    xtype: 'grid',
                    itemId: 'dgvReplacementStockReceive',
                    flex: 1,
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    store: store,
                   /*  bbar: me._paginacion(), */
                    plugins: {
                        ptype: 'cellediting',
                        clicksToEdit: 2,
                        useButtonText: false,
                        saveBtnText: 'Guardar',
                        cancelBtnText: 'Cancelar',
                        pluginId: 'roweditingreplacementReceived',
                        autoSave:true
                    },
                    listeners:{
                        edit:'onEditAmountReceived'
                    },
                    columns: [
                        {
                            dataIndex: 'id',
                            text: 'id',
                            hidden:true,
                            align: 'left',
                            flex: 3
                        },
                        {
                            dataIndex: 'description',
                            text: 'Producto',
                            align: 'left',
                            flex: 3
                        },
                        {
                            dataIndex: 'amount',
                            text: 'Solicitado',
                            align: 'center',
                            flex: 1
                        },
                        {
                            dataIndex: 'amount_send',
                            text: 'Enviado',
                            align: 'center',
                            flex: 1
                        },
                        {
                            dataIndex: 'amount_recibed',
                            text: 'Recibido',
                            align: 'center',
                            editor: {
                                xtype: 'numberfield',
                                allowBlank: false,
                                minValue: 0,
                                maxValue: 150000
                            },
                            flex: 1
                        },
                        {
                            dataIndex: 'comment',
                            text: 'Observaciones',
                            align: 'left',
                            flex: 2,
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
            emptyMsg: "Sin elementos a mostrar",
           /*  listeners: {
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
            } */

        }
    }


});
