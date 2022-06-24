Ext.define('backoffice.model.Usuario', {
    extend: 'Ext.data.Model',
    fields: [
        { name : "idAdministrator", type : "int"},
        { name : "uid", type : "string"},
        { name : "email", type : "string"},
        { name : "nombres", type : "string"},
        { name : "apellidos", type : "string"},
        { name : "enable", type : "int"},
        { name : "numeroDocumento", type : "string"},
        { name : "idTipoDocumento", type : "int"},
        {name : "nombreApellido" , type : 'string',convert:function(value, record){
            return record.get('nombres')+ ' ' + record.get('apellidos');
           }},
        {name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'BAJA';
            }
          }},  
     ],
});