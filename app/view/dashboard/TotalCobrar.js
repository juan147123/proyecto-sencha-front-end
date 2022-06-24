Ext.define('backoffice.view.dashboard.TotalCobrar', {
    extend: 'Ext.panel.Panel',
    xtype: 'totalcobrar',
    ui: 'light',
    requires: [
        'backoffice.view.dashboard.TotalCobrarController',
        'backoffice.view.dashboard.TotalCobrarModel'
    ],


    controller: 'dashboard-totalcobrar',
    viewModel: {
        type: 'dashboard-totalcobrar'
    },
    height: 150,
    layout: 'fit',
    total: 0,
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
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
                        type: 'fit',
                        align: 'stretch'
                    },
                    flex: 1,
                    items: [

                        {
                            xtype: 'container',
                            padding: '30 0 30 0',
                            html: '<i class="fa fa-line-chart fa-5x iconDashboard" aria-hidden="true"></i>',
                            flex: 1,
                            style: {
                                textAlign: 'center'

                            },
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 2,
                    items: [
                        {
                            xtype: 'container',
                            html: '<h3>Total Cobrar</h3>',
                            flex: 1,

                        },

                        {
                            xtype: 'label',
                            text: '0',
                            itemId: 'lblTotalCobrar',
                            flex: 1,
                            cls: 'labelDashboard',
                            style: {
                                fontSize: '50px',
                                textAlign: 'center'

                            },
                        },
                    ]
                },


            ]
        }

    ],
});
