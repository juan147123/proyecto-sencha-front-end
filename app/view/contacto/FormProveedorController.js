Ext.define('backoffice.view.contacto.FormProveedorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.contacto-formproveedor',
    init: function () {

    },
    onClickCancelar: function (b) {
        this._regresarLista(0);
    },
    onClickGuardar: function () {
        me = this;
        //me._regresarLista(0);

        try {
            let form = me.getView().getForm();
            if (!form.isValid()) {
                Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
                return;
            } else if (!form.isDirty()) {
                Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
                return;
            }
            _id = tools.Util.getById('idsupplier').getValue();

            form.submit({
                url: (_id != 0 ? Ext.manifest.api + 'supplier/' + _id.toString() : Ext.manifest.api + 'supplier'),
                method: (_id != 0 ? 'PUT' : 'POST'),
                waitMsg: Ext.manifest.msgEnviando,
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': tools.Jwt.getBearer()
                },
                clientValidation: true,
                submitEmptyText: true,
                standardSubmit: false,
                success: function (form, action) {
                    tools.Util.getById('dgvProveedor').getStore().reload();
                    tools.Util.setToast("", Ext.manifest.msgOk, 0);
                    let panel = tools.Util.getById('panelProveedor');
                    let view = panel.getLayout();
                    view.setActiveItem(0);
                }
            });
        } catch (error) {
            console.warn(error);
        }


    },
    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelProveedor').getLayout();
        me.setActiveItem(nroVista);
    },


    onKeyPressBuscarDocumento: function (obj, e, eOpts) {
        let tipo = tools.Util.getById('idtype_documentp').getSelection();
        let service = Ext.create('serviceContacto');
        if (e.getKey() == 13) {
            var view = tools.Util.getById('proveedor-registro');
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
                            tools.Util.getByName('business_name').setValue(
                                content.data.data[0]['apellidoPaterno'] +
                                ' ' +
                                content.data.data[0]['apellidoMaterno'] +
                                ' ' +
                                content.data.data[0]['nombres']
                            );
                        } else if (content.data.data[0]['razonSocial'] != undefined) {
                            view.unmask();
                            tools.Util.getByName('business_name').setValue(
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
        let service = Ext.create('serviceContacto');
        let tipo = tools.Util.getById('idtype_documentp').getSelection();
        let numero = tools.Util.getById('number_documentpr').getValue();
        var view = tools.Util.getById('proveedor-registro');
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
                        tools.Util.getByName('business_name').setValue(
                            content.data.data[0]['apellidoPaterno'] +
                            ' ' +
                            content.data.data[0]['apellidoMaterno'] +
                            ' ' +
                            content.data.data[0]['nombres']
                        );
                    } else if (content.data.data[0]['razonSocial'] != undefined) {
                        view.unmask();
                        tools.Util.getByName('business_name').setValue(
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
