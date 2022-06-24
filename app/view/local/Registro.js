Ext.define('backoffice.view.local.Registro',{
    extend: 'Ext.form.Panel',
    xtype : 'localregistro',
    alias: 'widget.localregistro',
    itemId : 'frmSede',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'backoffice.view.local.RegistroController',
        'backoffice.view.local.RegistroModel'
    ],

    controller: 'local-registro',
    viewModel: {
        type: 'local-registro'
    },
    cls: 'email-compose',

    layout: {
        type:'vbox',
        align:'stretch'
    },

    bodyPadding: 30,
    scrollable: true,

    defaults: {
        labelWidth: 90,
        labelSeparator: ''
    },

    items: [
        {
            xtype: 'hiddenfield',
            text: 'idsede',
            name : 'idsede',
            value  : 0
        },
        {
            xtype: 'label',
            text: 'Descripcion'
        },
        {
            xtype: 'textfield',
            name : 'nombresede',
            allowBlank :false

        },
        {
            xtype: 'label',
            text: 'Direccion'
        },
        {
            xtype: 'textfield',
            name : 'direccion',
            allowBlank :false
        }
      
    ],

    bbar: {
        overflowHandler: 'menu',
        items: [
            '->',
            {
                xtype: 'button',
                ui: 'soft-red',
                text: 'CANCELAR',
                handler: 'onClick_Cancelar'
            },
            {
                xtype: 'button',
                ui: 'green',
                text: 'GRABAR',
                handler : 'onClick_Grabar'
            }
        ]
    }
});
