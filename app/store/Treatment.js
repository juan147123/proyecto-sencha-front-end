Ext.define('backoffice.store.Treatment', {
    extend  : 'Ext.data.Store',
    storeId : 'stTreatment',
    model   : 'backoffice.model.Treatment',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'treatment',
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