Ext.define('backoffice.store.TypeTransaction', {
    extend: 'Ext.data.Store',
    storeId : 'stTipoTransaccion',

    //                   IE    Firefox  Chrome   Safari
    fields: ['id', 'descripcion'],

    constructor: function(config) {
        config = config || {};
        config.data = [
            { id: "ENTRADA", descripcion: 'ENTRADA' },
            

        ];

        this.callParent([config]);
    }

});