Ext.define('backoffice.model.Categoria', {
    extend: 'Ext.data.Model',
    fields: [
      { name:"idCategoria", type:"integer"}, 
      { name:"nombre", type:"string"}, 
      { name:"enable", type:"integer"}
     ]
});