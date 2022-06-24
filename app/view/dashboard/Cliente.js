Ext.define('backoffice.view.dashboard.Cliente',{
    extend: 'Ext.panel.Panel',
    xtype: 'dashcliente',
    ui: 'light',
    requires: [
        'backoffice.view.dashboard.ClienteController',
        'backoffice.view.dashboard.ClienteModel'
    ],

    controller: 'dashboard-cliente',
    viewModel: {
        type: 'dashboard-cliente'
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
                backgroundColor: '#A39B91',

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
                            html: '<i class="fa fa-users fa-5x iconDashboard" aria-hidden="true"></i>',
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
                            html: '<h3>Total Clientes</h3>',
                            flex: 1,

                        },

                        {
                            xtype: 'label',
                            text: '0',
                            itemId: 'lblTotalClientes',
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

