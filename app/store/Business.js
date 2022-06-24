Ext.define('backoffice.store.Business', {
    extend : 'Ext.data.Store',
    storeId : 'stBusiness',
    model : 'backoffice.model.Business',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'business',
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