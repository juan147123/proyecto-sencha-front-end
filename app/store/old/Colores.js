Ext.define('backoffice.store.Colores', {
    extend : 'Ext.data.Store',
    storeId : 'stColor',
    model : 'backoffice.model.Color',
    pageSize:30,
    
   /* proxy: {
        type: 'rest',
        url: ENV.API() +  'color/0/30',
        headers: {
            'Content-Type': "application/json" ,
            'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty : 'total'
        },
        writer: {
            type: 'json',

        }
    },*/
    /*autoLoad: true,
    autoSync:true,*/
    data : [
        {
            idColor: 1,
            nombre : 'amarillo',
            enable : 0,
        },
        {
            idColor: 1,
            nombre : 'rojo',
            enable : 1,
        },
    ]
});