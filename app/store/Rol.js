Ext.define('backoffice.store.Rol', {
    extend : 'Ext.data.Store',
    storeId : 'stRol',
    model : 'backoffice.model.Rol',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'rol',
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