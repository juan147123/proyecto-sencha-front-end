Ext.define('backoffice.store.ProductxTreatment', {
    extend  : 'Ext.data.Store',
    storeId : 'stProductxTreatment',
    model   : 'backoffice.model.ProductxTreatment',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'productxtreatment/product',
        headers: {
            'Content-Type': "application/json" ,
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
    autoLoad: false,
    autoSync:true
});