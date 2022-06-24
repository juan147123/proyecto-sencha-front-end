Ext.define('backoffice.store.ProductQuotation', {
    extend: 'Ext.data.Store',
    storeId: 'stProductQuotation',
    model: 'backoffice.model.Product',
    pageSize: 100,
    extraParams: {
        sph: null,
        cyl: null,
        add: null,
        idmaterial: null,
        idcolor: null,
        idtreatment: null,
        iduse_mount: null
    },
    proxy: {
        type: 'rest',
        url: Ext.manifest.api + 'filtersalesproducts',
        headers: {
            'Content-Type': "application/json",
            'Authorization' : tools.Jwt.getBearer()
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'count'
        },
        writer: {
            type: 'json',

        }
    },
    autoLoad: false,
    autoSync: true
});