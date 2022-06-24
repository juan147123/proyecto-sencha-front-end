Ext.define('backoffice.store.tmp.DetalleFacturacion', {
    extend: 'Ext.data.Store',
    storeId : 'stDetalleFacturacion',
    fields: [
        //{ name: "item", type : "int"},
        { name: "idproduct", type : "int"},
        { name: "descripcion", type : "string"},
        { name: "add", type : "string"},
        { name: "cantidad", type : "int"},
        { name: "precio", type : "float"},
        { name: "impuesto", type : "float"},
        { name: "total", type : "float"}  
    ],
    proxy: { 
        type: 'memory' 
    },
});