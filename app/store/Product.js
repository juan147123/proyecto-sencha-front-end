Ext.define('backoffice.store.Product', {
    extend  : 'Ext.data.Store',
    storeId : 'stProduct',
    model   : 'backoffice.model.Product',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'product',
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