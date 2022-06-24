
Ext.define('backoffice.view.tipodocumento.Registro',{
    extend: 'Ext.form.Panel',
    xtype : 'tipodocumentoregistro',
   
    requires: [
        'backoffice.view.tipodocumento.RegistroController',
        'backoffice.view.tipodocumento.RegistroModel'
    ],

    controller: 'tipodocumento-registro',
    viewModel: {
        type: 'tipodocumento-registro'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },

    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            url: Ext.manifest.api + 'tipodocumento',
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
                    handler : 'onClick_CancelarTipoDocumento'
                },
                {
                    xtype: 'button',
                    text : 'GUARDAR',
                    ui : 'amber',
                    handler : 'onClick_GuardarTipoDocumento'
                }
            ]
        };
    },
    _formulario:function(){
        return   {
            xtype: 'form',
            itemId : 'formtipodocumentoregistro',
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
                    name :'idTipoDocumento',
                    itemId :'idTipoDocumento',
                    value : 0
                },
                {
                    xtype: 'label',
                    text: 'Nombre'
                },
                {
                    xtype: 'textfield',
                    name: 'nombre',
                    allowBlank: false

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
