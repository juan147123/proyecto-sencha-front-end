Ext.define('backoffice.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'admindashboard',

    requires: [
        'Ext.ux.layout.ResponsiveColumn',
        'backoffice.view.dashboard.DashboardController',
        'backoffice.view.dashboard.TotalConductores',
        'backoffice.view.dashboard.ConductoresServicio',
        'backoffice.view.dashboard.TotalViajesRealizados',
        'backoffice.view.dashboard.TotalViajesCurso',
        'backoffice.view.dashboard.GraficoIngresos',
        'backoffice.view.dashboard.TotalViajesCursoTuristico',

        'backoffice.view.dashboard.IngresoDiario',
        'backoffice.view.dashboard.OrdenTrabajo',
        'backoffice.view.dashboard.Cliente',
        'backoffice.view.dashboard.TotalCobrar'
    ],

    controller: 'dashboard',
    layout: 'responsivecolumn',
    listeners: {
        hide: 'onHideView',
        // show: 'onShowView'

    },
    chartTaskRunner: null,
    initComponent: function () {
        me = this;

        Ext.apply(me, {
            items: [
                {
                    xtype: 'ingresodiario',
                    userCls: 'big-50 small-100',
                },
                {
                    xtype: 'ordertrabajo',
                    userCls: 'big-50 small-100'
                },
                {
                    xtype: 'dashcliente',
                    userCls: 'big-50 small-100'
                },
                {
                    xtype: 'totalcobrar',
                    userCls: 'big-50 small-100'
                },

                /* {
                     xtype: 'totalviajescursoturistico',
                     userCls: 'big-20 small-100'
                 },*/

                {
                    xtype: 'graficoingresos',
                    userCls: 'big-100 small-100'
                }
            ]
        });
        this.callParent();

        let store = tools.Util.getStoreById('stDashboard');
        store = tools.Util.setHeaderAuth(store);
        store.load({
            callback: function (records, operation, success) {
                if (success) {
                    //var view = tools.Util.getById("graficoIngreso");
                    //view.unmask();
                    tools.Util.getById('lblIngresoDiario').setText((records[0].get('todaysales')).toFixed(2));
                    tools.Util.getById('lblOrdenesTrabajo').setText(records[0].get('workorders'));
                    tools.Util.getById('lblTotalCobrar').setText((records[0].get('totalbalance')).toFixed(2));
                    tools.Util.getById('lblTotalClientes ').setText(records[0].get('totalclients'));
                }
            },
            scope: this
        });

        this.chartTaskRunner = runner = new Ext.util.TaskRunner();
        runner.start({
            run: function () {
                try {
                    let store = tools.Util.getStoreById('stDashboard');
                    store = tools.Util.setHeaderAuth(store);
                    store.load({
                        callback: function (records, operation, success) {
                            if (success) {
                                if (tools.Util.getById('lblIngresoDiario')) {

                                    tools.Util.getById('lblIngresoDiario').setText((records[0].get('todaysales')).toFixed(2));
                                    tools.Util.getById('lblOrdenesTrabajo').setText(records[0].get('workorders'));
                                    tools.Util.getById('lblTotalCobrar').setText((records[0].get('totalbalance')).toFixed(2));
                                    tools.Util.getById('lblTotalClientes ').setText(records[0].get('totalclients'));
                                } else {
                                    Ext.destroy(runner);
                                }
                            }
                        },
                        scope: this
                    });
                } catch (error) {
                    Ext.destroy(runner);
                }

            },
            interval: 10000
        });
    },

});
