Ext.define('backoffice.view.dashboard.IngresoDiario', {
    extend: 'Ext.panel.Panel',
    xtype: 'ingresodiario',
    ui: 'light',
    requires: [
        'backoffice.view.dashboard.IngresoDiarioController',
        'backoffice.view.dashboard.IngresoDiarioModel'
    ],
    controller: 'dashboard-ingresodiario',
    viewModel: {
        type: 'dashboard-ingresodiario'
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
                backgroundColor: '#F7F9D4',

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
                            html: '<i class="fa fa-money fa-5x iconDashboard" aria-hidden="true"></i>',
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
                            html: '<h3>Ingreso Diario</h3>',
                            flex: 1,

                        },

                        {
                            xtype: 'label',
                            text: '0',
                            itemId: 'lblIngresoDiario',
                            flex: 1,
                            cls: 'labelDashboard',
                            style: {
                                fontSize: '50px',
                                textAlign: 'center'

                            }
                            
                        },
                    ]
                },


            ]
        }

    ],
});
