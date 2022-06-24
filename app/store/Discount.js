Ext.define('backoffice.store.Discount', {
    extend  : 'Ext.data.Store',
    storeId : 'stDiscount',
    model   : 'backoffice.model.Discount',
    pageSize: 100,
    proxy: {
        type: 'rest',
        url: Ext.manifest.api +  'discount',
        headers: {
            'Content-Type': "application/json",
            'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY1NjA1MzE2MSwiZXhwIjoxNjU2MDU2NzYxLCJuYmYiOjE2NTYwNTMxNjEsImp0aSI6IkJhTVJOU1VzUm1laU9YNzciLCJzdWIiOjIyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.D2QXorbro9HdQ3SGKJJTUIuzmsJ3JpiQx7-SGCkFCpU'
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
    autoLoad: true,
    autoSync:true
});