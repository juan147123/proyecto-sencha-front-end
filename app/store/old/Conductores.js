Ext.define('backoffice.store.Conductores', {
    extend : 'Ext.data.Store',
    storeId : 'stConductores',
    model : 'backoffice.model.Conductor',
    pageSize:20,
    
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'conductor',
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
    autoSync:true,
});