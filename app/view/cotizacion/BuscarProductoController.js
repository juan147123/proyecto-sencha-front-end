Ext.define('backoffice.view.cotizacion.BuscarProductoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cotizacion-buscarproducto',
    onChangeFiltro: function (radio, newValue, oldValue, eOpts) {
        let ra1 = tools.Util.getById('radio1').getValue().rb1;
        let ra2 = tools.Util.getById('radio2').getValue().rb2;
        let ra3 = tools.Util.getById('radio3').getValue().rb3;
        this._habilitarInput(ra1, ra2, ra3);
    },
    onClickClear: function () {

        rb2 = tools.Util.getById('radio2').getChecked();
        rb2[0].setValue(false);
        rb3 = tools.Util.getById('radio3').getChecked();
        rb3[0].setValue(false);

        tools.Util.getById('sph').setDisabled(false);
        tools.Util.getById('cyl').setDisabled(false);
        tools.Util.getById('add').setDisabled(false);
        tools.Util.getById('eje').setDisabled(false);
        tools.Util.getById('base').setDisabled(false);
        tools.Util.getById('material').setDisabled(false);
        tools.Util.getById('color').setDisabled(false);
        tools.Util.getById('tratamiento').setDisabled(false);

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
            tools.Util.getById('lblGenero').setHidden(false);
            tools.Util.getById('lblsph').setHidden(true);
            tools.Util.getById('genero').setHidden(false);
            tools.Util.getById('sph').setHidden(true);

            tools.Util.getById('sph').setDisabled(false);
            tools.Util.getById('cyl').setDisabled(false);
            tools.Util.getById('add').setDisabled(true);
            tools.Util.getById('eje').setDisabled(true);
            tools.Util.getById('base').setDisabled(true);
            tools.Util.getById('material').setDisabled(false);
            tools.Util.getById('color').setDisabled(false);
            tools.Util.getById('tratamiento').setDisabled(false);


        } else {
            tools.Util.getById('lblGenero').setHidden(true);
            tools.Util.getById('lblsph').setHidden(false);
            tools.Util.getById('genero').setHidden(true);
            tools.Util.getById('sph').setHidden(false);

            if (ra2 == 1 && ra3 == 1) {

                tools.Util.getById('sph').setDisabled(false);
                tools.Util.getById('cyl').setDisabled(false);
                tools.Util.getById('add').setDisabled(true);
                tools.Util.getById('eje').setDisabled(true);
                tools.Util.getById('base').setDisabled(true);
                tools.Util.getById('material').setDisabled(false);
                tools.Util.getById('color').setDisabled(false);
                tools.Util.getById('tratamiento').setDisabled(false);


            } else if (ra2 == 1 && ra3 == 2) {

                tools.Util.getById('sph').setDisabled(false);
                tools.Util.getById('cyl').setDisabled(true);
                tools.Util.getById('add').setDisabled(false);
                tools.Util.getById('eje').setDisabled(true);
                tools.Util.getById('base').setDisabled(true);
                tools.Util.getById('material').setDisabled(false);
                tools.Util.getById('color').setDisabled(false);
                tools.Util.getById('tratamiento').setDisabled(false);

            } else if (ra2 == 2 && ra3 == 1) {

                tools.Util.getById('sph').setDisabled(false);
                tools.Util.getById('cyl').setDisabled(false);
                tools.Util.getById('add').setDisabled(true);
                tools.Util.getById('eje').setDisabled(true);
                tools.Util.getById('base').setDisabled(false);
                tools.Util.getById('material').setDisabled(false);
                tools.Util.getById('color').setDisabled(false);
                tools.Util.getById('tratamiento').setDisabled(false);

            } else if (ra2 == 2 && ra3 == 2) {

                tools.Util.getById('sph').setDisabled(false);
                tools.Util.getById('cyl').setDisabled(false);
                tools.Util.getById('add').setDisabled(false);
                tools.Util.getById('eje').setDisabled(false);
                tools.Util.getById('base').setDisabled(false);
                tools.Util.getById('material').setDisabled(false);
                tools.Util.getById('color').setDisabled(false);
                tools.Util.getById('tratamiento').setDisabled(false);

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

        let ra1 = tools.Util.getById('radio1').getValue().rb1;
        let ra2 = tools.Util.getById('radio2').getValue().rb2;
        let ra3 = tools.Util.getById('radio3').getValue().rb3;

        if (ra1 == 2 && ra2 == undefined && ra3 == undefined) {

            let err3 = [];
            let genero = tools.Util.getById('genero').getValue();
            let material = tools.Util.getById('material').getValue();
            let color = tools.Util.getById('color').getValue();
            let tratamiento = tools.Util.getById('tratamiento').getValue();

            if (genero == null) { err3.push("No ha seleccionado el GENERO") }
            if (material == null) { err3.push("No ingreso el MATERIAL"); }
            if (color == null) { err3.push("No ingreso el COLOR"); }
            if (tratamiento == null) { err3.push("No ingreso el TRATAMIENTO"); }


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
            cyl = tools.Util.getById('cyl').getValue();
            let store = tools.Util.getById('dgvFiltro').getStore();
            store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
            store = tools.Util.setHeaderAuth(store);
            store.load({
                params: {
                    sph: null,
                    cyl: cyl,
                    add: null,
                    idmaterial: material,
                    idcolor: color,
                    idtreatment: tratamiento,
                    iduse_mount: genero
                },
            });

        } else {
            tools.Util.getById('lblGenero').setHidden(true);
            tools.Util.getById('lblsph').setHidden(false);
            tools.Util.getById('genero').setHidden(true);
            tools.Util.getById('sph').setHidden(false);

            if (ra2 == 1 && ra3 == 1) {

                let err = me._valSph(tools.Util.getById('sph'));
                if (err.length) {
                    let html = "<ul>";
                    for (let index = 0; index < err.length; index++) {
                        html += "<li>" + err[index] + "</li>";
                    }
                    html += "</ul>";

                    tools.Util.setToast("", html, 1);
                    return 0;
                }

                let err2 = me._valCyl(tools.Util.getById('cyl'));
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
                let material = tools.Util.getById('material').getValue();
                let color = tools.Util.getById('color').getValue();
                let tratamiento = tools.Util.getById('tratamiento').getValue();

                if (material == null) { err3.push("No ingreso el MATERIAL"); }
                if (color == null) { err3.push("No ingreso el COLOR"); }
                if (tratamiento == null) { err3.push("No ingreso el TRATAMIENTO"); }

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
                cyl = tools.Util.getById('cyl').getValue();
                sph = tools.Util.getById('sph').getValue();
                let store = tools.Util.getById('dgvFiltro').getStore();
                store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
                store = tools.Util.setHeaderAuth(store);
                store.load({
                    params: {
                        sph: sph,
                        cyl: cyl,
                        add: null,
                        idmaterial: material,
                        idcolor: color,
                        idtreatment: tratamiento,
                        iduse_mount: null
                    },
                });
            } else if (ra2 == 1 && ra3 == 2) {

                let err = me._valSph(tools.Util.getById('sph'));
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
                let material = tools.Util.getById('material').getValue();
                let color = tools.Util.getById('color').getValue();
                let tratamiento = tools.Util.getById('tratamiento').getValue();

                if (material == null) { err3.push("No ingreso el MATERIAL"); }
                if (color == null) { err3.push("No ingreso el COLOR"); }
                if (tratamiento == null) { err3.push("No ingreso el TRATAMIENTO"); }

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
                sph = tools.Util.getById('sph').getValue();
                add = tools.Util.getById('add').getValue();
                let store = tools.Util.getById('dgvFiltro').getStore();
                store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
                store = tools.Util.setHeaderAuth(store);
                store.load({
                    params: {
                        sph: sph,
                        cyl: null,
                        add: add,
                        idmaterial: material,
                        idcolor: color,
                        idtreatment: tratamiento,
                        iduse_mount: null
                    },
                });

            } else if (ra2 == 2 && ra3 == 1) {

                let err3 = [];
                let material = tools.Util.getById('material').getValue();
                let color = tools.Util.getById('color').getValue();
                let tratamiento = tools.Util.getById('tratamiento').getValue();

                if (material == null) { err3.push("No ingreso el MATERIAL"); }
                if (color == null) { err3.push("No ingreso el COLOR"); }
                if (tratamiento == null) { err3.push("No ingreso el TRATAMIENTO"); }

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
                sph = tools.Util.getById('sph').getValue();
                cyl = tools.Util.getById('cyl').getValue();
                add = tools.Util.getById('add').getValue();
                let store = tools.Util.getById('dgvFiltro').getStore();
                store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
                store = tools.Util.setHeaderAuth(store);
                store.load({
                    params: {
                        sph: sph,
                        cyl: cyl,
                        add: null,
                        idmaterial: material,
                        idcolor: color,
                        idtreatment: tratamiento,
                        iduse_mount: null
                    },
                });
            } else if (ra2 == 2 && ra3 == 2) {

                let add = tools.Util.getById('add').getValue();
                let material = tools.Util.getById('material').getValue();
                let color = tools.Util.getById('color').getValue();
                let tratamiento = tools.Util.getById('tratamiento').getValue();

                let err3 = [];

                if (add == null) { err3.push("No ingreso el valor ADD"); }
                if (material == null) { err3.push("No ingreso el MATERIAL"); }
                if (color == null) { err3.push("No ingreso el COLOR"); }
                if (tratamiento == null) { err3.push("No ingreso el TRATAMIENTO"); }


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
                sph = tools.Util.getById('sph').getValue();
                cyl = tools.Util.getById('cyl').getValue();
                add = tools.Util.getById('add').getValue();
                let store = tools.Util.getById('dgvFiltro').getStore();
                store.getProxy().url = Ext.manifest.api + 'filtersalesproducts'
                store = tools.Util.setHeaderAuth(store);
                store.load({
                    params: {
                        sph: sph,
                        cyl: cyl,
                        add: add,
                        idmaterial: material,
                        idcolor: color,
                        idtreatment: tratamiento,
                        iduse_mount: null
                    },
                });
            } //else if(ra1 == 2 && )
        }
    },
    onRowClickProduct:function(obj, record, element, rowIndex, e, eOpts){
        me = this;
        let grid  = tools.Util.getById('dgvDetCotizacion');
        let store = grid.getStore();
        let nombreProd = record.get('description');
        let add = record.get('add');
    
        var sw = store.findRecord('descripcion',nombreProd);


        let item  = {
            idproduct   :  record.get('idproduct'),
            descripcion : nombreProd,
            add         : add,
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
        var subtotal=0;
        var igv=0;
        var total=0;

        store.each(function(record){
            subtotal+=record.get('total');
        });
        
        igv = subtotal - (subtotal * tools.Util.getIgv());
        total = igv + subtotal;

        tools.Util.getById('subtotal').setValue( Ext.Number.toFixed(subtotal,2) );
        tools.Util.getById('igv').setValue( Ext.Number.toFixed(igv,2) );
        tools.Util.getById('total').setValue( Ext.Number.toFixed(total,2) );
        delanto = tools.Util.getById('delanto').getValue();
        saldo = total - delanto;
        tools.Util.getById('saldo').setValue( Ext.Number.toFixed(saldo,2) );

    }

});
