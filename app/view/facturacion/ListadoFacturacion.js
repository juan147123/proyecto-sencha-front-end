
Ext.define('backoffice.view.facturacion.ListadoFacturacion', {
    extend: 'Ext.panel.Panel',
    xtype: 'listado-facturacion',
    itemId: 'listado-facturacion',
    requires: [
        'backoffice.view.facturacion.ListadoFacturacionController',
        'backoffice.view.facturacion.ListadoFacturacionModel'
    ],

    controller: 'facturacion-listadofacturacion',
    viewModel: {
        type: 'facturacion-listadofacturacion'
    },
    layout: {
        type: 'responsivecolumn',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        let conductores = null; // tools.Util.getStoreById('stConductores').load();
        Ext.apply(me, {
            items: [
                me._cards1(),
                me._cards2(),
                me._cards3(),
                me._botones(),
                me._buscarFechas(),
                me._buscarNro(),
                me._buscarDni(),
                me._buscarDatos(),
                me._resumenDiario(),
                me._grilla()
            ]
        });
        me.callParent();
    },
    _cards1: function () {
        return {
            ui: 'light',
            height: 150,
            layout: 'fit',
            userCls: 'big-33 small-100',

            total: 0,
            items: [

                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults: {
                        flex: 1
                    },

                    style: {
                        backgroundColor: '#E8F4F4',

                    },
                    padding: 10,
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 1,
                            items: [

                                {
                                    xtype: 'container',
                                    padding: '5 0 5 0',
                                    html: '<i class="fa fa-cube fa-3x" aria-hidden="true"></i>',
                                    flex: 1,
                                    style: {
                                        textAlign: 'center'

                                    },
                                },
                                {
                                    xtype: 'container',
                                    html: '<h3>Total de ventas</h3>',
                                    flex: 1,

                                },
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 1.5,
                            items: [
                               
                                {
                                    xtype: 'label',
                                    text: '0',
                                    itemId: 'lblTotalVentas',
                                    padding : '15 0 0 0',
                                    flex: 1,
                                    cls: 'labelDashboard',
                                    style: {
                                        fontSize: '50px',
                                        textAlign: 'right'

                                    },
                                },
                            ]
                        },


                    ]
                }

            ],

        };
    },
    _cards2: function () {
        return {
            ui: 'light',
            height: 150,
            layout: 'fit',
            userCls: 'big-33 small-100',

            total: 0,
            items: [

                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults: {
                        flex: 1
                    },

                    style: {
                        backgroundColor: '#F7F9D4',

                    },
                    padding: 10,
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 1,
                            items: [

                                {
                                    xtype: 'container',
                                    padding: '5 0 5 0',
                                    html: '<i class="fa fa-money fa-3x" aria-hidden="true"></i>',
                                    flex: 1,
                                    style: {
                                        textAlign: 'center'

                                    },
                                },
                                {
                                    xtype: 'container',
                                    html: '<h3>Total de Delantos</h3>',
                                    flex: 1,

                                },
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 1.5,
                            items: [
                               
                                {
                                    xtype: 'label',
                                    text: '0',
                                    itemId: 'lblTotalDelantos',
                                    padding : '15 0 0 0',
                                    flex: 1,
                                    cls: 'labelDashboard',
                                    style: {
                                        fontSize: '50px',
                                        textAlign: 'right'

                                    },
                                },
                            ]
                        },


                    ]
                }

            ],

        };
    },
    _cards3: function () {
        return {
            ui: 'light',
            height: 150,
            layout: 'fit',
            userCls: 'big-33 small-100',

            total: 0,
            items: [

                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    defaults: {
                        flex: 1
                    },

                    style: {
                        backgroundColor: '#EFF2FB',

                    },
                    padding: 10,
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            flex: 1,
                            items: [

                                {
                                    xtype: 'container',
                                    padding: '5 0 5 0',
                                    html: '<i class="fa fa-money fa-3x" aria-hidden="true"></i>',
                                    flex: 1,
                                    style: {
                                        textAlign: 'center'

                                    },
                                },
                                {
                                    xtype: 'container',
                                    html: '<h3>Total de Saldo</h3>',
                                    flex: 1,

                                },
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            flex: 1.5,
                            items: [
                               
                                {
                                    xtype: 'label',
                                    text: '0',
                                    itemId: 'lblTotalSaldo',
                                    padding : '15 0 0 0',
                                    flex: 1,
                                    cls: 'labelDashboard',
                                    style: {
                                        fontSize: '50px',
                                        textAlign: 'right'

                                    },
                                },
                            ]
                        },


                    ]
                }

            ],

        };
    },
    _botones: function () {
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

                    ui: 'button-sistema',
                    iconCls: 'fa fa-cloud-download',
                    tooltip: 'Generar reporte en pdf'
                },
                {
                    ui: 'button-sistema',
                    iconCls: 'fa fa-file-excel-o',
                    tooltip: 'Genera reporte en excel',
                    listeners: {
                        click: 'onClickExcel'
                    }
                }
            ]

        };
    },
    _buscarFechas: function () {
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
                    xtype: 'datefield',
                    itemId: 'date1',
                    ui: 'datefield-sistema',
                    tooltip: 'Desde',
                    value: moment(new Date()).format("01-MM-YYYY"),
                    listeners: {
                        select: 'onClickFiltrarFecha',
                    },
                    editable: false,
                },
                {
                    xtype: 'datefield',
                    itemId: 'date2',
                    ui: 'datefield-sistema',
                    tooltip: 'Hasta',
                    value: new Date(),
                    editable: false,
                    listeners: {
                        select: 'onClickFiltrarFecha',
                    },
                }
            ]

        };
    },
    _buscarNro: function () {
        return {
            xtype: 'container',
            userCls: 'big-10 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'NRO.',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressDocserie'
                    }
                }
            ]

        };
    },
    _buscarDni: function () {
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'BUSCAR DOCUMENTO',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressDocument'
                    }
                }
            ]

        };
    },
    _buscarDatos: function () {
        return {
            xtype: 'container',
            userCls: 'big-50 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    ui: 'datefield-sistema',
                    xtype: 'textfield',
                    flex: 1,
                    emptyText: 'NOMBRES Y APELLIDOS/RAZON SOCIAL',
                    padding: 2,
                    enableKeyEvents: true,
                    listeners: {
                        keypress: 'onKeyPressName'
                    }
                }
            ]

        };
    },
    _resumenDiario: function () {
        return {
            xtype: 'container',
            userCls: 'big-20 small-100',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'button',
                    ui: 'button-sistema',
                    text: 'Resumen Diario',
                    listeners: {
                        click: 'onClickResumenDiario'
                    }
                },
            ]

        };
    },
    _grilla: function () {
        let store = tools.Util.getStoreById('stSales');
        store = tools.Util.setHeaderAuth(store);
        store.load({
            callback: function(records, operation, success) {
                if(success){
                    let totalventa=0;
                    let totaldelanto=0;
                    let totalsaldo=0;
                    records.forEach(element => {
                        if(element.get('enabletext')=="Activo"){
                            totalventa+=parseFloat(element.get('total'));
                            totaldelanto+=parseFloat(element.get('delanto'));
                            totalsaldo+=parseFloat(element.get('saldo'));
                        }
                        
                    });
                    tools.Util.getById('lblTotalVentas').setText((totalventa).toFixed(2));
                    tools.Util.getById('lblTotalDelantos').setText((totaldelanto).toFixed(2));
                    tools.Util.getById('lblTotalSaldo').setText((totalsaldo).toFixed(2));
                }    
            },
            scope: this
        });
        return {
            xtype: 'panel',
            userCls: 'big-100 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            scrollable: true,
            height: Ext.manifest.gridHeightSales,
            items: [
                {
                    xtype: 'exportablegrid',
                    flex: 1,
                    itemId: 'dgvFacturacion',
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        preserveScrollOnReload: true
                    },
                    headerBorders: false,
                    rowLines: true,
                    // scrollable: false,
                    sortableColumns: false,
                    store: store,
                    bbar: me._paginacion(),
                    columns: [

                        {
                            dataIndex: 'date_issue',
                            header: '<div>Fecha</div>',
                            xtype: 'datecolumn',
                            format: 'd/m/Y',
                            align: 'center',
                            width: 150,
                            lockable: true,
                        },
                        {
                            dataIndex: 'docserie',
                            header: '<div>Numero</div>',
                            align: 'center',
                            width: 120,
                            lockable: true,

                        },
                        {
                            dataIndex: 'businessname',
                            header: '<div>Nombres/Razón social</div>',
                            width: 300,
                            align: 'left',
                            renderer: function (v, m) {
                                m.style = 'color:#3073a6;';
                                m.tdAttr = Ext.String.format('data-qtip="{0}"', v);
                                return v;
                            },
                            lockable: true,
                        },
                        {
                            dataIndex: 'number_document',
                            header: '<div>N° Documento</div>',
                            width: 200,
                            align: 'left',
                        },
                        {
                            type: 'numbercolumn',
                            dataIndex: 'total',
                            header: '<div>Total</div>',
                            align: 'right',
                            width: 150,
                        },
                        {
                            type: 'numbercolumn',
                            dataIndex: 'delanto',
                            header: '<div>Delanto</div>',
                            align: 'right',
                            width: 150,
                            renderer: function (value, metadata, record) {
                                if (value === "0.00") {
                                    return '<label style="color: #FF0000;">' + value + '</label>';
                                } else {
                                    return '<label>' + value + '</label>';
                                }
                            }
                        },

                        {
                            text: '',
                            width: 50,
                            xtype: 'widgetcolumn',
                            widget: {

                                xtype: 'button',
                                iconCls: 'x-fa fa-money',
                                handler: 'onClick_Pagos',
                                style: 'background-color:#9cc96b;border-color:#9cc96b;',
                                tooltip: "Ingresar pago"

                            }
                        },
                        {
                            type: 'numbercolumn',
                            dataIndex: 'saldo',
                            header: '<div>Saldo</div>',
                            align: 'right',
                            width: 150,
                        },
                        {
                            text: "Estado",
                            columns: [
                                {
                                    dataIndex: 'enabletext',
                                    header: '<div>Status</div>',
                                    align: 'left',
                                    width: 100,
                                    renderer: function (value, metadata, record) {
                                        if (value === 'Activo') {
                                            return '<div class="x-status-activo">' + value + '</div>';
                                        } else {
                                            return '<div class="x-status-inactivo">' + value + '</div>';
                                        }
                                    }
                                },
                                {
                                    dataIndex: 'estadopago',
                                    header: '<div>Pago</div>',
                                    align: 'left',
                                    width: 120,
                                    renderer: function (value, metadata, record) {
                                        if (value == 'Pagado') {
                                            return '<center><div class="x-status-activo">' + value + '</div></center>';
                                        } else {
                                            return '<center><div class="x-status-tipo-servicio">' + value + '</div></center>';
                                        }
                                    },

                                },
                                ,
                                {
                                    dataIndex: 'estadofe',
                                    header: '<div>Sunat</div>',
                                    align: 'left',
                                    width: 120,
                                    renderer: function (value, metadata, record) {
                                        if (value == 'ACEPTADA') {
                                            return '<center><div class="x-status-activo">' + value + '</div></center>';
                                        } else {
                                            return '<center><div class="x-status-inactivo">' + value + '</div></center>';
                                        }
                                    },

                                },
                            ]
                        },

                        {
                            text: '',
                            width: 50,
                            xtype: 'widgetcolumn',
                            widget: {
                                xtype: 'button',
                                iconCls: 'x-fa fa-file-pdf-o',
                                handler: 'onClickPdf'


                            }
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
                                    tooltip: 'Anular',
                                    handler: 'onClickAnular',
                                    padding: '0 10 0 0'
                                }
                            ]
                        },
                        { flex: 1 }

                    ]

                }

            ]
        };
    },
    _paginacion: function () {
        return {

            xtype: 'pagingtoolbar',
            displayInfo: true,
            emptyMsg: "Sin elementos a mostrar",

        }
    }
});
