Ext.define('backoffice.store.Companytype', {
    extend  : 'Ext.data.Store',
    storeId : 'stCompanyType',
    model   : 'backoffice.model.Companytype',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'companytype',
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