Ext.define('backoffice.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Gastos',
                iconCls: 'x-fa fa-money',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'gastos',
                leaf: true
            },
            {
                text: 'Descuentos',
                iconCls: 'x-fa fa-money',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'descuento',
                leaf: true
            },
        ]
    }//end root
});
