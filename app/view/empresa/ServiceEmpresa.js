
Ext.define('backoffice.view.producto.ServiceEmpresa',{
    alias : 'service-Empresa',
    //@Promise

    guardarImagenEmpresa:function(id,imagen64,image64name){
        return new Ext.Promise(function(resolve,reject){
            axios.post('businessImg', 
            {   "id":id,
                "image64": imagen64,
                "image64name":image64name
            })
            .then((res) => {
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

    eliminarImagenEmpresa:function(id,image64name){
        return new Ext.Promise(function(resolve,reject){
            axios.post('businessImgD', 
            {   "id":id,
                "image64name":image64name
            })
            .then((res) => {
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