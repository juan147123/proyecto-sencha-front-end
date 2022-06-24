
Ext.define('backoffice.view.empresa.TiendaRegistro',{
    extend: 'Ext.form.Panel',
    xtype: 'empresa-tienda-registro',
    itemId: 'empresa-tienda-registro',
    requires: [
        'backoffice.view.empresa.TiendaRegistroController',
        'backoffice.view.empresa.TiendaRegistroModel'
    ],

    controller: 'empresa-tiendaregistro',
    viewModel: {
        type: 'empresa-tiendaregistro'
    },

    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    padding : 30,
    /*listeners: {
        render: 'onRenderPanel'
    },*/
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            trackResetOnLoad: false,
            items: [
                me._titulo(),
                me._panelDatos(),
                //me._panelConf(),
                //me._getFoto(),
                //me._documento()
            ]
        });
        me.callParent();

    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="font-size:25px;">Tienda</div>'

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
                padding: 5,
                ui: 'datefield-sistema',
                allowBlank:false
            },
            items: [
                {
                    xtype : 'hiddenfield',
                    name : 'idbusiness',
                    itemId: 'idBusinessStore',
                    value : 0
                },
                {
                    xtype : 'hiddenfield',
                    name : 'idstore',
                    itemId: 'idstore',
                    value : 0
                },
                {
                    xtype: 'label',
                    text: 'Direccion',
                    flex: 1,
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Direccion',
                    name: 'address',
                   
                },
                {
                    xtype: 'label',
                    text: 'Contacto',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Contacto',
                    name: 'contact',
                },

                {
                    xtype: 'label',
                    text: 'Telefono',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Telefono',
                    name: 'phone',
                },
                {
                    xtype: 'label',
                    text: 'Celular',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Celular',
                    name: 'cell_phone',
                },
                {
                    xtype: 'label',
                    text: 'IP Pública',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Ip Pública',
                    name: 'ipaddress',
                },
                me._estados()
            ],
            bbar: [
                '->',
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
