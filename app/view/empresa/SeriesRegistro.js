
Ext.define('backoffice.view.empresa.SeriesRegistro',{
    extend: 'Ext.form.Panel',
    xtype :'empresa-series-registro',
    itemId :'empresa-series-registro',
    requires: [
        'backoffice.view.empresa.SeriesRegistroController',
        'backoffice.view.empresa.SeriesRegistroModel'
    ],

    controller: 'empresa-seriesregistro',
    viewModel: {
        type: 'empresa-seriesregistro'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    padding : 30,
    listeners: {
        beforeactivate : 'onBeforeActivate'
    },
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
            html: '<div style="font-size:25px;">Series</div><p>Configuracion de series de documentos digitales.'

        }
    },
    _panelDatos: function () {
        let documentoVenta = tools.Util.getStoreById('stDocumentSales');
        documentoVenta = tools.Util.setHeaderAuth(documentoVenta);
        return {
            xtype: 'panel',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5,
                allowBlank:false,
                ui: 'datefield-sistema',
            },
            items: [
                {
                    xtype : 'hiddenfield',
                    name : 'idcorrelative',
                    itemId: 'idcorrelative',
                    value : 0
                },
                {
                    xtype: 'label',
                    text: 'Documento de Venta',
                    flex: 1,
                },
                {
                    xtype: 'combo',
                    flex: 1,
                    emptyText: 'Documento Venta',
                    name: 'iddocument_sales',
                    itemId: 'iddocument_sales',
                    store: documentoVenta,
                    valueField : 'iddocument_sales',
                    displayField : 'description',
                    editable :false,
                    queryMode : 'local'
                   
                },
                {
                    xtype: 'label',
                    text: 'Serie',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Serie',
                    name: 'serie',
                },

                {
                    xtype: 'label',
                    text: 'Correlativo inicia',
                    flex: 1,

                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'Inicia en',
                    name: 'correlative',
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
