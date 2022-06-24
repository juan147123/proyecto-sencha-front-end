Ext.define('backoffice.store.TipoPago', {
    extend: 'Ext.data.Store',
    storeId : 'stTipoPago',

    //                   IE    Firefox  Chrome   Safari
    fields: ['id', 'descripcion'],

    constructor: function(config) {
        config = config || {};
        config.data = [
            { id: "EFECTIVO SOLES", descripcion: 'EFECTIVO SOLES' },
            { id: "EFECTIVO DOLARES", descripcion: 'EFECTIVO DOLARES' },
            { id: "DEPOSITO BANCO SOLES", descripcion: 'DEPOSITO BANCO SOLES' },
            { id: "DEPOSITO BANCO DOLARES", descripcion: 'DEPOSITO BANCO DOLARES' }

        ];

        this.callParent([config]);
    }

});