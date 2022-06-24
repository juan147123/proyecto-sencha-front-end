Ext.define('backoffice.store.Category', {
    extend  : 'Ext.data.Store',
    storeId : 'stCategory',
    model   : 'backoffice.model.Category',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'category',
        headers: {
            'Content-Type': "application/json",
           /*  'Authorization' : '' */
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty : 'count'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: true,
    autoSync:true
});