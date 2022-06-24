Ext.define('backoffice.view.contacto.FormPersonalController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacto-formpersonal',
    init: function () {

    },
    onClickCancelar: function (b) {
        this._regresarLista(0);
    },
    onClickGuardar: function () {
        me = this;

        let form1 = me.getView().getForm();  //tools.Util.getById('panel1').getForm();



        if (!form1.isDirty()) {
            tools.Util.setToast("", Ext.manifest.msgFieldVal, 1);
            return;
        }
        else if (!form1.isValid()) {
            tools.Util.setToast("", "Datos invalidos", 1);
            return;
        }


        var view = tools.Util.getById('personal-registro');
        view.mask('....cargando');



        let personal = Ext.create('modelEmployee', {
            idemployee: tools.Util.getById('idemployee').getValue(),
            idtype_document: tools.Util.getById('idtype_documentPe').getValue(),
            number_document: tools.Util.getById('number_documentp').getValue(),
            name: tools.Util.getById('namep').getValue(),
            lastname: tools.Util.getById('lastnamep').getValue(),
            businessname: tools.Util.getById('businessnamepr').getValue(),
            address: tools.Util.getById('addressp').getValue(),
            address_fiscal: tools.Util.getById('address_fiscalp').getValue(),
            email: tools.Util.getById('correop').getValue(),
            cell_phone: tools.Util.getById('cell_phonep').getValue(),
            phone1: tools.Util.getById('phone1p').getValue(),
            phone2: tools.Util.getById('phone2p').getValue(),
            webpage: tools.Util.getById('webpagep').getValue(),
            job_title: (tools.Util.getById('job_titlep').getValue()),
            salary: (tools.Util.getById('salaryp').getValue()),
            idrol: (tools.Util.getById('idrolp').getValue()),
            idstore: (tools.Util.getById('storep').getValue()),
            enable: (tools.Util.getByName('enable').getValue() ? 1 : 0),
            note: (tools.Util.getById('notep').getValue()),
        });

        let service = Ext.create('serviceContacto');
        service.guardarPersonal(personal).then(function (content) {
            if (content.status_code != 200) {
                alert("error");
                return false;
            }

            let newid = content.data.data.idemployee
            _iduser = tools.Util.getById('iduser').getValue();
            let usu = tools.Util.getById('usuario').getValue();
            let mail = tools.Util.getById('correop').getValue();
            let pass = tools.Util.getById('contrasena').getValue();


            // if (usu != "" && mail != "" && pass != "") {
            if (newid) {
                let usuario = Ext.create('modelUser', {
                    id: tools.Util.getById('iduser').getValue(),
                    name: usu,
                    email: mail,
                    password: pass,
                    idstore: tools.Util.getById('storep').getValue(),
                    enable: (tools.Util.getByName('enable').getValue() ? 1 : 0),
                    idemployee: newid,
                });
                service.guardarUsuario(usuario).then(function (content) {
                    if (content.status_code != 200) {
                        alert("error");
                        return false;
                    }
                    view.unmask();
                    tools.Util.getById('dgvPersonal').getStore().reload();
                    tools.Util.setToast("", Ext.manifest.msgOk, 0);
                    me._regresarLista(0);

                });

            }


        });
    },
    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelPersonal').getLayout();
        me.setActiveItem(nroVista);
    },


    onKeyPressBuscarDocumento: function (obj, e, eOpts) {
        let service = Ext.create('serviceContacto');
        let tipo = tools.Util.getById('idtype_documentPe').getSelection();
        if (e.getKey() == 13) {
            var view = tools.Util.getById('personal-registro');
            let numero = obj.getValue();
            let restype = this._validacion(tipo, numero, view);
            if (tipo) {
                if (tipo['data']['description'] == 'RUC' && numero != "" || tipo['data']['description'] == 'DNI' && numero != "") {
                    view.mask('....espere');
                    service.consultardocumento(restype, numero).then(function (content) {
                        if (content.status_code != 200) {
                            alert("error");
                            return false;
                        }
                        if (content.data.data[0]['nombres'] != undefined) {
                            view.unmask();
                            tools.Util.getById('namep').setValue(content.data.data[0]['nombres']);
                            tools.Util.getById('lastnamep').setValue(
                                content.data.data[0]['apellidoPaterno'] +
                                ' ' +
                                content.data.data[0]['apellidoMaterno']);

                        } else if (content.data.data[0]['razonSocial'] != undefined) {
                            view.unmask();
                            tools.Util.getById('businessnamepr').setValue(
                                content.data.data[0]['razonSocial']
                            );
                        }
                        view.unmask();
                    });
                }
            }
        }
    },


    onClickBuscarPersona: function (e) {
        let tipo = tools.Util.getById('idtype_documentPe').getSelection();
        let numero = tools.Util.getById('number_documentp').getValue();
        let restype = this._validacion(tipo, numero);
        var view = tools.Util.getById('personal-registro');
        let service = Ext.create('serviceContacto');

        if (tipo) {
            if (tipo['data']['description'] == 'RUC' && numero != "" || tipo['data']['description'] == 'DNI' && numero != "") {
                view.mask('....espere');
                service.consultardocumento(restype, numero).then(function (content) {
                    if (content.status_code != 200) {
                        alert("error");
                        return false;
                    }
                    if (content.data.data[0]['nombres'] != undefined) {
                        view.unmask();
                        tools.Util.getById('namep').setValue(content.data.data[0]['nombres']);
                        tools.Util.getById('lastnamep').setValue(
                            content.data.data[0]['apellidoPaterno'] +
                            ' ' +
                            content.data.data[0]['apellidoMaterno']);

                    } else if (content.data.data[0]['razonSocial'] != undefined) {
                        view.unmask();
                        tools.Util.getById('businessnamepr').setValue(
                            content.data.data[0]['razonSocial']
                        );
                    }
                    view.unmask();
                });
            }
        }

    },
    _validacion: function (tipo, numero, view) {
        if (tipo == null) {
            view.unmask();
            return tools.Util.setToast('Vacio', '   Debe seleccionar un tipo de documento', 1);
        } else if (tipo['data']['description'] == 'DNI') {
            if (numero == "") {
                view.unmask();
                return tools.Util.setToast('Vacio', '   Debe digitar un número de documento', 1);
            }
            return 'dni';
        } else if (tipo['data']['description'] == 'RUC') {
            if (numero == "") {
                view.unmask();
                return tools.Util.setToast('Vacio', '   Debe digitar un número de documento', 1);
            }
            return 'ruc';
        }
    },
});
