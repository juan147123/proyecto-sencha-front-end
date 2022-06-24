

Ext.define('backoffice.model.TipoServicio', {
    extend: 'Ext.data.Model',
    fields: [
        { name : "idTipoServicio", type : "int"},
        { name : "nombre", type : "string"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
     ],
     //belongsTo: {name:'ConceptoTipoServicio', model:'backoffice.model.ConceptoTipoServicio'} 
});