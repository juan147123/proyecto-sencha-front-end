Ext.define('backoffice.model.Product', {
    extend: 'Ext.data.Model',
    alias : 'modelProduct',
    fields: [
        { name : "idproduct",type : 'int',allowNull:false},
        { name : "description",type : 'string',allowNull:false,convert:function(value, record){
            return record.get('sph') + ' '  
            + record.get('cyl') + ' '
            + (record.get('idcategory')?record.get('category'):'')+ ' '
            + (record.get('idtype')?record.get('type'):'') + ' '
            + (record.get('idmaterial')?record.get('material'):'') ;
        }},
        { name : "stockmin",type : 'int',allowNull:false},
        { name : "idstore",type : 'int',allowNull:false},
        { name : "stockactual",type : 'int',allowNull:false},
        { name : "idcategory",type : 'int',allowNull:false},
        { name : "category",type : 'string',allowNull:false},
        { name : "idtype",type : 'int',allowNull:false},
        { name : "type",type : 'string',allowNull:false},
        { name : "idmaterial",type : 'int',allowNull:false},
        { name : "material",type : 'string',allowNull:false},
        { name : "idsize",type : 'int',allowNull:false},
        { name : "size",type : 'string',allowNull:false},
        { name : "idindex",type : 'int',allowNull:false},
        { name : "index",type : 'string',allowNull:false},
        { name : "idside",type : 'int',allowNull:false},
        { name : "side",type : 'string',allowNull:false},
        { name : "idcolor",type : 'int',allowNull:false},
        { name : "color",type : 'string',allowNull:false},
        { name : "idbrand",type : 'int',allowNull:false},
        { name : "brand",type : 'string',allowNull:false},
        { name : "enable",type : 'int',allowNull:false},
        { name : "status",type : 'int',allowNull:false},
        { name : "sph",type : 'string',allowNull:false},
        { name : "cyl",type : 'string',allowNull:false},
        { name : "iduse_mount",type : 'int',allowNull:false},
        { name : "use_mount",type : 'string',allowNull:false},
        { name : "add",type : 'string',allowNull:false},
        { name : "idserie",type : 'int',allowNull:false},
        { name : "serie",type : 'string',allowNull:false},
        { name : "price_local",type : 'float',allowNull:false},
        { name : "price_dolar",type : 'float',allowNull:false},
        { name : "enabletext" , type : 'string',convert:function(value, record){
            if (record.get('enable') == 1) {
                return 'ACTIVO';
            }else{
                return 'INACTIVO';
            }
            
        }},  
    ]
});
