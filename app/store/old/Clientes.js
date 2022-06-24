Ext.define('backoffice.store.Clientes', {
    extend : 'Ext.data.Store',
    storeId : 'stClientes',
    model : 'backoffice.model.Cliente',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'cliente',
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