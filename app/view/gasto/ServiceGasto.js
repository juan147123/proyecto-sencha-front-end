
Ext.define('backoffice.view.gato.ServiceGasto', {
    alias: 'service-Gasto',
    //@Promise
    FiltrarFecha: function (dates) {
        if (dates) {
            return new Ext.Promise(function (resolve, reject) {
                axios({
                    method: 'POST',
                    baseURL: Ext.manifest.api,
                    url: 'spentdate',
                    data: dates
                }).then((res) => {
                    resolve({
                        "status_code": 200,
                        "data": res.data
                    });

                })
                    .catch((error) => {
                        resolve({
                            "status_code": error.response.status,
                            "message": error.response.message
                        });
                    });
            });
        }
    },
});