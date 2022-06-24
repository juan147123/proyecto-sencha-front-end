Ext.define('backoffice.view.producto.ServiceProduct',{
    alias : 'service-Product',
    //@Promise
    saveProduct:function(product){
         return new Ext.Promise(function(resolve,reject){
                _idproduct = product.get('idproduct');
                axios({
                    method: (_idproduct!=0?'PUT':'POST'),
                    baseURL: Ext.manifest.api,
                    url: (_idproduct!=0?'product/'+ _idproduct:'product'),
                    data:{
                        "idproduct": product.get('idproduct'),
                        "description": product.get('description'),
                        "priceunit": product.get('priceunit'),
                        "stock": product.get('stock'),
                        "idcategory": product.get('idcategory'),
                        "idbrand": product.get('idbrand'), 
                        "idsupplier": product.get('idsupplier'),
                        "enable": product.get('enable')
                    }
                }).then((res) => {
                    resolve({
                        "status_code" : 200,
                        "data" : res.data
                    });
                        
                })
                .catch((error) => {
                        resolve({
                            "status_code" : error.response.status,
                            "message": error.response.message
                        });
                });
            
         }); 
        
    },

});