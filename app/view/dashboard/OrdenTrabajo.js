
Ext.define('backoffice.view.dashboard.OrdenTrabajo',{
    extend: 'Ext.panel.Panel',
    xtype: 'ordertrabajo',
    ui: 'light',
    requires: [
        'backoffice.view.dashboard.OrdenTrabajoController',
        'backoffice.view.dashboard.OrdenTrabajoModel'
    ],

    controller: 'dashboard-ordentrabajo',
    viewModel: {
        type: 'dashboard-ordentrabajo'
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
                backgroundColor: '#E8F4F4',

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
                            html: '<i class="fa fa-cube fa-5x iconDashboard" aria-hidden="true"></i>',
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
                    flex :2,
                    items: [
                        {
                            xtype: 'container',
                            html: '<h3>Ordenes Trabajo</h3>',
                            flex: 1,

                        },

                        {
                            xtype: 'label',
                            text: '0',
                            itemId: 'lblOrdenesTrabajo',
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
