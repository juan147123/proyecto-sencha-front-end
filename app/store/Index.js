Ext.define('backoffice.store.Index', {
    extend  : 'Ext.data.Store',
    storeId : 'stIndex',
    model   : 'backoffice.model.Index',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'index',
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