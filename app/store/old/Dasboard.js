Ext.define('backoffice.store.Dashboard', {
    extend : 'Ext.data.Store',
    storeId : 'stDashboard',
    model : 'backoffice.model.Dashboard',
    pageSize:30,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'dashboard/cards',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
           // rootProperty: 'content',
           // totalProperty : 'totalElements'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync:true
});