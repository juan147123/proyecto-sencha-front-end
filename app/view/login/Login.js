Ext.define('backoffice.view.login.Login', {
    extend: 'Ext.window.Window',
    ui: 'login',
    requires: [
        'backoffice.view.login.LoginController',
        'backoffice.view.login.LoginModel',
        'backoffice.view.seguridad.OlvidoClave'
    ],
    controller: 'login-login',
    viewModel: {
        type: 'login-login'
    },
    autoShow: true,
    closable: false,
    //layout : 'fit',
    layout: {
        type : 'card',
        anchor : '100%',
        deferredRender: true,
    },
    itemId : 'contentPaneSeguridad',
    initComponent:function(){
        me   = this;
        Ext.apply(me,{
            items: [
                {
                    xtype: 'form',
                    reference: 'frmlogin',
                    itemId : 'frmlogin',
                    width: 400,
                    height: 550,
                    padding: 5,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    jsonSubmit: true,
                    trackResetOnLoad: false,
                    bodyStyle: 'background-color: transparent;',
                    items: [
                        {
                            xtype: 'label',
                            text: Ext.manifest.AppName,
                            padding: '100 0 50 0',
                            style: {
                             //   color: '#ffffff',
                                fontSize: '65px',
                                textAlign: 'center'
                            },
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Usuario',
                            //vtype: 'email',
                            reference: 'email',
                            allowBlank: false,
                            value: 'juanm',
                            fieldStyle: 'font-size :25px;',
                            name : 'name'
                        },
                        {
                            xtype: 'container',
                            height: 10
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'Password',
                            inputType: 'password',
                            reference: 'password',
                            allowBlank: false,
                            value: '12345678',
                            fieldStyle: 'font-size :25px;',
                            name : 'password'
        
                        },
                        {
                            xtype: 'container',
                            height: 10
                        },
                        /*{
                            xtype: 'combo',
                            emptyText: '-- Tienda --',
                            reference: 'idlocal',
                            allowBlank: true,
                            fieldStyle: 'font-size :25px;'
                        },*/
                        {
                            xtype: 'container',
                            height: 30
                        },
        
                        {
                            xtype: 'button',
                            ui: 'button-sistema',
                            text: 'Ingresar',
                            handler: 'login',
                            padding : 10
                        },
                        {
                            xtype: 'container',
                            height: 30
                        },
                        {
                            xtype: 'button',
                            ui: 'button-sistema',
                            text: 'Restabler contraseña',
                            handler: 'onClickRestablerClave',
                            padding : 10
                        },
                        {
                            xtype: 'label',
                            padding: '50 0 30 0',
                            text: 'Olvidaste tu contraseña?',
                            hidden: true,
                            style: {
                                color: '#333333',
                                fontSize: '15px',
                                textAlign: 'center'
        
                            }
                        },
                    ]
                },
                {
                    xtype  :'olvido-clave',
                    flex: 1
                }  
            ]
        });
        me.callParent();

    },



   
});
