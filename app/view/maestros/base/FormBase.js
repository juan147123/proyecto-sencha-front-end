
Ext.define('backoffice.view.maestros.base.FormBase',{
    extend: 'Ext.form.Panel',
    xtype: 'form-base',
    itemId: 'form-base',

    requires: [
        'backoffice.view.maestros.base.FormBaseController',
        'backoffice.view.maestros.base.FormBaseModel'
    ],

    controller: 'maestros-base-formbase',
    viewModel: {
        type: 'maestros-base-formbase'
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
            html: '<h2>Nueva Base</h2>'

        }
    },

    _panelDatos: function () {
        return {
            xtype: 'form',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5,
            },
            itemId : 'formBase',
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype : 'hiddenfield',
                    value : 0,
                    name  : 'idbase',
                    itemId : 'idbase'
                },
                {
                    xtype: 'label',
                    text: 'Descripcion',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    ui: 'datefield-sistema',
                    name: 'description',
                    flex: 1,
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
