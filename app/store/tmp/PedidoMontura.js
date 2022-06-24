Ext.define('backoffice.store.tmp.PedidoMontura', {
    extend: 'Ext.data.Store',
    storeId : 'stPedidoMontura',
    fields: [
        { name: "idorder_detail_mount", type : "int"},
        { name: "markets", type : "string"},
        { name: "cantidad", type : "int"}
    ],
    proxy: { 
        type: 'memory' 
    },

    data : [
        {
            idorder_detail_mount:0,
            markets:'Hombre',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Mujer',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Niños',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Sol Hombres',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Sol Mujeres',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Ocupacional',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Otros_2',
            cantidad:0
        },
        
        {
            idorder_detail_mount:0,
            markets:'Otros_3',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Otros_4',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Otros_5',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Otros_6',
            cantidad:0
        },
        {
            idorder_detail_mount:0,
            markets:'Otros_7',
            cantidad:0
        },
       
    ]
});
