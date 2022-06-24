
Ext.define('backoffice.view.estado.Registro',{
    extend: 'Ext.form.Panel',
    xtype : 'estadoregistro',
    requires: [
        'backoffice.view.estado.RegistroController',
        'backoffice.view.estado.RegistroModel'
    ],

    controller: 'estado-registro',
    viewModel: {
        type: 'estado-registro'
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
                    handler : 'onClick_CancelarEstado'
                },
                {
                    xtype: 'button',
                    text : 'GUARDAR',
                    ui : 'amber',
                    handler : 'onClick_GuardarEstado'
                }
            ]
        };
    },
    _formulario:function(){
        return   {
            xtype: 'form',
            itemId : 'form_estadoregistro',
            userCls: 'big-100 small-100',
            bodyPadding: 10,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            padding : 5,
            items: [
                {
                    xtype  :'hiddenfield',
                    name :'idEstadoConductor',
                    itemId :'idEstadoConductor',
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

});
