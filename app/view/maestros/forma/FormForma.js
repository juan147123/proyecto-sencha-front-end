
Ext.define('backoffice.view.maestros.forma.FormForma',{
    extend: 'Ext.panel.Panel',

    xtype: 'form-forma',

    requires: [
        'backoffice.view.maestros.forma.FormFormaController',
        'backoffice.view.maestros.forma.FormFormaModel'
    ],

    controller: 'maestros-forma-formforma',
    viewModel: {
        type: 'maestros-forma-formforma'
    },

    bodyPadding: '15 40 15 40',
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
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
            html: '<h2>Nueva Forma</h2>'

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
            items: [


                {
                    xtype: 'label',
                    text: 'Descripcion',
                    flex: 1,

                },
                {
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                }






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
    }
});
