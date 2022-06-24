Ext.define('backoffice.model.Order', {
    extend: 'Ext.data.Model',
    alias : 'modelOrder',
    fields: [
        { name : "idorder", type : 'int'},
        { name : "typetransaction", type : 'string'},
        { name : "idstore", type : 'int'},
        { name : "idsupplier", type : 'int'},
        { name : "date" , type : 'date'},
        { name : "idcategory", type : 'int'},
        { name : "idindex", type : 'int'},
        { name : "idmaterial", type : 'int'},
        { name : "idsize", type : 'int'},
        { name : "idtype", type : 'int'},
        { name : "idside", type : 'int'},
        { name : "idcolor", type : 'int'},
        { name : "idbrand", type : 'int'},
        { name : "treatment1", type : 'string'},
        { name : "treatment2", type : 'string'},
        { name : "treatment3", type : 'string'},
        { name : "treatment4", type : 'string'},
        { name : "status", type : 'int'},
        { name : "enable", type : 'int'},
        { name : "statustext" , type : 'string',convert:function(value, record){
            if (record.get('status') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},
    ]
});
