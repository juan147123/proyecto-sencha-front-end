
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
                    headers: {
                        'Authorization': tools.Jwt.getBearer()
                    },
                    data:{
                        "idproduct": product.get('idproduct'),
                        "description": product.get('description'),
                        "stockmin": product.get('stockmin'),
                        "idstore": product.get('idstore'),
                        "stockactual": product.get('stockactual'),
                        "idcategory": product.get('idcategory'), 
                        "idtype": product.get('idtype'), 
                        "idmaterial": product.get('idmaterial'), 
                        "idsize": product.get('idsize'), 
                        "idindex": product.get('idindex'), 
                        "idside": product.get('idside'), 
                        "idcolor": product.get('idcolor'), 
                        "idbrand": product.get('idbrand'),
                        "enable": product.get('enable'),
                        "sph": product.get('sph'), 
                        "cyl": product.get('cyl'), 
                        "iduse_mount": product.get('iduse_mount'),
                        "add": product.get('add'), 
                        "price_local": product.get('price_local'), 
                        "price_dolar": product.get('price_dolar'),
                        "idserie": product.get('idserie')
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
                });//fin Axios
            
         }); // fin Promise
        
    },

    guardarRepositorio:function(nombre,imagen64){
        return new Ext.Promise(function(resolve,reject){
            try {
                axios.post('repositorio', 
                {   
                    "fileName": nombre,
                    "base64": imagen64,
                })
                .then((res) => {
                        resolve
                        (
                            res
                        );
                            
                })
                .catch((error) => {
                   //console.log("eerror");
                         /*resolve({
                             "status_code" : error.response.status,
                             "message": error.response.message
                         });*/
                });
            } catch (error) {
                resolve({
                    "status_code" : 500,
                    "message": "Error en el servidor"
                });
            }
         
        });//Promise
    }


});