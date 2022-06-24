Ext.define('backoffice.store.Conceptos', {
    extend : 'Ext.data.Store',
    storeId : 'stConceptos',
    model : 'backoffice.model.Concepto',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'concepto',
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