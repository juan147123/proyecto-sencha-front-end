Ext.define('backoffice.store.Client', {
    extend  : 'Ext.data.Store',
    storeId : 'stClient',
    model   : 'backoffice.model.Client',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'client',
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