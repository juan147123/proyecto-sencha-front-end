
Ext.define('backoffice.store.Static', {
    extend: 'Ext.data.Store',
    alias: 'store.static',

    //                   IE    Firefox  Chrome   Safari
    fields: ['month', 'data1', 'data2', 'data3', 'data4', 'other'],

    constructor: function(config) {
        config = config || {};

        config.data = [
            { month: 'Ene', data1: 500, data2: 37, data3: 35, data4: 4, other: 4 },
            { month: 'Feb', data1: 1000, data2: 37, data3: 36, data4: 5, other: 2 },
            { month: 'Mar', data1: 3000, data2: 36, data3: 37, data4: 4, other: 4 },
            { month: 'Abr', data1: 8000, data2: 36, data3: 38, data4: 5, other: 3 },
            { month: 'May', data1: 10000, data2: 35, data3: 39, data4: 4, other: 4 },
            { month: 'Jun', data1: 25000, data2: 34, data3: 42, data4: 4, other: 3 },
            /*{ month: 'Jul', data1: 21000, data2: 34, data3: 43, data4: 4, other: 3 },
            { month: 'Aug', data1: 19000, data2: 33, data3: 44, data4: 4, other: 3 },
            { month: 'Sep', data1: 18000, data2: 32, data3: 44, data4: 4, other: 4 },
            { month: 'Oct', data1: 19000, data2: 32, data3: 45, data4: 4, other: 3 },
            { month: 'Nov', data1: 14000, data2: 31, data3: 46, data4: 4, other: 4 },
            { month: 'Dec', data1: 12000, data2: 31, data3: 47, data4: 4, other: 3 }*/
        ];

        this.callParent([config]);
    }

});

Ext.define('backoffice.store.Operadores', {
    extend: 'Ext.data.Store',
    storeId : 'stOperadores',

    //                   IE    Firefox  Chrome   Safari
    fields: ['id', 'nombre'],

    constructor: function(config) {
        config = config || {};
        config.data = [
            { id: '=', nombre: '=' },
            { id: '*', nombre: '*' },
            { id: '+', nombre: '+' },
            { id: '<', nombre: '<' },
            { id: '>', nombre: '>' },
        ];

        this.callParent([config]);
    }

});

Ext.define('backoffice.store.TipoPago', {
    extend: 'Ext.data.Store',
    storeId : 'stTipoPago',

    //                   IE    Firefox  Chrome   Safari
    fields: ['id', 'descripcion'],

    constructor: function(config) {
        config = config || {};
        config.data = [
            { id: 0, descripcion: 'TODOS' },
            { id: 1, descripcion: 'EFECTIVO' },
            { id: 2, descripcion: 'TARJETA' }
        ];

        this.callParent([config]);
    }

});

