
Ext.define('backoffice.view.gasto.Registro',{
    extend: 'Ext.form.Panel',
    xtype  :'gasto-registro',
    itemId: 'gasto-registro',
    requires: [
        'backoffice.view.gasto.RegistroController',
        'backoffice.view.gasto.RegistroModel'
    ],

    controller: 'gasto-registro',
    viewModel: {
        type: 'gasto-registro'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            url: Ext.manifest.api + 'spent',
            trackResetOnLoad: false,
            items:[
                me._titulo(),
                me._formulario(),
                me._botones()
            ]
        });
        me.callParent();
    },
    _titulo:function(){
        return {
            xtype :'container',
            pading: 10,
            userCls: 'big-100 small-100',
            html : '<div style="font-size:25px;">Registro de Gasto</div><p><p>[descripcion].'
            
        }
    },
    _botones:function(){
        return {
            tbar: [
                '->',
                {
                    xtype: 'button',
                    text : 'CANCELAR',
                    ui: 'button-sistema',
                    handler : 'onClick_Cancelar'
                },
                {
                    xtype: 'button',
                    text : 'GUARDAR',
                    ui: 'button-sistema-sc',
                    handler : 'onClick_Guardar'
                }
            ]
        };
    },
    _formulario:function(){
            return   {
            xtype: 'form',
            itemId : 'form_gasto',
            userCls: 'big-50 small-100',
            bodyPadding: 10,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5,
                allowBlack:false,
                ui: 'datefield-sistema',
            },
            items: [
                {
                    xtype  :'hiddenfield',
                    name :'idspent',
                    itemId :'idspent',
                    value : 0
                },
                {
                    xtype: 'label',
                    text: 'Fecha'
                },
                {
                    xtype: 'datefield',
                    name: 'date',
                    allowBlank: false,
                    value : new Date()

                },
                {
                    xtype: 'label',
                    text: 'Descripcion'
                },
                {
                    xtype: 'textarea',
                    name: 'description',
                    allowBlank: false

                },
                {
                    xtype: 'label',
                    text: 'Monto'
                },
                {
                    xtype: 'numberfield',
                    name: 'amount',
                    minValue : 0.00,
                    allowBlank: false,
                    value : 0.00
                },
            ]
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
