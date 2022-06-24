Ext.define('backoffice.store.Terminology', {
    extend  : 'Ext.data.Store',
    storeId : 'stTerminology',
    model   : 'backoffice.model.Terminology',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'terminology',
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