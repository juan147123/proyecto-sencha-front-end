
Ext.define('backoffice.view.inventario.DetalleReposicion', {
    extend: 'Ext.panel.Panel',
    xtype: 'detalle-reposicion',
    requires: [
        'backoffice.view.inventario.DetalleReposicionController',
        'backoffice.view.inventario.DetalleReposicionModel',
        'Ext.grid.plugin.RowEditing'
    ],

    controller: 'inventario-detallereposicion',
    viewModel: {
        type: 'inventario-detallereposicion'
    },
    bodyPadding: '15 40 15 40',
    bodyStyle: { "background-color": "#f9f9f9" },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        var store = tools.Util.getStoreById('stReplacementDetails');
        store = tools.Util.setHeaderAuth(store);
        me = this;
        Ext.apply(me, {
            items: [
                me._panelIzquieda(store),
                me._panelDerecha(store),
                me._panelPie()
            ]
        });
        me.callParent();
    },
    _panelIzquieda: function (store) {
        return {
            title: "<b>Item's de la Solicitud</b>",
            userCls: 'big-80 small-100',
            collapsible: false,
            ui: 'light',
            hidden: false,
            defaults: {
                padding: 5,
                bodyPadding: 10
            },
            layout: 'fit',
            height: 400,
            items: [
                {
                    xtype: 'grid',
                    itemId: 'dgvDetalleProductosReplacement',
                    flex: 1,
                    padding: 2,
                    store: store,
                    plugins: {
                        ptype: 'rowediting',
                        clicksToEdit: 2,
                        useButtonText: false,
                        saveBtnText: 'Guardar',
                        cancelBtnText: 'Cancelar',
                        pluginId: 'roweditingIdreplacement',
                        disable:false
                    },
                    columns: [
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
                            text: 'Enviar',
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
                            editor: {
                                xtype: 'textfield'
                            },
                            flex: 2,
                        }
                    ]
                }
            ]
        };

    },
    _panelDerecha: function () {
        let store = tools.Util.getStoreById('stStateReplacement');
        var DetalleTpl = new Ext.XTemplate(
            '<ul class="timeline">' +
            '<tpl for=".">' +
            '<li>' +
            '<div class="timeline-badge x-fa<tpl if=\'done\'> fa-lightbulb-o fa-2x<tpl elseif=\'started\'> fa-circle fa-lg</tpl>"></div>' +
            '<div class="timeline-panel">{text}</div>' +
            '</li>' +
            '</tpl>' +
            '</ul>'
        );
        return {
            title: "<b>Estado</b>",
            userCls: 'big-20 small-100',
            collapsible: false,
            ui: 'light',
            hidden: false,
            defaults: {
                padding: 5,
                //   bodyPadding:10
            },
            layout: 'fit',
            //height : 200,
            items: [
                {
                    xtype: 'dataview',
                    //plugins      : 'viewport',
                    padding: 20,
                    itemSelector: 'li',
                    itemId: 'showstates',
                    tpl: DetalleTpl,
                    store: store
                }
            ]
        };

    },
    _panelPie: function () {
        return {
            title: "<b>Detalle de Origen</b>",
            userCls: 'big-100 small-100',
            collapsible: false,
            ui: 'light',
            hidden: false,
            defaults: {
                padding: 5,
                bodyPadding: 10
            },
            layout: {
                type: 'responsivecolumn',
                align: 'stretch'
            },
            defaults: {
                padding: 5
            },
            items: [
                {
                    //xtype : 'panel',
                    ui: 'light',
                    userCls: 'big-50 small-100',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<i class="fa fa-user fa-2x" style="color:#78889C"></i>'
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'replaceuser',
                                    readOnly: true,
                                    ui: 'datefield-sistema',
                                    padding: '0px 0px 0px 20px',
                                    flex: 1

                                }
                            ]

                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<i class="fa fa-envelope-o fa-2x " style="color:#78889C"></i>'
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'replacemail',
                                    readOnly: true,
                                    ui: 'datefield-sistema',
                                    padding: '0px 0px 0px 15px',
                                    flex: 1

                                }
                            ]

                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<i class="fa fa-phone fa-2x"  style="color:#78889C"></i>'
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'replacephone',
                                    readOnly: true,
                                    ui: 'datefield-sistema',
                                    padding: '0px 0px 0px 20px',
                                    flex: 1

                                }
                            ]

                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<i class="fa fa-calendar fa-2x" style="color:#78889C"></i>'
                                },
                                {
                                    xtype: 'datefield',
                                    itemId: 'replacementdate',
                                    readOnly: true,
                                    ui: 'datefield-sistema',
                                    padding: '0px 0px 0px 15px',
                                    flex: 1

                                },
                                {
                                    xtype: 'hiddenfield',
                                    itemId: 'idreplacementdetail',
                                    readOnly: true,
                                    padding: '0px 0px 0px 15px',
                                    flex: 1

                                }
                            ]

                        },
                    ]
                },
                {
                    //xtype : 'panel',
                    ui: 'light',
                    userCls: 'big-50 small-100',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<i class="fa fa-institution fa-2x " style="color:#78889C"></i>'
                                },
                                {
                                    xtype: 'textfield',
                                    itemId: 'replaceAddressStore',
                                    readOnly: true,
                                    ui: 'datefield-sistema',
                                    padding: '0px 0px 0px 20px',
                                    flex: 1

                                }
                            ]

                        },
                        {
                            xtype: 'fieldcontainer',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    html: '<i class="fa fa-street-view fa-2x " style="color:#78889C"></i>'
                                },
                                {
                                    xtype: 'textarea',
                                    readOnly: true,
                                    ui: 'datefield-sistema',
                                    padding: '0px 0px 0px 30px',
                                    flex: 1

                                }
                            ]

                        },
                        {
                            xtype: 'toolbar',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                '->',
                                {
                                    ui: 'button-sistema',
                                    text: 'ENVIAR',
                                    itemId: 'btnsenddetails',
                                    hidden:false,
                                    listeners: {
                                        click: 'onClickEnviarDetalleReposicion'
                                    }
                                },
                                {
                                    ui: 'button-sistema-sc',
                                    text: 'CERRAR',
                                    listeners: {
                                        click: 'onClickCerrarDetalleReposicion'
                                    }
                                }

                            ]
                        }

                    ]
                },



            ]
        };

    }
});
