
Ext.define('backoffice.view.producto.Registro', {
    extend: 'Ext.form.Panel',
    xtype: 'producto-registro',
    itemId: 'producto-registro',
    requires: [
        'backoffice.view.producto.RegistroController',
        'backoffice.view.producto.RegistroModel',
        'backoffice.view.producto.ServiceProduct'
    ],

    controller: 'producto-registro',
    viewModel: {
        type: 'producto-registro'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    listeners: {
        beforeactivate: 'onBeforeActivate'
    },
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            jsonSubmit: true,
            trackResetOnLoad: false,
            items: [
                me._titulo(),
                me._btnatras(),
                me._panelPropiedad(),
                me._panelPropiedad2(),
                me._panelStockPre(),
                me._panelTratamiento(),
                
            ]
        });
        me.callParent();
    },
    _titulo: function () {
        return {
            xtype :'container',
            userCls: 'big-100 small-100',
            html : '<div style="font-size:30px;">Nuevo Producto</div><p><p>[comentario]',
            padding : '20 0 20 0',
            
        }
    },
    _panelPropiedad: function () {
        let categoria = tools.Util.getStoreById('stCategory');
        let material = tools.Util.getStoreById('stMaterial');
        let tipo = tools.Util.getStoreById('stType');
        let color = tools.Util.getStoreById('stColor');
      
        

        categoria = tools.Util.setHeaderAuth(categoria);
        material = tools.Util.setHeaderAuth(material);
        tipo = tools.Util.setHeaderAuth(tipo);
        color = tools.Util.setHeaderAuth(color);
       


       
        return {
            xtype: 'container',
            userCls: 'big-30 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 5
            },
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype : 'hiddenfield',
                    name : 'idstore',
                    itemId : 'idstorePD',
                    value : tools.Jwt.getStore()
                },
                {
                    xtype: 'hiddenfield',
                    value: 0,
                    name: 'idproduct',
                    itemId: 'idproduct',
                    
                },
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
                    store: categoria,
                    displayField: 'description',
                    valueField: 'idcategory',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idcategory',
                    name : 'idcategory',
                    allowBlank : false
                },
                {
                    xtype: 'label',
                    text: 'Material',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'MATERIAL',
                    padding: 2,
                    store: material,
                    displayField: 'description',
                    valueField: 'idmaterial',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idmaterial',
                    name : 'idmaterial',
                    allowBlank : false
                },
                {
                    xtype: 'label',
                    text: 'Tipo ',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TIPO',
                    padding: 2,
                    store: tipo,
                    displayField: 'description',
                    valueField: 'idtype',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idtype',
                    name : 'idtype'
                },
                {
                    xtype: 'label',
                    text: 'Color',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'COLOR',
                    padding: 2,
                    store: color,
                    displayField: 'description',
                    valueField: 'idcolor',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idcolor',
                    name : 'idcolor'
                },
              


            ]

        };
    },
    _panelPropiedad2: function () {

        let index = tools.Util.getStoreById('stIndex');
        let tamanio = tools.Util.getStoreById('stSize');
        let lado = tools.Util.getStoreById('stSide');
        let marca = tools.Util.getStoreById('stBrand');
        let usemount = tools.Util.getStoreById('stUseMount');
        index = tools.Util.setHeaderAuth(index);
        lado = tools.Util.setHeaderAuth(lado);
        marca = tools.Util.setHeaderAuth(marca);
        tamanio = tools.Util.setHeaderAuth(tamanio);
        usemount = tools.Util.setHeaderAuth(usemount);
        
        return {
            xtype: 'panel',
            userCls: 'big-30 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: '10 0 0 0'
            },
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'label',
                    text: 'Montura Uso',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'Montura Uso',
                    padding: 2,
                    store: usemount,
                    displayField: 'description',
                    valueField: 'iduse_mount',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'iduse_mountP',
                    name : 'iduse_mount'
                },
                {
                    xtype: 'label',
                    text: 'Indice',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'INDICE',
                    padding: 2,
                    store: index,
                    displayField: 'description',
                    valueField: 'idindex',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idindex',
                    name : 'idindex'
                },
                {
                    xtype: 'label',
                    text: 'Tamaño',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TAMAÑO',
                    padding: 2,
                    store: tamanio,
                    displayField: 'description',
                    valueField: 'idsize',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idsize',
                    name: 'idsize'
                },
                {
                    xtype: 'label',
                    text: 'Lado',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'LADO',
                    padding: 2,
                    store: lado,
                    displayField: 'description',
                    valueField: 'idside',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idside',
                    name : 'idside'
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
                    store: marca,
                    displayField: 'description',
                    valueField: 'idbrand',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idbrand',
                    name : 'idbrand'
                },
            ]

        };
    },
     _panelTratamiento: function () {
        let tratamiento = tools.Util.getCreateStore('ProductxTreatment');
        tratamiento.getProxy().url = Ext.manifest.api +  'product/';
        tratamiento = tools.Util.setHeaderAuth(tratamiento);

        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            title : 'TRATAMIENTO',
            ui : 'light',
            defaults: {
                padding: '15 0 0 0'
            },
            tbar  :[
                '->',
                {
                    xtype :'button',
                    text  :'Agregar',
                    ui : 'button-sistema',
                    listeners : {
                        click :'onClickAddTratamiento'
                    }
                }
            ],
            jsonSubmit: true,
            trackResetOnLoad: true,
            //bodyStyle:{'background-image': 'linear-gradient(red, orange);'},
            items: [
                {
                    xtype: 'grid',
                    flex: 1,
                    itemId: 'dgvTratamiento',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    // scrollable: false,
                    sortableColumns: false,
                    store: tratamiento,
                    height : 300,
                    emptyText: Ext.manifest.msgGrillaVacio,
                    columns: [
                        {
                            dataIndex: 'treatment',
                            header: '<div>Descripcion Tratamiento</div>',
                            align: 'left',
                            width: 500,
                        },
                        {
                            xtype: 'actioncolumn',
                            width: 150,
                            align: 'center',
                            header: '<div>Acciones</div>',
                            anchorSize: 100,
                            items: [
                            {
                                iconCls: 'x-fa fa-trash',
                                tooltip: 'Eliminar',
                                handler: 'onClickAnular',
                                padding: '5'
                            }

                            ]
                        },
                        {
                            flex: 1
                        }


                    ]

                }

            ]

        };
    },
    _btnatras: function () {
        return {
            xtype: 'toolbar',
            userCls: 'big-100 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                '->',
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'Atras',
                    listeners: {
                        click: 'onClickCancelar'
                    }
                },
            ]

        };
    },
    _panelStockPre: function () {

        let serie = tools.Util.getStoreById('stSerie');
        serie = tools.Util.setHeaderAuth(serie);

        return {
            xtype: 'panel',
            userCls: 'big-35 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            bbar: [
                '->',
                {
                    xtype: 'button',
                    ui: 'button-sistema-sc',
                    text: 'Grabar',
                    listeners: {
                        click: 'onClickGuardar'
                    }
                }
            ],
            jsonSubmit: true,
            trackResetOnLoad: true,
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'SPH',
                            flex: 1,


                        },
                        {
                            xtype: 'label',
                            text: 'CYL',
                            flex: 1,

                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            ui: 'textfield-filtro',
                            name: 'sph',
                            itemId: 'sph',
                            flex: 1,
                            enableKeyEvents: true,
                            padding: 2,
                            allowBlank : false
                        
                        },
                        {
                            xtype: 'textfield',
                            ui: 'textfield-filtro',
                            name: 'cyl',
                            itemId: 'cyl',
                            flex: 1,
                            enableKeyEvents: true,
                            padding: '0 30 0 0',
                            allowBlank : false
                           
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'ADD',
                            flex: 1,
                            


                        },
                        {
                            xtype: 'label',
                            text: 'Serie',
                            flex: 1,

                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: 0,
                    items: [
                        {
                            xtype: 'textfield',
                            ui: 'textfield-filtro',
                            name: 'add',
                            flex: 1,
                            enableKeyEvents: true,
                            padding: 2,
                            itemId : 'add'
                           
                        },
                        {
                            xtype: 'combo',
                            ui: 'datefield-sistema',
                            flex: 1,
                            store : serie ,
                            displayField: 'description',
                            valueField: 'idserie',
                            editable: false,
                            queryMode: 'local',
                            itemId: 'idserie',
                            padding: 2,
                            name :'idserie'
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    padding: 0,
                    items: [
                        {
                            xtype: 'label',
                            text: 'Precio Soles',
                            flex: 1,
                        },
                        {
                            xtype: 'label',
                            text: 'Precio Dolares',
                            flex: 1,

                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            ui: 'textfield-filtro',
                            name: 'price_local',
                            itemId: 'price_local',
                            flex: 1,
                            enableKeyEvents: true,
                            padding: 2,
                            value : 0,
                            minValue : 0
                        },
                        {
                            xtype: 'numberfield',
                            ui: 'textfield-filtro',
                            name: 'price_dolar',
                            itemId: 'price_dolar',
                            flex: 1,
                            padding: 2,
                            enableKeyEvents: true,
                            value : 0,
                            minValue : 0
                           
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'Stock Minimo',
                            flex: 1,


                        },
                        {
                            xtype: 'label',
                            text: 'Stock Actual',
                            flex: 1,

                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            ui: 'textfield-filtro',
                            name: 'stockmin',
                            itemId: 'stockmin',
                            flex: 1,
                            enableKeyEvents: true,
                            padding: 2,
                            value : 0,
                            minValue : 0

                           
                        },
                        {
                            xtype: 'numberfield',
                            ui: 'textfield-filtro',
                            name: 'stockactual',
                            itemId: 'stockactual',
                            flex: 1,
                            padding: 2,
                            enableKeyEvents: true,
                            value : 0,
                            minValue : 0
                        },
                    ]
                },

                this._status()

            ]

        };
    },
    _status: function () {
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
