
Ext.define('backoffice.view.maestros.formapago.FormFormaPago',{
    extend: 'Ext.form.Panel',
    xtype: 'form-formapago',
    itemId : 'form-formapago',

    requires: [
        'backoffice.view.maestros.formapago.FormFormaPagoController',
        'backoffice.view.maestros.formapago.FormFormaPagoModel'
    ],

    controller: 'maestros-formapago-formformapago',
    viewModel: {
        type: 'maestros-formapago-formformapago'
    },

    bodyPadding: '15 40 15 40',
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            trackResetOnLoad: false,
            items: [
                me._titulo(),
                me._panelDatos()

            ]
        });
        me.callParent();
    },

    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<h2>Nueva Forma de Pago</h2>'

        }
    },

    _panelDatos: function () {
        me = this;
        return {
            xtype: 'form',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5
            },
            itemId : 'formformapago',
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype : 'hiddenfield',
                    value : 0,
                    name  : 'idmethodpay',
                    itemId : 'idmethodpay'
                },
                {
                    xtype: 'label',
                    text: 'Descripcion',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    ui: 'datefield-sistema',
                    flex: 1,
                    name : 'description',
                    allowBlack:false
                },
                me._estados()

            ],
            bbar: [
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
    _estados:function(){
        return {
            xtype: 'radiogroup',

            layout: {
                autoFlex: false
            },

            defaults: {
                name: 'enable',
                margin: '0 15 0 0'
            },

            items: [{
                boxLabel: 'ACTIVO',
                inputValue: 1,
                checked: true
            }, {
                boxLabel: 'INACTIVO',
                inputValue: 0
            }]
        };
    },

});
