
Ext.define('backoffice.view.usuario.Registro',{
    extend: 'Ext.form.Panel',
    xtype : 'usuarioregistro',
    itemId : 'usuarioregistro',
    requires: [
        'backoffice.view.usuario.RegistroController',
        'backoffice.view.usuario.RegistroModel'
    ],

    controller: 'usuario-registro',
    viewModel: {
        type: 'usuario-registro'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            trackResetOnLoad: false,
            items:[
                me._formulario(),
                me._botones()
            ]
        });
        me.callParent();
    },
    _botones:function(){
        return {
            tbar: [
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
            ]
        };
    },
    _formulario:function(){
       // let _tipodoctumento = tools.Util.getStoreById('stTipoDocumento').load();

        return   {
             xtype: 'container',
             userCls: 'big-50 small-100',
             bodyPadding: 10,
             layout: {
                 type: 'vbox',
                 align: 'stretch'
             },
            padding : 5,
            
            itemId : 'registro',
            items: [
                {
                    xtype : 'hiddenfield',
                    value : 0,
                    name  : 'id',
                    itemId : 'id'
                },
                {
                    xtype: 'label',
                    text: 'Correo',
                    flex: 1,
                },
                {
                    xtype: 'textfield',
                    ui: 'datefield-sistema',
                    flex: 1,
                    name: 'email',
                    allowBlack:false,
                },
                {
                    xtype: 'label',
                    text: 'Name',
                    flex: 1,
                },
                {
                    xtype : 'textfield',
                    ui: 'datefield-sistema',
                    flex: 1,
                    name  : 'name',
                    allowBlack:false,
                },
                {
                    xtype: 'label',
                    text: 'Password',
                    flex: 1,
                },
                {
                    xtype:"textfield",
                    ui: 'datefield-sistema',
                    name:'password',
                    flex: 1,
                    inputType: 'password',
                    allowBlack:false,
                },
                me._estados()  
               
             ]
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
