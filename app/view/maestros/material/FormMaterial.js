
Ext.define('backoffice.view.maestros.material.FormMaterial',{
    extend: 'Ext.form.Panel',
    xtype: 'form-material',
    itemId: 'form-material',

    requires: [
        'backoffice.view.maestros.material.FormMaterialController',
        'backoffice.view.maestros.material.FormMaterialModel'
    ],

    controller: 'maestros-material-formmaterial',
    viewModel: {
        type: 'maestros-material-formmaterial'
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
            html: '<h2>Nuevo Material</h2>'

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
            itemId : 'formMaterial',
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype : 'hiddenfield',
                    value : 0,
                    name  : 'idmaterial',
                    itemId : 'idmaterial'
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
