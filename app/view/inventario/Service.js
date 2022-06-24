Ext.define('backoffice.view.inventario.Service', {
    alias: 'serviceinventario',
    //@Promise
    CargarProductosTienda: function () {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'GET',
                baseURL: Ext.manifest.api,
                url: 'product/store/' + tools.Jwt.getStore()
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

    },
    CargarDatosUsuario: function (iduser) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'GET',
                baseURL: Ext.manifest.api,
                url: 'user/employee/' + iduser
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

    },
    EditStatusReplacement: function (id, idinventory_status) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'PUT',
                baseURL: Ext.manifest.api,
                url: 'replacement/' + id,
                data: { 'idinventory_status': idinventory_status }
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

    },
    findAmountSend: function (id) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'GET',
                baseURL: Ext.manifest.api,
                url: 'replacement/amount/' + id
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

    },
    editDataReplacement: function (id, data) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'PUT',
                baseURL: Ext.manifest.api,
                url: 'replacementdetail/' + id,
                data: data
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

    },
    addStockProduct: function (data) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'POST',
                baseURL: Ext.manifest.api,
                url: 'replacement/addstock',
                data: data
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

    },

});