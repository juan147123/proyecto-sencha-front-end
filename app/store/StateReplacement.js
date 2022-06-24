Ext.define('backoffice.store.StateReplacement', {
    extend  : 'Ext.data.Store',
    storeId : 'stStateReplacement',
    model   : 'backoffice.model.StateReplacement',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'replacementstatus',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        extraParams: {
            idreplacement: 0,
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync:true
});