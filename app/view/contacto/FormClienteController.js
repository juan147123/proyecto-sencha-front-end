Ext.define('backoffice.view.contacto.FormClienteController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacto-formcliente',
    init: function () {

    },
    onClickCerrar: function (b) {
        let w = tools.Util.getById('modalCliente');
        w.close();
    },
    onClickCancelar: function (b) {
        this._regresarLista(0);
    },
    onClickGuardar: function () {
        me = this;
        var view = tools.Util.getById('cliente-registro');
        try {
            let form = me.getView().getForm();
            if (!form.isValid()) {
                Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
                return;
            } else if (!form.isDirty()) {
                Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
                return;
            }
            let tipo = tools.Util.getById('idtype_contactcli').getValue();
            let descuento = tools.Util.getById('iddiscountcli').getValue();
            let validacion = this._validacionregistro(tipo, descuento);
            if (validacion == "No type") {
                return tools.Util.setToast('Vacio', '   Debe seleccionar un tipo de contacto.', 1);
            } else if (validacion == "No discount") {
                return tools.Util.setToast('Vacio', '   Debe seleccionar un descuento', 1);
            } else if (validacion == "ok") {
                _id = tools.Util.getById('idclient').getValue();

                let cliente = Ext.create('modelClient', {
                    idclient: tools.Util.getById('idclient').getValue(),
                    idtype_document: tools.Util.getById('idtype_documentcli').getValue(),
                    number_document: tools.Util.getById('number_documentcli').getValue(),
                    name: tools.Util.getById('namecli').getValue(),
                    lastname: tools.Util.getById('lastnamecli').getValue(),
                    businessname: tools.Util.getById('businessnamecli').getValue(),
                    address: tools.Util.getById('addresscli').getValue(),
                    address_fiscal: tools.Util.getById('address_fiscalcli').getValue(),
                    email: tools.Util.getById('emailcli').getValue(),
                    cell_phone: tools.Util.getById('cell_phonecli').getValue(),
                    phone1: tools.Util.getById('phone1cli').getValue(),
                    phone2: tools.Util.getById('phone2cli').getValue(),
                    webpage: tools.Util.getById('webpagecli').getValue(),
                    idtype_contact: (tools.Util.getById('idtype_contactcli').getValue()),
                    iddiscount: (tools.Util.getById('iddiscountcli').getValue()),
                    credit_line: (tools.Util.getById('credit_linecli').getValue()),
                    avaible_credit: (tools.Util.getById('avaible_creditcli').getValue()),
                    note: (tools.Util.getById('notecli').getValue()),
                    idstore: (tools.Util.getById('idstorecli').getValue()),
                    enable: (tools.Util.getByName('enable').getValue() ? 1 : 0),
                    note: (tools.Util.getById('notecli').getValue()),
                });
                view.mask('....cargando');
                let service = Ext.create('serviceContacto');
                service.guardarCliente(cliente).then(function (content) {
                    if (content.status_code != 200) {
                        alert("error");
                        return false;
                    }
                    view.unmask();
                    let w = tools.Util.getById('modalCliente');
                    let panel = tools.Util.getById('panelContacto');
                    let panelfactura = tools.Util.getById('panelVentas');
                    if (panel) {
                        tools.Util.getById('dgvClientes').getStore().reload();
                        tools.Util.setToast("", Ext.manifest.msgOk, 0);
                        let view = panel.getLayout();
                        view.setActiveItem(0);
      
                    } else {
                        if (panelfactura) {
                            if (content.data.data.name != null) {
                                w.close();
                                tools.Util.getById('businessnameF').setValue(content.data.data.name + '' + content.data.data.lastname);
                            } else {
                                w.close();
                                tools.Util.getById('businessnameF').setValue(content.data.data.businessname);
                            }
                            tools.Util.getById('idtype_documentF').setValue(content.data.data.idtype_document);
                            tools.Util.getById('number_documentF').setValue(content.data.data.number_document);
                            tools.Util.getById('addressF').setValue(content.data.data.address);
                            tools.Util.getById('phoneF').setValue(content.data.data.cell_phone);
                        }
                        else {
                            if (content.data.data.name != null) {
                                w.close();
                                tools.Util.getById('businessnameQD').setValue(content.data.data.name + '' + content.data.data.lastname);
                            } else {
                                w.close();
                                tools.Util.getById('businessnameQD').setValue(content.data.data.businessname);

                            }
                            tools.Util.getById('idtype_documentQD').setValue(content.data.data.idtype_document);
                            tools.Util.getById('number_documentQD').setValue(content.data.data.number_document);
                            tools.Util.getById('addressQD').setValue(content.data.data.address);
                            tools.Util.getById('phoneQD').setValue(content.data.data.cell_phone);
                        }
                    }

                });

            }

        } catch (error) {
            console.warn(error);
        }


    },


    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelContacto').getLayout();
        me.setActiveItem(nroVista);
    },

    onKeyPressBuscarDocumento: function (obj, e, eOpts) {
        let tipo = tools.Util.getByName('idtype_document').getSelection();
        let service = Ext.create('serviceContacto');
        if (e.getKey() == 13) {
            var view = tools.Util.getById('cliente-registro');
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
                            tools.Util.getById('namecli').setValue(content.data.data[0]['nombres']);
                            tools.Util.getById('lastnamecli').setValue(
                                content.data.data[0]['apellidoPaterno'] +
                                ' ' +
                                content.data.data[0]['apellidoMaterno']);

                        } else if (content.data.data[0]['razonSocial'] != undefined) {
                            view.unmask();
                            tools.Util.getById('businessnamecli').setValue(
                                content.data.data[0]['razonSocial']
                            );
                            tools.Util.getById('addresscli').setValue(
                                content.data.data[0]['direccion']
                            );
                            tools.Util.getById('address_fiscalcli').setValue(
                                content.data.data[0]['direccion']
                            );
                        }
                        view.unmask();
                    });
                }
            }


        }
    },


    onClickBuscarPersona: function (e) {
        let tipo = tools.Util.getByName('idtype_document').getSelection();
        let numero = tools.Util.getByName('number_document').getValue();
        let restype = this._validacion(tipo, numero);
        var view = tools.Util.getById('cliente-registro');
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
                        tools.Util.getById('namecli').setValue(content.data.data[0]['nombres']);
                        tools.Util.getById('lastnamecli').setValue(
                            content.data.data[0]['apellidoPaterno'] +
                            ' ' +
                            content.data.data[0]['apellidoMaterno']);

                    } else if (content.data.data[0]['razonSocial'] != undefined) {
                        view.unmask();
                        tools.Util.getById('businessnamecli').setValue(
                            content.data.data[0]['razonSocial']
                        );
                        tools.Util.getById('addresscli').setValue(
                            content.data.data[0]['direccion']
                        );
                        tools.Util.getById('address_fiscalcli').setValue(
                            content.data.data[0]['direccion']
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
    _validacionregistro: function (tipo, descuento) {
        if (tipo == "" || tipo == null) {
            return "No type";
        }
        else if (descuento == "" || descuento == null) {
            return "No discount";
        } else {
            return "ok";
        }
    }
});


