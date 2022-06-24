Ext.define('backoffice.store.TypeDocument', {
    extend  : 'Ext.data.Store',
    storeId : 'stTypeDocument',
    model   : 'backoffice.model.TypeDocument',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'typedocument',
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