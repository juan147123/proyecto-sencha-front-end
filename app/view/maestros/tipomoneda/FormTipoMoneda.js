
Ext.define('backoffice.view.maestros.tipomoneda.FormTipoMoneda',{
    extend: 'Ext.form.Panel',

    xtype: 'form-tipomoneda',
    itemId: 'form-tipomoneda',

    requires: [
        'backoffice.view.maestros.tipomoneda.FormTipoMonedaController',
        'backoffice.view.maestros.tipomoneda.FormTipoMonedaModel'
    ],

    controller: 'maestros-tipomoneda-formtipomoneda',
    viewModel: {
        type: 'maestros-tipomoneda-formtipomoneda'
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
            html: '<h2>Nuevo Tipo de Moneda</h2>'

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
                padding: 5
            },
            itemId : 'formTipoMoneda',
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
               
                {
                    xtype : 'hiddenfield',
                    name : 'idcoin',
                    itemId : 'idcoin',
                    value : 0
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
                {
                    xtype: 'label',
                    text: 'Simbolo',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    ui: 'datefield-sistema',
                    flex: 1,
                    name : 'simbolo',
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
    }
});
