Ext.define('backoffice.store.Correlative', {
    extend  : 'Ext.data.Store',
    storeId : 'stCorrelative',
    model   : 'backoffice.model.Correlative',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'correlative',
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

Ext.define('backoffice.store.CorrelativeDocumentSales', {
    extend  : 'Ext.data.Store',
    storeId : 'stCorrelativeDocumentSales',
    model   : 'backoffice.model.Correlative',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'correlative/documentsales',
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