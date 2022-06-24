Ext.define('backoffice.store.Sales', {
    extend  : 'Ext.data.Store',
    storeId : 'stSales',
    model   : 'backoffice.model.Sales',
    pageSize: 100,
    sorters: [
            {
                property: 'date_issue',
                direction: 'DESC'
            }
        ],
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'sales',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
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