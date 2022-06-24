Ext.define('backoffice.store.Replacement', {
    extend  : 'Ext.data.Store',
    storeId : 'stReplacement',
    model   : 'backoffice.model.Replacement',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'replacement',
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