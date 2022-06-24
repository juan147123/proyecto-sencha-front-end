
Ext.define('backoffice.view.maestros.modelo.FormModelo',{
    extend: 'Ext.panel.Panel',
    xtype: 'form-modelo',

    requires: [
        'backoffice.view.maestros.modelo.FormModeloController',
        'backoffice.view.maestros.modelo.FormModeloModel'
    ],

    controller: 'maestros-modelo-formmodelo',
    viewModel: {
        type: 'maestros-modelo-formmodelo'
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
            html: '<h2>Nuevo Modelo</h2>'

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
