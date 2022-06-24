Ext.define('backoffice.model.Pagos', {
    extend: 'Ext.data.Model',
    alias : 'modelPagos',
    fields: [
        { name : "idpago", type : 'int'},
        { name : "idsales", type : 'int'},
        { name : "descripcion", type : 'string'},
        { name : "monto", type : 'float'},
        { name : "fecha" , type : 'string'},   
       
    ]
});
