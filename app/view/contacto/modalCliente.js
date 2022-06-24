
Ext.define('backoffice.view.contacto.modalCliente',{
    extend: 'Ext.window.Window',
    itemId: 'modalCliente',
    requires: [
        'backoffice.view.contacto.modalClienteController',
        'backoffice.view.contacto.modalClienteModel',
        'backoffice.view.contacto.FormPersonal'
    ],
    config: {
        ancho: 0,
        largo: 0,
    },
    controller: 'contacto-modalcliente',
    viewModel: {
        type: 'contacto-modalcliente'
    },
    bodyPadding: '15 40 15 40',
    layout: {
        type: 'fit',
        align: 'stretch'
    },
    autoScroll:true,
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            height: me.getLargo(),
            width: me.getAncho(),
            trackResetOnLoad: false,
            items: [
                {
                    xtype:'cliente-registro',
                }
            ]
        });
        me.callParent();
    },
});
