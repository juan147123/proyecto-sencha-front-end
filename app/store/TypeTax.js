Ext.define('backoffice.store.TypeTax', {
    extend  : 'Ext.data.Store',
    storeId : 'stTypeTax',
    model   : 'backoffice.model.TypeTax',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'typetax',
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