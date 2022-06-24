
Ext.define('backoffice.view.cotizacion.BuscarProducto', {
    extend: 'Ext.window.Window',
    xtype: 'cotizacion-buscar-producto',
    requires: [
        'backoffice.view.cotizacion.BuscarProductoController',
        'backoffice.view.cotizacion.BuscarProductoModel'
    ],
    config: {
        ancho: 0,
        largo: 0
    },
    controller: 'cotizacion-buscarproducto',
    viewModel: {
        type: 'cotizacion-buscarproducto'
    },
    title: Ext.manifest.titleBuscarProducto,
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    //autoScroll: true,
    initComponent: function () {
        me = this;
        Ext.apply(me, {
            height: me.getLargo(),
            width: me.getAncho(),
            bodyPadding: 10,
            items: [
                me._panelTitulo('FILTRO'),
                me._panelRadio1(),
                me._panelRadio2(),
                me._panelRadio3(),
                me._panelBotones(),
                me._panelFiltroLeft(),
                me._panelFiltroRight(),
                me._panelTitulo(''),
                me._grilla()

            ]
        });
        me.callParent();
    },
    _panelRadio1: function () {
        return {
            xtype: 'container',
            userCls: 'big-25 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            defaults: {
                padding: 2
            },
            items: [
                {
                    xtype: 'radiogroup',
                    itemId: 'radio1',
                    columns: 1,
                    vertical: true,
                    items: [
                        { boxLabel: 'LENTES', name: 'rb1', inputValue: '1', checked: true },
                        { boxLabel: 'MONTURAS', name: 'rb1', inputValue: '2' },

                    ],
                    listeners: {
                        change: 'onChangeFiltro'
                    }
                }
            ]
        }
    },

    _panelRadio2: function () {
        return {
            xtype: 'container',
            userCls: 'big-25 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            defaults: {
                padding: 2
            },
            items: [
                {
                    xtype: 'radiogroup',
                    itemId: 'radio2',
                    columns: 1,
                    vertical: true,
                    items: [
                        { boxLabel: 'STOCK', name: 'rb2', inputValue: '1' },
                        { boxLabel: 'FABRICACION', name: 'rb2', inputValue: '2' },
                    ],
                    listeners: {
                        change: 'onChangeFiltro'
                    }
                }
            ]
        }
    },
    _panelRadio3: function () {
        return {
            xtype: 'container',
            userCls: 'big-25 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            defaults: {
                padding: 2
            },
            items: [
                {
                    xtype: 'radiogroup',
                    itemId: 'radio3',
                    columns: 1,
                    vertical: true,
                    items: [
                        { boxLabel: 'MONOFOCALES', name: 'rb3', inputValue: '1' },
                        { boxLabel: 'BIFOCALES', name: 'rb3', inputValue: '2' },
                    ],
                    listeners: {
                        change: 'onChangeFiltro'
                    }
                }
            ]
        }
    },
    _panelFiltroLeft: function () {
        let genero = tools.Util.getStoreById('stUseMount');
        genero = tools.Util.setHeaderAuth(genero);
        genero.load();
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 2
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        padding: 4,
                        flex: 1
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'SPH + / -',
                            itemId: 'lblsph'
                        },
                        {
                            xtype: 'label',
                            text: 'GENERO',
                            itemId: 'lblGenero',
                            hidden: true
                        },
                        {
                            xtype: 'label',
                            text: 'CYL -'
                        },
                        {
                            xtype: 'label',
                            text: 'ADD'
                        },
                        {
                            xtype: 'label',
                            text: 'EJE'
                        },

                    ]

                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        padding: 4,
                        flex: 1
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            emptyText: 'SPH +/-',
                            itemId: 'sph',
                            maxLength: 5
                        },
                        {
                            xtype: 'combo',
                            itemId: 'genero',
                            store: genero,
                            valueField: 'iduse_mount',
                            displayField: 'description',
                            hidden: true
                        },
                        {
                            xtype: 'textfield',
                            emptyText: 'CYL -',
                            itemId: 'cyl',
                            maxLength: 5
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'add'

                        },
                        {
                            xtype: 'textfield',
                            itemId: 'eje'
                        },
                    ]

                }
            ]

        };
    },
    _panelFiltroRight: function () {
        let materiales = tools.Util.getStoreById('stMaterial');
        let color = tools.Util.getStoreById('stColor');
        let tratamiento = tools.Util.getStoreById('stTreatment');
        materiales = tools.Util.setHeaderAuth(materiales);
        color = tools.Util.setHeaderAuth(color);
        tratamiento = tools.Util.setHeaderAuth(tratamiento);

        materiales.load();
        color.load();
        tratamiento.load();
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                padding: 2
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        padding: 4,
                        flex: 1
                    },
                    items: [
                        {
                            xtype: 'label',
                            text: 'BASE'
                        },
                        {
                            xtype: 'label',
                            text: 'MATERIAL'
                        },
                        {
                            xtype: 'label',
                            text: 'COLOR'
                        },
                        {
                            xtype: 'label',
                            text: 'TRATAMIENTO'
                        },

                    ]

                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    defaults: {
                        padding: 4,
                        flex: 1
                    },
                    items: [
                        {
                            xtype: 'combo',
                            itemId: 'base'

                        },
                        {
                            xtype: 'combo',
                            itemId: 'material',
                            store: materiales,
                            valueField: 'idmaterial',
                            displayField: 'description',
                        },
                        {
                            xtype: 'combo',
                            itemId: 'color',
                            store: color,
                            valueField: 'idcolor',
                            displayField: 'description',
                        },
                        {
                            xtype: 'combo',
                            itemId: 'tratamiento',
                            store: tratamiento,
                            valueField: 'idtreatment',
                            displayField: 'description',
                        },
                    ]

                }
            ]

        };
    },
    _panelBotones: function () {
        return {
            xtype: 'container',
            userCls: 'big-25 small-100',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'button',
                    scale: 'large',
                    iconCls: 'fa fa-search fa-2x',
                    listeners: {
                        click: 'onClickValidarValores'
                    }

                },
                {
                    xtype: 'container',
                    height: 5
                },
                {
                    xtype: 'button',
                    scale: 'large',
                    iconCls: 'fa fa-rotate-left fa-2x',
                    listeners: {
                        click: 'onClickClear'
                    }

                },
            ]

        };
    },
    _panelTitulo: function (_texto) {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            html: '<div style="background-color:#F8D7DA;color:#721C24;font-size: 14px;height: 40px;padding: 10px;">' + _texto + '</div>',

        };
    },
    _grilla: function () {
        let _ProductQuotation = tools.Util.getStoreById('stProductQuotation');
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable: true,
            height: 300,
            items: [
                {
                    xtype: 'grid',
                    flex: 1,
                    itemId: 'dgvFiltro',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    sortableColumns: false,
                    store: _ProductQuotation,
                    listeners : {
                        rowClick:'onRowClickProduct'
                    },  
                    columns: [
                        {
                            dataIndex: 'tienda',
                            header: '<div>Tienda</div>',
                            align: 'center',
                            width: 400,
                        },
                        {
                            dataIndex: 'sph',
                            header: '<div>SPH +/-</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'cyl',
                            header: '<div>CYL-</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'add',
                            header: '<div>ADD</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'cliente',
                            header: '<div>EJE</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'cliente',
                            header: '<div>BASE</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'material',
                            header: '<div>MATERIAL</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'color',
                            header: '<div>COLOR</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'description',

                            header: '<div>TRATAMIENTO</div>',
                            align: 'left',
                            width: 180,
                        },
                       
                        {
                            dataIndex: 'index',
                            header: '<div>INDICE</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'size',
                            header: '<div>TAMAÑO</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'side',
                            header: '<div>LADO</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'brand',
                            header: '<div>MARCA</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'stockactual',
                            header: '<div>CANTIDAD</div>',
                            align: 'left',
                            width: 180,
                        },
                        {
                            dataIndex: 'price_local',
                            header: '<div>PRECIO</div>',
                            align: 'left',

                            width: 180,
                        },
                        { flex: 1 }
                    ]

                }

            ]
        };
    },
    _panelSeparador: function () {
        return {
            xtype: 'container',
            userCls: 'big-100 small-100',
            flex: 1,
            html: '<div style=" border-bottom: 4px solid #64B7B2;"></div>'

        };
    },
});
