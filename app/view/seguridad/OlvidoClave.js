
Ext.define('backoffice.view.seguridad.OlvidoClave',{
    extend: 'Ext.form.Panel',
    xtype : 'olvido-clave',
    requires: [
        'backoffice.view.seguridad.OlvidoClaveController',
        'backoffice.view.seguridad.OlvidoClaveModel',
        'backoffice.view.seguridad.ServiceOlvideClave'
    ],

    controller: 'seguridad-olvidoclave',
    viewModel: {
        type: 'seguridad-olvidoclave'
    },
    layout : {
        type : 'vbox',
        align: 'stretch'
    },
    bodyPadding : 10,
    height : 500,
    width  : 400,
    items  : [
        {
            xtype: 'label',
            text: Ext.manifest.AppName,
            padding: '100 0 50 0',
            style: {
                fontSize: '65px',
                textAlign: 'center'
            },
        },
        {
            xtype :'component',
            html: '<div style="background-color:#F8D7DA;color:#721C24;font-size: 13px;height: 60px;padding: 15px;">Escribe tu correo electronico y te enviaremos <br>intrucciones para cambiar tu contraseña</div>',
            
        },
        {
            xtype: 'container',
            height: 30
        },
        {
            xtype :'label',
            text : 'Ingresa tu correo electronico'
        },
        {
            xtype: 'container',
            height: 10
        },
        {
            xtype :'textfield',
            emptyText : 'Correo Electronico',
            vtype: 'email',
            itemId: 'email',
            fieldStyle: 'font-size :15px;',
            allowBlack:false

        },
        {
            xtype: 'container',
            height: 20
        },
        {
            xtype : 'button',
            ui: 'button-sistema',
            text : 'Recuperar contraseña',
            listeners: {
                click  :'onClickRecuperarClave'
            }
        },
        {
            xtype: 'container',
            height: 20
        },
        {
            xtype : 'button',
            ui: 'button-sistema',
            text : 'Regresar',
            listeners : {
                click : 'onClickRegresar'
            }
        },
    ]


});
