Ext.define('backoffice.model.Treatment', {
    extend: 'Ext.data.Model',
    alias : 'modelTreatment',
    fields: [
        { name : "idtreatment", type : 'int'},
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
