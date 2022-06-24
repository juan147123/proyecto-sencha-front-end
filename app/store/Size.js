Ext.define('backoffice.store.Size', {
    extend  : 'Ext.data.Store',
    storeId : 'stSize',
    model   : 'backoffice.model.Size',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'size',
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