
Ext.define('backoffice.view.seguridad.ServiceOlvideClave',{
    alias : 'service-OlvideClave',
    //@Promise
    sendEmail:function(email){
         return new Ext.Promise(function(resolve,reject){
                
                axios({
                    method:'POST',
                    baseURL: Ext.manifest.api,
                    url: 'restorepassword',
                    headers: {
                        'Authorization': tools.Jwt.getBearer()
                    },
                    data:{
                        "email": email
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
});