
Ext.define('backoffice.view.local.Menu',{
    extend: 'Ext.menu.Menu',
    alias: 'widget.localmenu',
    requires: [
        'backoffice.view.local.MenuController',
        'backoffice.view.local.MenuModel'
    ],
    controller: 'local-menu',
    viewModel: {
        type: 'local-menu'
    },
    title: 'Acciones',

    iconCls: 'x-fa fa-flash',

    floating: false,

    items: [
        {
            routeId: 'localregistro', //xtype and used for url routing
            params: {
                openWindow: true, // Let the controller know that we want this component in the window,
                targetCfg: {
                    //put any extra configs for your view here
                },
                windowCfg: {
                    // Any configs that you would like to apply for window popup goes here
                    title: 'Local'
                }
            },
            iconCls: 'x-fa fa-plus-circle',
            text: 'NUEVO'
        },
        /*{
            routeId: '',
            iconCls: 'x-fa fa-inbox',
            text: 'Inbox'
        },
        {
            routeId: '',
            iconCls: 'x-fa fa-check-circle',
            text: 'Sent Mail'
        },
        {
            routeId: '',
            iconCls: 'x-fa fa-exclamation-circle',
            text: 'Spam'
        },
        {
            routeId: '',
            iconCls: 'x-fa fa-trash-o',
            text: 'Trash'
        }*/
    ]
});
