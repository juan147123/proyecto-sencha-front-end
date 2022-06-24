
Ext.define('backoffice.view.banco.Registro',{
    extend: 'Ext.form.Panel',
    xtype : 'bancoregistro',
    requires: [
        'backoffice.view.banco.RegistroController',
        'backoffice.view.banco.RegistroModel'
    ],

    controller: 'banco-registro',
    viewModel: {
        type: 'banco-registro'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            url: Ext.manifest.api + 'banco',
            trackResetOnLoad: true,
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
                    text : 'CANCELAR',
                    ui : 'soft-red',
                    handler : 'onClick_CancelarBanco'
                },
                {
                    xtype: 'button',
                    text : 'GUARDAR',
                    ui : 'amber',
                    handler : 'onClick_GuardarBanco'
                }
            ]
        };
    },
    _formulario:function(){
            return   {
            xtype: 'form',
            itemId : 'form_bancoregistro',
            userCls: 'big-50 small-100',
            bodyPadding: 10,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            padding : 5,
            items: [
                {
                    xtype  :'hiddenfield',
                    name :'idBanco',
                    itemId :'idBanco',
                    value : 0
                },
                {
                    xtype: 'label',
                    text: 'Nombres'
                },
                {
                    xtype: 'textfield',
                    name: 'nombre',
                    allowBlank: false

                },
                {
                    xtype: 'label',
                    text: 'Iniciales'
                },
                {
                    xtype: 'textfield',
                    name: 'iniciales',
                    maxLength : 3,
                    allowBlank: false,
                  
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
    _clearForm: function () {
        this.getForm().getFields().each(function (field) {
            field.validateOnChange = false;
            field.setValue('');
            field.resetOriginalValue();
        });
    }
});
