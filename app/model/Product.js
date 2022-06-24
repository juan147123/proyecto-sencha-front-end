Ext.define('backoffice.model.Product', {
    extend: 'Ext.data.Model',
    alias : 'modelProduct',
    fields: [
        { name : "idproduct", type : 'int'},
        { name : "description", type : 'string'},
        { name : "priceunit", type : 'float'},
        { name : "stock ", type : 'int'},
        { name : "idcategory  ", type : 'int'},
        { name : "idbrand  ", type : 'int'},
        { name : "enable", type : 'int'},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 0) {
                return '<div class="x-status-activo">ACTIVO</div>';
            }else{
                return '<div class="x-status-inactivo">INACTIVO</div>';
            }
            
        }},

    ]
});
