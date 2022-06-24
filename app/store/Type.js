Ext.define('backoffice.store.Type', {
    extend  : 'Ext.data.Store',
    storeId : 'stType',
    model   : 'backoffice.model.Type',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'type',        
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