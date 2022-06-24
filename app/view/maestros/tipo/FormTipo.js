
Ext.define('backoffice.view.maestros.tipo.FormTipo',{
    extend: 'Ext.form.Panel',
    xtype: 'form-tipo',
    itemId: 'form-tipo',
    requires: [
        'backoffice.view.maestros.tipo.FormTipoController',
        'backoffice.view.maestros.tipo.FormTipoModel'
    ],

    controller: 'maestros-tipo-formtipo',
    viewModel: {
        type: 'maestros-tipo-formtipo'
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
            html: '<h2>Uso de Montura</h2>'

        }
    },

    _panelDatos: function () {
        return {
            xtype: 'panel',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5
            }, 
            itemId : 'formType',
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [


                {
                    xtype : 'hiddenfield',
                    name : 'idtype',
                    itemId : 'idtype',
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
