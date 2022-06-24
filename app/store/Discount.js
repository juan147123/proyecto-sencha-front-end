Ext.define('backoffice.store.Discount', {
    extend  : 'Ext.data.Store',
    storeId : 'stDiscount',
    model   : 'backoffice.model.Discount',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'discount',
        headers: {
            'Content-Type': "application/json",
            'Authorization' : ''
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