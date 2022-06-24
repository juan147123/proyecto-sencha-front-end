
Ext.define('backoffice.view.dashboard.GraficoIngresos', {
    extend: 'Ext.panel.Panel',
    xtype: 'graficoingresos',
    requires: [
        'backoffice.view.dashboard.GraficoIngresosController',
        'backoffice.view.dashboard.GraficoIngresosModel',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom',
        // 'backoffice.store.Static'
    ],
    controller: 'dashboard-graficoingresos',
    viewModel: {
        type: 'dashboard-graficoingresos'
    },

    initComponent: function () {
        
        me = this;

        Ext.apply(me, {
            items: [
                me._titulo(),
                me._filtro(),
                me._grafico(),
                
            ],
            tbar: [
                '->',
                {
                    ui: 'button-sistema',
                    iconCls: 'fa fa-refresh',
                    tooltip: 'Refrescar Gráfico de ingresos',
                    handler: 'onRefrescarIngresos'

                }
            ]
        });
        me.callParent(arguments);
    },
    _titulo: function () {
        return {
            xtype: 'container',
            height: 40,
            padding: 10,
            flex: 1,
            items: [
                {
                    xtype: 'label',
                    text: 'Ingresos',
                    padding: 5,
                    height: 20,
                    width: 100,
                    style: {
                        color: '#32404e',
                        fontSize: '35px',
                        textAlign: 'center'

                    },

                },
            ]
        }
    },
    _filtro: function () {
        let store = tools.Util.getAnios();
        return {
            xtype: 'panel',
            userCls: 'big-30 small-100',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            padding: 5,
            items: [
                {
                    xtype: 'combo',
                    store: store,
                    displayField: 'anio',
                    valueField: 'id',
                    padding: 5,
                    queryMode: 'local',
                    editable: false,
                    value: new Date().getFullYear(),
                    listeners: {
                        change: 'onChangeAnio'
                    }
                }
            ]
        }
    },
    _grafico: function () {

        let store = tools.Util.getStoreById('stIngresos');
        store = tools.Util.setHeaderAuth(store);

        store.load({
            
            params: {
                year: new Date().getFullYear()
            },
        });
        
        return {
            xtype: 'cartesian',
            reference: 'chart',
            width: '100%',
            height: 400,
            itemId: 'graficoIngreso',
            interactions: {
                type: 'panzoom',
                zoomOnPanGesture: true
            },
            animation: {
                duration: 200
            },
            store: store,
            innerPadding: {
                left: 40,
                right: 40
            },
            axes: [{
                type: 'numeric',
                position: 'left',
                grid: true,
                minimum: 0,
                maximum: 10000,
                renderer: 'onAxisLabelRender',
            }, {
                type: 'category',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -55
                    }
                }
            }],
            series: [{
                type: 'line',
                xField: 'mesnombre',
                yField: 'total',
                style: {
                    lineWidth: 2
                },
                marker: {
                    radius: 4,
                    lineWidth: 2
                },
                label: {
                    field: 'total',
                    display: 'over'
                },
                highlight: {
                    fillStyle: '#000',
                    radius: 5,
                    lineWidth: 2,
                    strokeStyle: '#fff'
                },
                tooltip: {
                    trackMouse: true,
                    showDelay: 0,
                    dismissDelay: 0,
                    hideDelay: 0,
                    renderer: 'onSeriesTooltipRender'
                }
            }],
            listeners: {
                itemhighlight: 'onItemHighlight'
            }
            
        };
        

    }
});
