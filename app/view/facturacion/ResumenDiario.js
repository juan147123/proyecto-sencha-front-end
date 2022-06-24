
Ext.define('backoffice.view.facturacion.ResumenDiario', {
    extend: 'Ext.window.Window',
    xtype: 'resumendiario',
    requires: [
        'backoffice.view.facturacion.ResumenDiarioController',
        'backoffice.view.facturacion.ResumenDiarioModel'
    ],
    config: {
        ancho: 0,
        largo: 0
    },
    controller: 'resumendiario',
    viewModel: {
        type: 'resumendiario'
    },
    title: "Resumen Diario",
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    //autoScroll: true,
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            height: me.getLargo(),
            width: me.getAncho(),
            bodyPadding: 10,
            items: [
                me._panelTitulo('RESUMEN DIARIO'),
                me._formulario(),
            ]
        });
        me.callParent();
    },
    _panelTitulo: function (_texto) {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="background-color:#F8D7DA;color:#721C24;font-size: 14px;height: 40px;padding: 10px;">' + _texto + '</div>',

        };
    },
    _formulario: function () {
        let tipopago = tools.Util.getStoreById('stTipoPago');
        tipopago = tools.Util.setHeaderAuth(tipopago);
        tipopago.load();
        return {
            xtype: 'form',
            itemId: 'formResumenDiario',
            userCls: 'big-100 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 2,
                ui: 'datefield-sistema'
            },
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [

                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    defaults: {
                        flex: 1,
                        padding: 0,
                        ui: 'datefield-sistema'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Fecha de Boletas',

                        },
                        
                    ]


                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    flex: 1,
                    defaults: {
                        padding: 2,
                        flex: 1,
                        ui: 'datefield-sistema'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            flex: 1,
                            name: 'fechaResumen',
                            itemId: 'fechaResumen',
                            value: new Date(),
                            allowBlank: false
                        }
                    ]

                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                    },
                    flex: 1,
                    defaults: {
                        padding: 5,
                    },
                    items: [
                        {
                            flex:0.7,
                            xtype: 'button',
                            ui: 'button-sistema',
                            text: 'Crear',
                            listeners: {
                                click: 'onClickResumenDiario'
                            }
                        },
                        {
                            flex:0.3,
                            xtype: 'button',
                            ui: 'button-sistema',
                            text: 'Cerrar',
                            listeners: {
                                click: 'onClickCerrar'
                            }
                        },
                    ]
                }
            ]
        };
    },
});