
Ext.define('backoffice.view.producto.AgregarTratamiento',{
    extend: 'Ext.window.Window',
    requires: [
        'backoffice.view.producto.AgregarTratamientoController',
        'backoffice.view.producto.AgregarTratamientoModel'
    ],
    controller: 'producto-agregartratamiento',
    viewModel: {
        type: 'producto-agregartratamiento'
    },
    config : {
        product: 0
    },
    padding:10,
    width : 400,
    height : 300,
    layout:{
        type :'vbox',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        
        Ext.apply(me, {
            items: [
                me._titulo(),
                me._panelDatos()

            ]
        });
        me.callParent();
    },

    _titulo: function () {
        return {
            xtype :'container',
            userCls: 'big-100 small-100',
            html : '<div style="font-size:25px;">Agregar Tratamiento</div>',
            padding : '20 0 20 0',
            
        }
    },

    _panelDatos: function () {
        let tratamiento = tools.Util.getStoreById('stTreatment');
        tratamiento = tools.Util.setHeaderAuth(tratamiento);
        tratamiento.load();
        return {
            xtype: 'form',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5
            },
            itemId : 'frmTratamiento',
            items: [
                {
                    xtype: 'hiddenfield',
                    name : 'idproductxtreatment',
                    value : 0
                },
                {
                    xtype: 'hiddenfield',
                    name : 'idproduct',
                    value : this.getProduct()
                },
                {
                    xtype: 'hiddenfield',
                    name : 'enable',
                    value : 1
                },
                {
                    xtype: 'label',
                    text: 'Descripcion',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TRATAMIENTO',
                    store : tratamiento ,
                    displayField: 'description',
                    valueField: 'idtreatment',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idtreatment',
                    name : 'idtreatment',
                    allowBlank:false
                }
            ],
            bbar: [
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
                    text: 'Agregar',
                    listeners: {
                        click: 'onClickGuardar'
                    }



                }
            ],

        };
    }

    
});
