Ext.define('backoffice.store.Base', {
    extend  : 'Ext.data.Store',
    storeId : 'stBase',
    model   : 'backoffice.model.Base',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'base',
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