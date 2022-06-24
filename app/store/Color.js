Ext.define('backoffice.store.Color', {
    extend  : 'Ext.data.Store',
    storeId : 'stColor',
    model   : 'backoffice.model.Color',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'color',
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