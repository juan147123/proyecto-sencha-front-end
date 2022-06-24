Ext.define('backoffice.view.venta.ServiceVenta', {
    alias: 'serviceventa',
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
    buscarCliente: function (documento) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'GET',
                baseURL: Ext.manifest.api,
                url:'client/document/'+documento
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

        }); // fin Promise

    },
    buscarDetalle: function (id) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'GET',
                baseURL: Ext.manifest.api,
                url:'salesdetail/'+id
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

        }); // fin Promise

    },

});