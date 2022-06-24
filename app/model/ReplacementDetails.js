Ext.define('backoffice.model.ReplacementDetails', {
    extend: 'Ext.data.Model',
    alias : 'modelReplacementDetails',
    fields: [
        { name : "id", type : 'int'},
        { name : "idreplacement", type : 'int'},
        { name : "idproduct", type : 'int'},
        { name : "descripcion", type : 'string'},
        { name : "amount", type : 'int'},
        { name : "amount_send", type : 'int'},
        { name : "comment" , type : 'string'},   
       
    ]
});
