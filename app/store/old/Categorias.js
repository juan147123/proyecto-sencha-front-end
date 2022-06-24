Ext.define('backoffice.store.Categorias', {
    extend : 'Ext.data.Store',
    storeId : 'stCategorias',
    model : 'backoffice.model.Categoria',
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'categoria',
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
    autoLoad: true
});