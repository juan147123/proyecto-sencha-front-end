Ext.define('backoffice.model.Terminology', {
    extend: 'Ext.data.Model',
    alias : 'modelTerminology',
    fields: [
        { name : "idterminology", type : 'int'},
        { name : "description", type : 'string'},
        { name : "enable", type : 'int'},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},   
       
    ]
});
