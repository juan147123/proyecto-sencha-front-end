Ext.define('backoffice.store.DocumentSales', {
    extend  : 'Ext.data.Store',
    storeId : 'stDocumentSales',
    model   : 'backoffice.model.DocumentSales',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'documentsales',
        headers: {
            'Content-Type': "application/json" ,
           // 'Authorization' : tools.Jwt.getBearer()
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