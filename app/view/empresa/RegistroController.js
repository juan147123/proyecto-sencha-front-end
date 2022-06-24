Ext.define('backoffice.view.empresa.RegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa-registro',
    onBeforeShow:function(){
        let empresa = tools.Util.getStoreById('stBusiness');
        empresa = tools.Util.setHeaderAuth(empresa);
        empresa.load();
    },
   /* onRenderPanel: function () {
        let load = tools.Util.getLoadMask(Ext.manifest.msgCargando, this.getView());
        load.show();
        let empresa = tools.Util.getStoreById('stBusiness');
        empresa = tools.Util.setHeaderAuth(empresa);
        empresa.load({
            callback: function (records, operation, success) {

                if (success) {
                    let business = records[0].data;
                    let nameimg = business.img_logo_empresa_name;
                    tools.Jwt.saveBusiness(business.idbusiness)
                    tools.Util.getByName('idbusiness').setValue(business.idbusiness);
                    tools.Util.getByName('name').setValue(business.name);
                    tools.Util.getByName('idtype_document').setValue(business.idtype_document);
                    tools.Util.getByName('number').setValue(business.number);
                    tools.Util.getByName('address').setValue(business.address);
                    tools.Util.getByName('fiscal_address').setValue(business.fiscal_address);
                    tools.Util.getByName('email').setValue(business.email);
                    tools.Util.getByName('cell_phone').setValue(business.cell_phone);
                    tools.Util.getByName('phone1').setValue(business.phone1);
                    tools.Util.getByName('phone2').setValue(business.phone2);
                    tools.Util.getByName('webpage').setValue(business.webpage);
                    tools.Util.getById('img_logo_empresa_name').setValue(nameimg);
                    if (nameimg != "") {
                        tools.Util.getById('img_logo_empresa').setSrc(
                            Ext.manifest.urlimg + nameimg,
                        );
                    }else{
                        tools.Util.getById('img_logo_empresa').setSrc(
                           'resources/images/not-available.png',
                        );
                    }

                    // tools.Util.getByName('phone1').setValue( business.name );
                    load.destroy();

                }
            },
            scope: this
        });
    },*/
    onClickTiendas: function (b) {
        try {
            let panel = tools.Util.getById('contentPanelEmpresa');
            let view = panel.getLayout();
            view.setActiveItem(1);
            let store = tools.Util.getById('dgvTienda').getStore();
            store.getProxy().url = Ext.manifest.api + 'store/business/' + tools.Util.getByName('idbusiness').getValue(),
                store = tools.Util.setHeaderAuth(store);
            store.load();
        } catch (error) {
            console.warn(error);
        }
    },
    onClickSeries: function (b) {
        try {
            let me = tools.Util.getById('contentPanelEmpresa');
            let l = me.getLayout();
            l.setActiveItem(4);
            //  me.getComponent(2).getEl().slideIn('r');
        } catch (error) {
            console.warn(error);
        }
    },

    onChangeCargarImgEmpresa: function (field, path) {
        me = this;
        if (path) {
            files = field.fileInputEl.dom.files;  //Ext.ComponentQuery.query("#fileimg")[0].fileInputEl.dom.files;  
            file = files[0];
            reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = function (event) {
                var binaryString = '',
                    bytes = new Uint8Array(event.target.result),
                    length = bytes.byteLength,
                    i,
                    base64String;
                // convert to binary string
                for (i = 0; i < length; i++) {
                    binaryString += String.fromCharCode(bytes[i]);
                }
                base64String = btoa(binaryString);
                srcBase64 = "data:image/jpeg;base64," + base64String;
                tools.Util.getById('img_logo_empresa').setSrc(
                    srcBase64
                );
                idbusiness = tools.Util.getByName('idbusiness').getValue()
                let service = Ext.create('service-Empresa');
                service.guardarImagenEmpresa(
                    idbusiness,
                    base64String,
                    file.name
                ).then(function (content) {
                    tools.Util.getById('img_logo_empresa_name').setValue(content.data.data.nameimg); 
                    console.log(content.data.data.nameimg);
                });
            }
        }
    },
    onClickRemoverImgEmpresa: function () {
        let imgBusiness = tools.Util.getById('img_logo_empresa_name').getValue();
        tools.Util.getById('img_logo_empresa').setSrc('resources/images/not-available.png');
        if (imgBusiness) {
            let service = Ext.create('service-Empresa');
            idbusiness = tools.Util.getByName('idbusiness').getValue();
            filename = tools.Util.getById('img_logo_empresa_name').getValue();
            service.eliminarImagenEmpresa(
                idbusiness,
                filename
            ).then(function (content) {
                tools.Util.getById('img_logo_empresa_name').setValue('');
            });
        }
    },


    onClickGuardar: function () {
        me = this;
        let form = this.getView().getForm();

        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        _id = tools.Util.getById('idbusiness').getValue();

        form.submit({
            url: (_id != 0 ? Ext.manifest.api + 'business/' + _id.toString() : Ext.manifest.api + 'business'),
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
                me.onRenderPanel();
                tools.Util.setToast('Success', 'Actualizado con éxito.', 0);
            },
            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);

            }
        });
    },


    onKeyPressBuscarDocumento: function (obj, e, eOpts) {
        let service = Ext.create('serviceContacto');
        let tipo = tools.Util.getById('idtype_documentE').getSelection();
        if (e.getKey() == 13) {
            var view = tools.Util.getById('contentPanelEmpresa');
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
                            tools.Util.getById('namebusiness').setValue(
                                content.data.data[0]['apellidoPaterno'] +
                                ' ' +
                                content.data.data[0]['apellidoMaterno'] +
                                content.data.data[0]['nombres']);

                        } else if (content.data.data[0]['razonSocial'] != undefined) {
                            view.unmask();
                            tools.Util.getById('namebusiness').setValue(
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
        let tipo = tools.Util.getById('idtype_documentE').getSelection();
        let numero = tools.Util.getById('numberbusiness').getValue();
        let restype = this._validacion(tipo, numero);
        var view = tools.Util.getById('contentPanelEmpresa');
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
                        tools.Util.getById('namebusiness').setValue(
                            content.data.data[0]['apellidoPaterno'] +
                            ' ' +
                            content.data.data[0]['apellidoMaterno'] +
                            content.data.data[0]['nombres']);

                    } else if (content.data.data[0]['razonSocial'] != undefined) {
                        view.unmask();
                        tools.Util.getById('namebusiness').setValue(
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
