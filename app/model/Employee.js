Ext.define('backoffice.model.Employee', {
    extend: 'Ext.data.Model',
    alias : 'modelEmployee',
    fields: [
        { name:"idemployee",type: 'int'},
        { name:"idtype_document",type: 'int'},
        { name:"number_document",type: 'string'},
        { name:"name",type: 'string'},
        { name:"lastname",type: 'string'},
        { name:"businessname",type: 'string'},
        { name:"address",type: 'string'},
        { name:"address_fiscal",type: 'string'},
        { name:"email",type: 'string'},
        { name:"cell_phone",type: 'string'},
        { name:"phone1",type: 'string'},
        { name:"phone2",type: 'string'},
        { name:"webpage",type: 'string'},
        { name:"job_title",type: 'string'},
        { name:"idrol",type: 'int'},
        { name:"salary",type: 'string'},
        { name:"note",type: 'string'},
        { name:"idstore",type: 'int'},
        { name:"enable",type: 'int'},
        { name : "datos" , type : 'string',convert:function(value, record){
            let persona ="";
            if(record.get('name')!="" && record.get('lastname')!=""){
                return persona.concat(record.get('name')," ",record.get('lastname'));
            }else{
                return persona.concat(record.get('businessname'));
            }
        }},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
        { name : "iduser" , type : 'int',convert:function(value, record){
            if (record.get('iduser') == null) {
                return 0;
            }else{
                return record.get('iduser');
            }
            
        }},  
    ]
});
