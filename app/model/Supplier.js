Ext.define('backoffice.model.Supplier', {
    extend: 'Ext.data.Model',
    alias : 'modelSupplier',
    fields: [
        { name :"idsupplier", type : 'int'},
        { name :"idtype_document", type : 'int'},
        { name :"number_document", type : 'string'},
        { name :"business_name", type : 'string'},
        { name :"address", type : 'string'},
        { name :"email", type : 'string'},
        { name :"cell_phone", type : 'string'},
        { name :"phone1", type : 'string'},
        { name :"phone2", type : 'string'},
        { name :"idtype_tax", type : 'int'},
        { name :"idcompany_type", type : 'int'},
        { name :"note", type : 'string'},
        { name :"idstore", type : 'string'},
        { name :"created_at", type : 'string'},
        { name :"updated_at", type : 'string'},
        { name :"enable", type : 'string'},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},
    ]
});
