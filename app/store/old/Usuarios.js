Ext.define('backoffice.store.Usuarios', {
    extend : 'Ext.data.Store',
    storeId : 'stUsuario',
    model : 'backoffice.model.Usuario',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'admin',
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
    autoLoad: false,
    autoSync:true
});