Ext.define('backoffice.store.Store', {
    extend  : 'Ext.data.Store',
    storeId : 'stStore',
    model   : 'backoffice.model.Store',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'store/business',
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