Ext.define('backoffice.store.Spent', {
    extend  : 'Ext.data.Store',
    storeId : 'stSpent',
    model   : 'backoffice.model.Spent',
    pageSize: 100,
    extraParams: {
        date1:null,
        date2:null, 
    },
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'spent',
   /*      headers: {
            'Content-Type': "application/json" ,
           // 'Authorization' : tools.Jwt.getBearer()
        }, */
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