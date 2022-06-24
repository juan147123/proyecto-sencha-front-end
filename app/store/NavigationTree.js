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
                text: 'Productos',
                iconCls: 'x-fa fa-money',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'producto',
                leaf: true
            },
        ]
    }//end root
});
