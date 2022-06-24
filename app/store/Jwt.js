Ext.define('backoffice.store.Jwt', {
    extend : 'Ext.data.Store',
    storeId : 'stJwt',
    fields: [
        'email', 
        'idstore',
        'token',
        'user',
        'id'
    ],
    autoLoad: true,
    proxy: {
        type: 'localstorage',
        id: 'localcache'
    }
});