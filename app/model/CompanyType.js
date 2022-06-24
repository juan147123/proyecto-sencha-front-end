Ext.define('backoffice.model.Companytype', {
    extend: 'Ext.data.Model',
    alias : 'modelCompanyType',
    fields: [
        { name : "idcompany_type", type : 'int'},
        { name : "description",    type : 'string'},
        { name : "status",         type : 'float'},
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
