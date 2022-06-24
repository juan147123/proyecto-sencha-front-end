
Ext.define('backoffice.view.producto.FormProducto',{
    extend: 'Ext.form.Panel',
    xtype: 'form-producto',
    itemId: 'form-producto',

    requires: [
        'backoffice.view.producto.FormProductoController',
        'backoffice.view.producto.FormProductoModel'
    ],

    controller: 'form-producto',
    viewModel: {
        type: 'form-producto'
    },

    bodyPadding: '15 40 15 40',
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            trackResetOnLoad: false,
            items: [
                me._titulo(),
                me._panelDatos(),
                me._panelDatos2()

            ]
        });
        me.callParent();
    },

    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<h2>Nuevo Producto</h2>'

        }
    },

    _panelDatos: function () {
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
            itemId : 'formproducto',
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype : 'hiddenfield',
                    value : 0,
                    name  : 'idproduct',
                    itemId : 'idproduct'
                },
                {
                    xtype : 'hiddenfield',
                    name  : 'idproductsuplier',
                    itemId : 'idproductsuplier'
                },
                {
                    xtype: 'label',
                    text: 'Descripcion',
                    flex: 1,
                },
                {
                    xtype: 'textfield',
                    ui: 'datefield-sistema',
                    flex: 1,
                    name: 'description',
                    itemId: 'description',
                    allowBlack:false
                },
                {
                    xtype: 'label',
                    text: 'Precio unitario',
                    flex: 1,
                },
                {
                    xtype:"numberfield",
                    ui: 'datefield-sistema',
                    name:'priceunit',
                    itemId:'priceunit',
                    allowBlack:false,
                    flex: 1,
                },
                {
                    xtype: 'label',
                    text: 'Stock',
                    flex: 1,
                },
                {
                    xtype:"numberfield",
                    ui: 'datefield-sistema',
                    allowBlack:false,
                    name:'stock',
                    itemId:'stock',
                    flex: 1,
                },
            ]
        };
    },
    _panelDatos2: function () {
        let category = tools.Util.getStoreById('stCategory');
        let brand = tools.Util.getStoreById('stBrand');
        let supplier = tools.Util.getStoreById('stSupplier');
        category.load();
        brand.load();
        supplier.load();
 
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
            itemId : 'formproducto2',
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'label',
                    text: 'Categoria',
                    flex: 1,
                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'CATEGORIA',
                    padding: 2,
                    store: category,
                    displayField: 'description',
                    valueField: 'idcategory',
                    editable: false,
                    allowBlack:false,
                    queryMode: 'local',
                    itemId: 'idcategory',
                    name : 'idcategory'
                },
                {
                    xtype: 'label',
                    text: 'Marca',
                    flex: 1,
                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'MARCA',
                    padding: 2,
                    store: brand,
                    displayField: 'description',
                    valueField: 'idbrand',
                    editable: false,
                    allowBlack:false,
                    queryMode: 'local',
                    itemId: 'idbrand',
                    name : 'idbrand'
                },
                {
                    xtype: 'label',
                    text: 'Proveedor',
                    flex: 1,
                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'PROVEEDOR',
                    padding: 2,
                    store: supplier,
                    format: '0.00',
                    displayField: 'businessname',
                    valueField: 'idsupplier',
                    editable: false,
                    allowBlack:false,
                    queryMode: 'local',
                    itemId: 'idsupplier',
                    name : 'idsupplier'
                },
                me._estados()
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
                inputValue: 0,
                checked: true
            }, {
                boxLabel: 'INACTIVO',
                inputValue: 1
            }]
        };
    },

});
