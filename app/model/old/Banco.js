Ext.define('backoffice.model.Banco', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "idBanco" , type : "int"},
        { name: "nombre", type : "string"},
        { name: "iniciales", type : "string"},
        { name: "enable", type : "int"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
     ],
    // belongsTo: {name:'Conductor', model:'backoffice.model.Conductor'} 
});