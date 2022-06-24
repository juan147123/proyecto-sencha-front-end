
Ext.define('backoffice.view.proveedor.Pedido', {
    extend: 'Ext.panel.Panel',
    xtype: 'proveedor-pedido-excel',
    requires: [
        'backoffice.view.proveedor.PedidoController',
        'backoffice.view.proveedor.PedidoModel',
        'backoffice.view.proveedor.ListadoMontura',
        'backoffice.view.proveedor.ListadoTerminadoMonofocal',
        'backoffice.view.proveedor.ListadoTerminadoBifocal',
        'backoffice.view.proveedor.ListadoMnoSph1',
        'backoffice.view.proveedor.ListadoMnoSph2',
        'backoffice.view.proveedor.ListadoMnoCyl1',
        'backoffice.view.proveedor.ListadoMnoSphcyl1',
        'backoffice.view.proveedor.ListadoMnoSphcyl2',
        'backoffice.view.proveedor.Service'

    ],

    controller: 'proveedor-pedido',
    viewModel: {
        type: 'proveedor-pedido'
    },

    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    padding: 10,
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
                me._panelColumna(),
                me._panelColumna2(),
                me._panelColumna3(),
                me._panelSeparador(),
                me._exportExcel(),
                me._panelGrillas(),
            ]
        });
        me.callParent();
    },
    _titulo: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="font-size:30px;">Nuevo Pedidos a Proveedor</div><p><p>[comentario]',
            padding: '20 0 20 0',

        }
    },
    _panelColumna: function () {
        let categoria = tools.Util.getStoreById('stCategory');
        let material = tools.Util.getStoreById('stMaterial');
        let tipo = tools.Util.getStoreById('stType');
        let color = tools.Util.getStoreById('stColor');
        let proveedores = tools.Util.getStoreById('stSupplier');
        let transaccion = tools.Util.getStoreById('stTipoTransaccion');
        let tratamiento = tools.Util.getStoreById('stTreatment');
        let data = [];
        data.push(categoria, material, tipo, color, proveedores, transaccion, tratamiento);
        tools.Util.setHeaderAuthArray(data);

        return {
            xtype: 'form',
            itemId: 'formcolumn',
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
                    xtype: 'hiddenfield',
                    itemId: 'idorder',
                    name: 'idorder',
                    value: 0

                },
                {
                    xtype: 'label',
                    text: 'Tipo transacción',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TIPO TRANSACCION',
                    padding: 2,
                    store: transaccion,
                    displayField: 'descripcion',
                    valueField: 'id',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'typetransaction',
                    name: 'typetransaction',
                    allowBlank: false

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
                    store: proveedores,
                    displayField: 'business_name',
                    valueField: 'idsupplier',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idsupplier',
                    name: 'idsupplier',
                    allowBlank: false
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
                    name: 'idcategory',
                    allowBlank: false
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
                    name: 'idmaterial',
                    allowBlank: false
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
                    name: 'idtype',
                    allowBlank: false
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
                    name: 'idcolor',
                    allowBlank: false
                },
                {
                    xtype: 'label',
                    text: 'Tratamiento 1',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TRATAMIENTO 1',
                    store: tratamiento,
                    displayField: 'description',
                    valueField: 'description',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'treatment1',
                    name: 'treatment1',
                },
                {
                    xtype: 'label',
                    text: 'Tratamiento 3',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TRATAMIENTO 3',
                    store: tratamiento,
                    displayField: 'description',
                    valueField: 'description',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'treatment3',
                    name: 'treatment3',
                },



            ]

        };
    },
    _panelColumna2: function () {

        let index = tools.Util.getStoreById('stIndex');
        let tamanio = tools.Util.getStoreById('stSize');
        let lado = tools.Util.getStoreById('stSide');
        let marca = tools.Util.getStoreById('stBrand');
        let tienda = tools.Util.getStoreById('stStore');
        let tratamiento = tools.Util.getStoreById('stTreatment');
        tienda.getProxy().url = Ext.manifest.api + 'store/business/' + 3;

        let data = [];
        data.push(index,
            tamanio,
            lado,
            marca,
            tienda,
            tratamiento
        );
        tools.Util.setHeaderAuthArray(data);
        return {
            xtype: 'form',
            itemId: 'formcolumn2',
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
            //bodyStyle:{'background-image': 'linear-gradient(red, orange);'},
            items: [
                {
                    xtype: 'label',
                    text: 'Tienda',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TIENDA',
                    padding: 2,
                    store: tienda,
                    displayField: 'address',
                    valueField: 'idstore',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'idstore',
                    name: 'idstore',
                    allowBlank: false
                },
                {
                    xtype: 'label',
                    text: 'Fecha',
                    flex: 1,

                },
                {
                    xtype: 'datefield',
                    ui: 'datefield-sistema',
                    name: 'fecha',
                    itemId: 'fecha',
                    value: new Date()


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
                    name: 'idindex',
                    allowBlank: false
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
                    name: 'idsize',
                    allowBlank: false
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
                    name: 'idside',
                    allowBlank: false
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
                    name: 'idbrand',
                    allowBlank: false
                },
                {
                    xtype: 'label',
                    text: 'Tratamiento 2',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TRATAMIENTO 2',
                    store: tratamiento,
                    displayField: 'description',
                    valueField: 'description',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'treatment2',
                    name: 'treatment2',
                },
                {
                    xtype: 'label',
                    text: 'Tratamiento 4',
                    flex: 1,

                },
                {
                    xtype: 'combo',
                    ui: 'datefield-sistema',
                    flex: 1,
                    emptyText: 'TRATAMIENTO 4',
                    store: tratamiento,
                    displayField: 'description',
                    valueField: 'description',
                    editable: false,
                    queryMode: 'local',
                    itemId: 'treatment4',
                    name: 'treatment4',
                },
            ]

        };
    },
    _panelColumna3: function () {

        return {
            xtype: 'panel',
            userCls: 'big-35 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: '30 0 0 0'
            },
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
                },
                {
                    xtype: 'button',
                    ui: 'button-sistema-excel',
                    text: 'Exportar',
                    hidden: false,
                    itemId: 'buttonExcel',
                    listeners: {
                        click: 'onClickExpExcel'
                    }
                }
            ],
            items: [
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
                name: 'status',
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
    _exportExcel: function () {
        return {
            xtype: 'panel',
            userCls: 'big-35 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: '30 0 0 0'
            },
            bbar: [
                {
                    xtype: 'button',
                    ui: 'button-sistema-excel',
                    text: 'Exportar Bifocal',
                    hidden: false,
                    itemId: 'buttonExcelBifo',
                    listeners: {
                        click: 'onClickExpExcelBifo'
                    }
                },
                {
                    xtype: 'button',
                    ui: 'button-sistema-excel',
                    text: 'Exportar Monofocal',
                    hidden: false,
                    itemId: 'buttonExcelMono',
                    listeners: {
                        click: 'onClickExpExcelMono'
                    }
                },
                {
                    xtype: 'button',
                    ui: 'button-sistema-excel',
                    text: 'Exportar Monturas',
                    hidden: false,
                    itemId: 'buttonExcelMont',
                    listeners: {
                        click: 'onClickExpExcelMont'
                    }
                },

            ]
        };
    },
    _panelGrillas: function () {
        return {
            xtype: 'tabpanel',
            userCls: 'big-100 small-100',
            ui: 'tab-venta',
            flex: 1,
            plain: true,
            // padding: 25,
            defaults: {
                bodyPadding: 10,
                scrollable: true,
                border: false
            },
            items: [
                {
                    title: '<b>Terminado Bifocal</b>',
                    itemId: 'panelTerminadoBifo',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'proveedor-ListadoTerminadoBifocal',
                            itemId: 'proveedor-ListadoTerminadoBifocal',
                            padding: '55 0 0 0',
                        }

                    ]
                },

                {
                    title: '<b>Terminado Monofocal</b>',
                    itemId: 'panelTerminadoMono',
                    layout: {
                        type: 'fit',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        //   {xtype : 'proveedor-ListadoTerminadoMonofocal'}
                        {
                            xtype: 'tabpanel',
                            userCls: 'big-100 small-100',
                            ui: 'tab-venta',
                            flex: 1,
                            plain: true,
                            // padding: 25,
                            defaults: {
                                bodyPadding: 10,
                                scrollable: true,
                                border: false
                            },
                            tabBar: {
                                layout: {
                                    pack: 'center'
                                }
                            },
                            items: [
                                {
                                    title: '<b>SPH+</b>',
                                    itemId: 'panelMonoSPH1',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'proveedor-ListadoMonoSph1',
                                            itemId: 'proveedor-ListadoMonoSph1',
                                        }
                                    ]
                                },
                                {
                                    title: '<b>SPH-</b>',
                                    itemId: 'panelMonoSPH2',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'proveedor-ListadoMonoSph2',
                                            itemId: 'proveedor-ListadoMonoSph2'
                                        }
                                    ]
                                },
                                {
                                    title: '<b>CYL-</b>',
                                    itemId: 'panelMonoCYL1',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'proveedor-ListadoMonoCyl1',
                                            itemId: 'proveedor-ListadoMonoCyl1',
                                        }
                                    ]
                                },
                                {
                                    title: '<b>SPH+  CYL-</b>',
                                    itemId: 'panelMonoSPHCYL1',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'proveedor-ListadoMonoSphCyl1',
                                            itemId: 'proveedor-ListadoMonoSphCyl1'
                                        }
                                    ]

                                },
                                {
                                    title: '<b>SPH-  CYL-</b>',
                                    itemId: 'panelMonoSPHCYL2',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'proveedor-ListadoMonoSphCyl2',
                                            itemId: 'proveedor-ListadoMonoSphCyl2',
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    title: '<b>Monturas</b>',
                    itemId: 'panelMontura',
                    layout: {
                        type: 'card',
                        anchor: '100%',
                        deferredRender: true,
                    },
                    items: [
                        {
                            xtype: 'proveedor-ListadoMontura',
                            itemId: 'proveedor-ListadoMontura',
                            padding: '55 0 0 0',
                        }

                    ]
                },
            ]
        };
    },

    _panelSeparador: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            flex: 1,
            html: '<div style=" border-bottom: 4px solid #b0bdc8;"></div>'

        };
    },
});
