Ext.define('backoffice.store.User', {
    extend  : 'Ext.data.Store',
    storeId : 'stUser',
    model   : 'backoffice.model.User',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'user',
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