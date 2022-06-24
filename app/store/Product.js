Ext.define('backoffice.store.Product', {
    extend  : 'Ext.data.Store',
    storeId : 'stProduct',
    model   : 'backoffice.model.Product',
    pageSize: 50,
    extraParams: {
        idcategory:null,
        idmaterial:null, 
        idtype :null,
        idcolor:null,
        idindex:null,
        idbrand:null,
        idtreatment:null
    },
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'product',
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