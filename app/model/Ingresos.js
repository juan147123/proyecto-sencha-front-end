Ext.define('backoffice.model.Ingresos', {
    extend: 'Ext.data.Model',
    fields: [
        { name: "anio",  type : "int"},
        { name: "mes",   type : "int"},
        { name: "total", type : "int"},
        { name : "mesnombre" , type : 'string',convert:function(value, record){
           
            return  tools.Util.getNombreMeses(record.get('mes'));
            
        }},  
     ]
});