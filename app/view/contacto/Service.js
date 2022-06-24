Ext.define('backoffice.view.contacto.Service', {
    alias: 'serviceContacto',
    //@Promise
    guardarPersonal: function (personal) {
        return new Ext.Promise(function (resolve, reject) {
            _idpersonal = personal.get('idemployee');
            axios({
                method: (_idpersonal != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idpersonal != 0 ? 'employee/' + _idpersonal : 'employee'),
                data: personal.data
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
    guardarUsuario: function (usuario) {
        return new Ext.Promise(function (resolve, reject) {
            _idusuario = usuario.get('id');
            axios({
                method: (_idusuario != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idusuario != 0 ? 'user/' + _idusuario : 'register'),
                data: {
                    "id": usuario.get("id"),
                    "name": usuario.get("name"),
                    "email": usuario.get("email"),
                    "password": usuario.get("password"),
                    "idstore": usuario.get("idstore"),
                    "enable": usuario.get("enable"),
                    "idemployee": usuario.get("idemployee")
                }
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
    guardarCliente: function (cliente) {
        return new Ext.Promise(function (resolve, reject) {
            _idcliente = cliente.get('idclient');
            axios({
                method: (_idcliente != 0 ? 'put' : 'POST'),
                baseURL: Ext.manifest.api,
                url: (_idcliente != 0 ? 'client/' + _idcliente : 'client'),
                data: {
                    idclient: cliente.get("idclient"),
                    idtype_document: cliente.get("idtype_document"),
                    number_document: cliente.get("number_document"),
                    name: cliente.get("name"),
                    lastname: cliente.get("lastname"),
                    businessname: cliente.get("businessname"),
                    address: cliente.get("address"),
                    address_fiscal: cliente.get("address_fiscal"),
                    email: cliente.get("email"),
                    cell_phone: cliente.get("cell_phone"),
                    phone1: cliente.get("phone1"),
                    phone2: cliente.get("phone2"),
                    webpage: cliente.get("webpage"),
                    idtype_contact: cliente.get("idtype_contact"),
                    iddiscount: cliente.get("iddiscount"),
                    credit_line: cliente.get("credit_line"),
                    avaible_credit: cliente.get("avaible_credit"),
                    note: cliente.get("note"),
                    idstore: cliente.get("idstore"),
                    enable: cliente.get("enable"),
                    note: cliente.get("note")                   
                }
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
    consultardocumento: function (documento, numero) {
        var uri = "";
        if (documento == 'dni') {
            uri = 'dni/' + numero;
        } else if (documento == 'ruc') {
            uri = 'ruc/' + numero;
        }
        if (uri != "") {
            return new Ext.Promise(function (resolve, reject) {
                axios({
                    method: 'GET',
                    baseURL: Ext.manifest.ws,
                    url: uri,
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
    guardarRepositorio: function (nombre, imagen64) {
        return new Ext.Promise(function (resolve, reject) {
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

                    });
            } catch (error) {
                resolve({
                    "status_code": 500,
                    "message": "Error en el servidor"
                });
            }

        });
    }


});