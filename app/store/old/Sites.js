Ext.define('backoffice.store.Sites', {
    extend : 'Ext.data.Store',
    storeId : 'stSites',
    model : 'backoffice.model.Site',
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'site',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'content',
            totalProperty : 'totalElements'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false
});