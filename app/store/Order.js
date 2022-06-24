Ext.define('backoffice.store.Order', {
    extend  : 'Ext.data.Store',
    storeId : 'stOrder',
    model   : 'backoffice.model.Order',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'order',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
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