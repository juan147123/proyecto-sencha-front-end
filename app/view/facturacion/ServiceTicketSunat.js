Ext.define('backoffice.view.venta.ServiceTicketSunat', {
    alias: 'serviceticketsunat',
    //@Promise
    registrarTicket: function (dates) {
        if (dates) {
            return new Ext.Promise(function (resolve, reject) {
                axios({
                    method: 'POST',
                    baseURL: Ext.manifest.api,
                    url: 'ticketsunat',
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
    asignarTicket: function (id, dates) {
        if (dates) {
            return new Ext.Promise(function (resolve, reject) {
                axios({
                    method: 'PUT',
                    baseURL: Ext.manifest.api,
                    url: '/sales/respuestafe/' + id,
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

    resumenBoletas: function (fecha) {
        if (fecha) {
            return new Ext.Promise(function (resolve, reject) {
                axios({
                    method: 'GET',
                    baseURL: Ext.manifest.api,
                    url: '/sales/salesbydate/'+fecha,
                    data: ""
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