Ext.define('backoffice.view.venta.BuscarProductoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.venta-buscarproducto',
    onChangeFiltro: function (radio, newValue, oldValue, eOpts) {
        let ra1 = tools.Util.getById('ratio1').getValue().rb1;
        let ra2 = tools.Util.getById('ratio2').getValue().rb2;
        let ra3 = tools.Util.getById('ratio3').getValue().rb3;
        this._habilitarInput(ra1, ra2, ra3);
    },
    onClickClear: function () {

        rb2 = tools.Util.getById('ratio2').getChecked();
        rb2[0].setValue(false);
        rb3 = tools.Util.getById('ratio3').getChecked();
        rb3[0].setValue(false);

        tools.Util.getById('sph2').setDisabled(false);
        tools.Util.getById('cyl2').setDisabled(false);
        tools.Util.getById('add2').setDisabled(false);
        tools.Util.getById('eje2').setDisabled(false);
        tools.Util.getById('base2').setDisabled(false);
        tools.Util.getById('material2').setDisabled(false);
        tools.Util.getById('color2').setDisabled(false);
        tools.Util.getById('tratamiento2').setDisabled(false);

    },
    _habilitarInput: function (ra1, ra2, ra3) {
        /**
         * ra1 
         *  - lentes (1)
         *  - monturas (2)
         * 
         * ra2
         *  - stock (1)
         *  - fabricacion (2)
         * 
         * ra3
         *  - monofocales (1)
         *  - bifocales (2)
         */

        if (ra1 == 2 && ra2 == undefined && ra3 == undefined) {

            // only monturas
            tools.Util.getById('lblGenero2').setHidden(false);
            tools.Util.getById('lblsph2').setHidden(true);
            tools.Util.getById('genero2').setHidden(false);
            tools.Util.getById('sph2').setHidden(true);

            tools.Util.getById('sph2').setDisabled(false);
            tools.Util.getById('cyl2').setDisabled(false);
            tools.Util.getById('add2').setDisabled(true);
            tools.Util.getById('eje2').setDisabled(true);
            tools.Util.getById('base2').setDisabled(true);
            tools.Util.getById('material2').setDisabled(false);
            tools.Util.getById('color2').setDisabled(false);
            tools.Util.getById('tratamiento2').setDisabled(false);


        } else {
            tools.Util.getById('lblGenero2').setHidden(true);
            tools.Util.getById('lblsph2').setHidden(false);
            tools.Util.getById('genero2').setHidden(true);
            tools.Util.getById('sph2').setHidden(false);

            if (ra2 == 1 && ra3 == 1) {

                tools.Util.getById('sph2').setDisabled(false);
                tools.Util.getById('cyl2').setDisabled(false);
                tools.Util.getById('add2').setDisabled(true);
                tools.Util.getById('eje2').setDisabled(true);
                tools.Util.getById('base2').setDisabled(true);
                tools.Util.getById('material2').setDisabled(false);
                tools.Util.getById('color2').setDisabled(false);
                tools.Util.getById('tratamiento2').setDisabled(false);


            } else if (ra2 == 1 && ra3 == 2) {

                tools.Util.getById('sph2').setDisabled(false);
                tools.Util.getById('cyl2').setDisabled(true);
                tools.Util.getById('add2').setDisabled(false);
                tools.Util.getById('eje2').setDisabled(true);
                tools.Util.getById('base2').setDisabled(true);
                tools.Util.getById('material2').setDisabled(false);
                tools.Util.getById('color2').setDisabled(false);
                tools.Util.getById('tratamiento2').setDisabled(false);

            } else if (ra2 == 2 && ra3 == 1) {

                tools.Util.getById('sph2').setDisabled(false);
                tools.Util.getById('cyl2').setDisabled(false);
                tools.Util.getById('add2').setDisabled(true);
                tools.Util.getById('eje2').setDisabled(true);
                tools.Util.getById('base2').setDisabled(false);
                tools.Util.getById('material2').setDisabled(false);
                tools.Util.getById('color2').setDisabled(false);
                tools.Util.getById('tratamiento2').setDisabled(false);

            } else if (ra2 == 2 && ra3 == 2) {

                tools.Util.getById('sph2').setDisabled(false);
                tools.Util.getById('cyl2').setDisabled(false);
                tools.Util.getById('add2').setDisabled(false);
                tools.Util.getById('eje2').setDisabled(false);
                tools.Util.getById('base2').setDisabled(false);
                tools.Util.getById('material2').setDisabled(false);
                tools.Util.getById('color2').setDisabled(false);
                tools.Util.getById('tratamiento2').setDisabled(false);

            } //else if(ra1 == 2 && )
        }


    },
    _valSph: function (obj) {
        let val = obj.getValue();
        let msg = [];

        if (val == '' || val.length == 0) {
            msg.push("No ha ingresado un valor al SPH");
        } else if (parseInt(val.substr(0, 1)) >= 0) {
            msg.push("No ha ingreado el simbolo [ + o - ] en SPH");
        } else if (obj.isValid() == false) {
            msg.push("El valor SPH tiene que ser un valor de 2 decimales");
        } else if (val.indexOf(".") == -1) {
            msg.push("El valor SPH, tiene que ser un decimal");
        }

        return msg;
    },
    _valCyl: function (obj) {
        let val = obj.getValue();
        let msg = [];

        if (val == '' || val.length == 0) {
            msg.push("No ha ingresado un valor al CYL");
        } else if (parseInt(val.substr(0, 1)) >= 0) {
            msg.push("No ha ingreado el simbolo [ - ] en CYL");
        } else if (obj.isValid() == false) {
            msg.push("El valor CYL tiene que ser un valor de 2 decimales");
        } else if (val.indexOf(".") == -1) {
            msg.push("El valor CYL, tiene que ser un decimal");
        }

        return msg;
    },
    onClickValidarValores: function (b) {

        me = this;

        let ra1 = tools.Util.getById('ratio1').getValue().rb1;
        let ra2 = tools.Util.getById('ratio2').getValue().rb2;
        let ra3 = tools.Util.getById('ratio3').getValue().rb3;

        if (ra1 == 2 && ra2 == undefined && ra3 == undefined) {

            let err3 = [];
            let genero2 = tools.Util.getById('genero2').getValue();
            let material2 = tools.Util.getById('material2').getValue();
            let color2 = tools.Util.getById('color2').getValue();
            let tratamiento2 = tools.Util.getById('tratamiento2').getValue();

            if (genero2 == null) { err3.push("No ha seleccionado el GENERO") }
            if (material2 == null) { err3.push("No ingreso el MATERIAL"); }
            if (color2 == null) { err3.push("No ingreso el COLOR"); }
            if (tratamiento2 == null) { err3.push("No ingreso el TRATAMIENTO"); }


            if (err3.length) {
                let html = "<ul>";
                for (let index = 0; index < err3.length; index++) {
                    html += "<li>" + err3[index] + "</li>";
                }
                html += "</ul>";

                tools.Util.setToast("", html, 1);
                return 0;
            }
            /**
             * BLOQUE API SEÑOR KAPIL
             */
            cyl2 = tools.Util.getById('cyl2').getValue();
            let store = tools.Util.getById('dgvFiltro').getStore();
            store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
            store = tools.Util.setHeaderAuth(store);
            store.load({
                params: {
                    sph: null,
                    cyl: cyl2,
                    add: null,
                    idmaterial: material2,
                    idcolor: color2,
                    idtreatment: tratamiento2,
                    iduse_mount: genero2
                },
            });

        } else {
            tools.Util.getById('lblGenero2').setHidden(true);
            tools.Util.getById('lblsph2').setHidden(false);
            tools.Util.getById('genero2').setHidden(true);
            tools.Util.getById('sph2').setHidden(false);

            if (ra2 == 1 && ra3 == 1) {

                let err = me._valSph(tools.Util.getById('sph2'));
                if (err.length) {
                    let html = "<ul>";
                    for (let index = 0; index < err.length; index++) {
                        html += "<li>" + err[index] + "</li>";
                    }
                    html += "</ul>";

                    tools.Util.setToast("", html, 1);
                    return 0;
                }

                let err2 = me._valCyl(tools.Util.getById('cyl2'));
                if (err2.length) {
                    let html = "<ul>";
                    for (let index = 0; index < err2.length; index++) {
                        html += "<li>" + err2[index] + "</li>";
                    }
                    html += "</ul>";

                    tools.Util.setToast("", html, 1);
                    return 0;
                }

                let err3 = [];
                let material2 = tools.Util.getById('material2').getValue();
                let color2 = tools.Util.getById('color2').getValue();
                let tratamiento2 = tools.Util.getById('tratamiento2').getValue();

                if (material2 == null) { err3.push("No ingreso el MATERIAL"); }
                if (color2 == null) { err3.push("No ingreso el COLOR"); }
                if (tratamiento2 == null) { err3.push("No ingreso el TRATAMIENTO"); }

                if (err3.length) {
                    let html = "<ul>";
                    for (let index = 0; index < err3.length; index++) {
                        html += "<li>" + err3[index] + "</li>";
                    }
                    html += "</ul>";

                    tools.Util.setToast("", html, 1);
                    return 0;
                }
                /**
                 * BLOQUE API SEÑOR KAPIL
                 */
                cyl2 = tools.Util.getById('cyl2').getValue();
                sph2 = tools.Util.getById('sph2').getValue();
                let store = tools.Util.getById('dgvFiltro').getStore();
                store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
                store = tools.Util.setHeaderAuth(store);
                store.load({
                    params: {
                        sph: sph2,
                        cyl: cyl2,
                        add: null,
                        idmaterial: material2,
                        idcolor: color2,
                        idtreatment: tratamiento2,
                        iduse_mount: null
                    },
                });
            } else if (ra2 == 1 && ra3 == 2) {

                let err = me._valSph(tools.Util.getById('sph2'));
                if (err.length) {
                    let html = "<ul>";
                    for (let index = 0; index < err.length; index++) {
                        html += "<li>" + err[index] + "</li>";
                    }
                    html += "</ul>";

                    tools.Util.setToast("", html, 1);
                    return 0;
                }

                let err3 = [];
                let material2 = tools.Util.getById('material2').getValue();
                let color2 = tools.Util.getById('color2').getValue();
                let tratamiento2 = tools.Util.getById('tratamiento2').getValue();

                if (material2 == null) { err3.push("No ingreso el MATERIAL"); }
                if (color2 == null) { err3.push("No ingreso el COLOR"); }
                if (tratamiento2 == null) { err3.push("No ingreso el TRATAMIENTO"); }

                if (err3.length) {
                    let html = "<ul>";
                    for (let index = 0; index < err3.length; index++) {
                        html += "<li>" + err3[index] + "</li>";
                    }
                    html += "</ul>";

                    tools.Util.setToast("", html, 1);
                    return 0;
                }
                /**
                 * BLOQUE API SEÑOR KAPIL
                 */
                sph2 = tools.Util.getById('sph2').getValue();
                add2 = tools.Util.getById('add2').getValue();
                let store = tools.Util.getById('dgvFiltro').getStore();
                store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
                store = tools.Util.setHeaderAuth(store);
                store.load({
                    params: {
                        sph: sph2,
                        cyl: null,
                        add: add2,
                        idmaterial: material2,
                        idcolor: color2,
                        idtreatment: tratamiento2,
                        iduse_mount: null
                    },
                });

            } else if (ra2 == 2 && ra3 == 1) {

                let err3 = [];
                let material2 = tools.Util.getById('material2').getValue();
                let color2 = tools.Util.getById('color2').getValue();
                let tratamiento2 = tools.Util.getById('tratamiento2').getValue();

                if (material2 == null) { err3.push("No ingreso el MATERIAL"); }
                if (color2 == null) { err3.push("No ingreso el COLOR"); }
                if (tratamiento2 == null) { err3.push("No ingreso el TRATAMIENTO"); }

                if (err3.length) {
                    let html = "<ul>";
                    for (let index = 0; index < err3.length; index++) {
                        html += "<li>" + err3[index] + "</li>";
                    }
                    html += "</ul>";

                    tools.Util.setToast("", html, 1);
                    return 0;
                }
                /**
                 * BLOQUE API SEÑOR KAPIL
                 */
                sph2 = tools.Util.getById('sph2').getValue();
                cyl2 = tools.Util.getById('cyl2').getValue();
                add2 = tools.Util.getById('add2').getValue();
                let store = tools.Util.getById('dgvFiltro').getStore();
                store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
                store = tools.Util.setHeaderAuth(store);
                store.load({
                    params: {
                        sph: sph2,
                        cyl: cyl2,
                        add: null,
                        idmaterial: material2,
                        idcolor: color2,
                        idtreatment: tratamiento2,
                        iduse_mount: null
                    },
                });
            } else if (ra2 == 2 && ra3 == 2) {

                let add2 = tools.Util.getById('add2').getValue();
                let material2 = tools.Util.getById('material2').getValue();
                let color2 = tools.Util.getById('color2').getValue();
                let tratamiento2 = tools.Util.getById('tratamiento2').getValue();

                let err3 = [];

                if (add2 == null) { err3.push("No ingreso el valor ADD"); }
                if (material2 == null) { err3.push("No ingreso el MATERIAL"); }
                if (color2 == null) { err3.push("No ingreso el COLOR"); }
                if (tratamiento2 == null) { err3.push("No ingreso el TRATAMIENTO"); }


                if (err3.length) {
                    let html = "<ul>";
                    for (let index = 0; index < err3.length; index++) {
                        html += "<li>" + err3[index] + "</li>";
                    }
                    html += "</ul>";

                    tools.Util.setToast("", html, 1);
                    return 0;
                }
                /**
                 * BLOQUE API SEÑOR KAPIL
                 */
                sph2 = tools.Util.getById('sph2').getValue();
                cyl2 = tools.Util.getById('cyl2').getValue();
                add2 = tools.Util.getById('add2').getValue();
                let store = tools.Util.getById('dgvFiltro').getStore();
                store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
                store = tools.Util.setHeaderAuth(store);
                store.load({
                    params: {
                        sph: sph2,
                        cyl: cyl2,
                        add: add2,
                        idmaterial: material2,
                        idcolor: color2,
                        idtreatment: tratamiento2,
                        iduse_mount: null
                    },
                });
            } //else if(ra1 == 2 && )
        }
    },
    onRowClickProduct:function(obj, record, element, rowIndex, e, eOpts){
        me = this;
        let grid  = tools.Util.getById('dgvDetVentas');
        let store = grid.getStore();
        let nombreProd = record.get('description');
        let add2 = record.get('add');
    
        var sw = store.findRecord('descripcion',nombreProd);

        let item  = {
            idproduct   :  record.get('idproduct'),
            descripcion : nombreProd,
            add         : add2,
            cantidad    : 1,
            precio      : Ext.Number.toFixed(record.get('price_local'),2),
            impuesto    : Ext.Number.toFixed(record.get('price_local') * tools.Util.getIgv(),2)  ,
            total       : Ext.Number.toFixed(record.get('price_local') * 1,2),
        };
        store.insert(store.getCount()+ 1,item);
        grid.getView().refresh();
        me._calcularTotales(store);
    },
    _calcularTotales:function(store){
        var subtotal2=0;
        var igv2=0;
        var total2=0;

        store.each(function(record){
            subtotal2+=record.get('total');
        });
        
        igv2 = (subtotal2 * tools.Util.getIgv());
        total2 = igv2 + subtotal2;

        tools.Util.getById('subtotal2F').setValue( Ext.Number.toFixed(subtotal2,2) );
        tools.Util.getById('igv2F').setValue( Ext.Number.toFixed(igv2,2) );
        tools.Util.getById('total2F').setValue( Ext.Number.toFixed(total2,2) );
        delanto = tools.Util.getById('delanto2F').getValue();
        saldo = total2 - delanto;
        tools.Util.getById('saldo2F').setValue( Ext.Number.toFixed(saldo,2) );

    }

});
