Ext.define('backoffice.store.Material', {
    extend  : 'Ext.data.Store',
    storeId : 'stMaterial',
    model   : 'backoffice.model.Material',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'material',
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