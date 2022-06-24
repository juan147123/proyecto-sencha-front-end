Ext.define('backoffice.view.proveedor.Service', {
    alias: 'servicePedido',
    //@Promise
    guardarPedido: function (order) {
        return new Ext.Promise(function (resolve, reject) {



            _idorder = order.idorder;
            axios({
                method: (_idorder != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idorder != 0 ? 'order/' + _idorder : 'order'),
                data: order
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
    guardarDetalleBifo: function (order, detail) {
        return new Ext.Promise(function (resolve, reject) {

            _idorder = order;
            axios({
                method: (_idorder != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idorder != 0 ? 'orderdetailbifoupdatebyorder' : 'orderdetailbifo'),
                data: detail
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
    guardarDetalleMonoShpPlus: function (order, detail) {
        return new Ext.Promise(function (resolve, reject) {

            _idorder = order;
            axios({
                method: (_idorder != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idorder != 0 ? 'orderdetailmonosphplusupdatebyorder' : 'orderdetailmonosphplus'),
                data: detail
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
    guardarDetalleMonoShpLess: function (order, detail) {
        return new Ext.Promise(function (resolve, reject) {

            _idorder = order;
            axios({
                method: (_idorder != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idorder != 0 ? 'orderdetailmonosphlessupdatebyorder' : 'orderdetailmonosphless'),
                data: detail
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
    guardarDetalleMonoCylLess: function (order, detail) {
        return new Ext.Promise(function (resolve, reject) {

            _idorder = order;
            axios({
                method: (_idorder != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idorder != 0 ? 'orderdetailmonocyllessupdatebyorder' : 'orderdetailmonocylless'),
                data: detail
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
    guardarDetalleMount: function (order, detail) {
        return new Ext.Promise(function (resolve, reject) {

            _idorder = order;
            axios({
                method: (_idorder != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idorder != 0 ? 'orderdetailmountupdatebyorder' : 'orderdetailmount'),
                data: detail
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
    guardarDetalleMonoShpPlusCylLess: function (order, detail) {
        return new Ext.Promise(function (resolve, reject) {

            _idorder = order;
            axios({
                method: (_idorder != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idorder != 0 ? 'orderdetailmonosphpluscyllessupdatebyorder' : 'orderdetailmonosphpluscylless'),
                data: detail
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
    guardarDetalleMonoShpLessCylLess: function (order, detail) {
        return new Ext.Promise(function (resolve, reject) {

            _idorder = order;
            axios({
                method: (_idorder != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idorder != 0 ? 'orderdetailmonosphlesscyllessupdatebyorder' : 'orderdetailmonosphlesscylless'),
                data: detail
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
    listarTablasPedido: function (url) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'GET',
                baseURL: Ext.manifest.api,
                url: url
            }).then((res) => {
                resolve(res);

            })
                .catch((error) => {
                    resolve(error);
                });

        }); // fin Promise

    },


});