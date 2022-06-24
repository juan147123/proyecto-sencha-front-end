
Ext.define('backoffice.view.maestros.tipocontacto.FormTipoContacto',{
    extend: 'Ext.form.Panel',
    xtype: 'form-tipocontacto',
    itemId:'form-tipocontacto',
    requires: [
        'backoffice.view.maestros.tipocontacto.FormTipoContactoController',
        'backoffice.view.maestros.tipocontacto.FormTipoContactoModel'
    ],

    controller: 'maestros-tipocontacto-formtipocontacto',
    viewModel: {
        type: 'maestros-tipocontacto-formtipocontacto'
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
            html: '<h2>Nuevo Tipo de Contacto</h2>'

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
            itemId : 'formTipoContacto',
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype : 'hiddenfield',
                    value : 0,
                    name  : 'idtype_contact',
                    itemId : 'idtype_contact'
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
