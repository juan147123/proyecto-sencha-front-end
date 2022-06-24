Ext.define('backoffice.store.Brand', {
    extend  : 'Ext.data.Store',
    storeId : 'stBrand',
    model   : 'backoffice.model.Brand',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'brand',
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