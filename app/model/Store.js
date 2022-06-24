Ext.define('backoffice.model.Store', {
    extend: 'Ext.data.Model',
    alias : 'modelStore',
    fields: [
        { name: "idstore", type :'int' },
        { name: "address", type :'string' },
        { name: "phone",   type :'string' },
        { name: "cell_phone", type :'string' },
        { name: "contact", type :'string' },
        { name : "enable", type : "int"},
        { name : "ipaddress", type : "string"},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }}, 
    ]
});
