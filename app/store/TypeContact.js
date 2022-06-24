Ext.define('backoffice.store.TypeContact', {
    extend  : 'Ext.data.Store',
    storeId : 'stTypeContact',
    model   : 'backoffice.model.TypeContact',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'typecontact',
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