Ext.define('tools.Util', {
    singleton: true,
    requires: ['Ext.window.Toast'],
    vistas: '',
    stores: '',
    igv   : 0.18,
    test: function () {
        alert("test")
    },
    setIgv:function(v){
        this.igv = v;
    },
    getIgv:function(){
        return this.igv;
    },
    setVistas: function (ruta) {
        this.vistas = ruta;
    },
    getVistas: function (ruta) {
        return this.vistas;
    },
    setStores: function (ruta) {
        this.stores = ruta;
    },
    getStores: function (ruta) {
        return this.stores;
    },
    getById: function (object) {
        o = Ext.ComponentQuery.query('#' + object)[0];
        if (o)
            return o;
        else
            return null;
    },
    getByName: function (object) {
        o = Ext.ComponentQuery.query('[name=' + object + ']')[0];
        if (o)
            return o;
        else
            return null;
    },
    /* getCreateStore:function(object){
         s = Ext.create(object);
         return s;
     },*/
    getStoreById: function (object) {
        o = Ext.data.StoreManager.lookup(object);
        if (o)
            return o;
        else
            return null;
    },
    getCreateStore: function (object) {
        o = Ext.create(this.getStores() + '.' + object);
        if (o)
            return o;
        else
            return null;
    },
    /**
     * 
     * @param { Store con el proxy y la data } storeData 
     * @param { Crea un store en blanco pero con la data} storeName 
     * @returns 
     */
    setLoadEnableData:function(storeData,storeName){
        let _storeData  = tools.Util.getStoreById(storeData); 
        let _store      = tools.Util.getCreateStore(storeName);

        _storeData.load({
            scope: this,
            callback: function(records, operation, success) {
                Ext.each(records,function(rec,i){
                    if(rec.data.enable==1){
                        _store.add(rec);
                    }
                });
            }
        });
        return _store;
    },
    setToast: function (title, message,error) {
       /* Ext.toast({
            html: message,
           // title: title,
            width: 350,
            height: 100,
            align: 'tr',
            timeout: 100000,
            ui : 'login',
           // iconCls: 'x-fa fa-question-circle',
            animateShadow:'true',
            //layout: 'fit',
            bodyStyle: {
                background: '#c353a1',
                padding: '10px',
                //color : '#ffffff'
            }
        });*/

        let html='';
        let backcolor='';
        if(error==1){
            html="<table><tr><td><i class='x-fa fa-frown-o fa-3x'></i></td><td style='color:#884F55;'>"+message+"</td></tr></table>";
            backcolor='#F2DEDF';
        }else{
            html="<table><tr><td><i class='x-fa fa-send fa-3x'></i></td><td style='color:#819778;'>"+message+"</td></tr></table>";
            backcolor='#DEF0D8';
        }


        Ext.toast({
            html: html,
            width: 350,
            align: 'tr',
            timeout: 100000,
            ui : 'login',
            animateShadow:'true',
            bodyStyle: {
                background: backcolor,
                padding: '10px',
            }
        });

    },
    getAnios: function () {
        s = Ext.create('Ext.data.ArrayStore', {
            storeId: 'stanios',
            fields: [
                { name: 'id', type: 'int' },
                { name: 'anio', type: 'int' }
            ]
        });
        i =2020 ;
        f = new Date();
        f = f.getFullYear();
        for (i; i <= f; i++) {
            s.add({
                id: i,
                anio: i
            });
        }
        return s;
    },
    getMeses: function () {
        s = Ext.create('Ext.data.Store', {
            storeId: 'stmeses',
            fields: [
                { name: 'id', type: 'int' },
                { name: 'mes', type: 'string' }
            ],
            data: {
                items: [
                    { id: 1, mes: 'ENERO' },
                    { id: 2, mes: 'FEBRERO' },
                    { id: 3, mes: 'MARZO' },
                    { id: 4, mes: 'ABRIL' },
                    { id: 5, mes: 'MAYO' },
                    { id: 6, mes: 'JUNIO' },
                    { id: 7, mes: 'JULIO' },
                    { id: 8, mes: 'AGOSTO' },
                    { id: 9, mes: 'SEPTIEMBRE' },
                    { id: 10, mes: 'OCTUBRE' },
                    { id: 11, mes: 'NOVIEMBRE' },
                    { id: 12, mes: 'DICIEMBRE' }
                ]
            },
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            }
        });
        return s;
    },
    getNombreMeses: function (mes) {
        switch (mes){
            case 1: return 'ENERO'; break
            case 2: return 'FEBRERO'; break
            case 3: return 'MARZO';break
            case 4: return 'ABRIL';break
            case 5: return 'MAYO';break
            case 6: return 'JUNIO';break
            case 7: return 'JULIO';break
            case 8: return 'AGOSTO';break
            case 9: return 'SEPTIEMBRE';break
            case 10: return 'OCTUBRE';break
            case 11: return 'NOVIEMBRE';break
            case 12: return 'DICIEMBRE';break
        }
    },
    getInitParamUrl: function () {
        r = location.search.substring(1);
        if (r)
            return Ext.Object.fromQueryString(r);
        else
            return null;
    },
    getAjaxEliminarRegistro: function (d, url, g) {
        me = this;
        var data = null;
        Ext.MessageBox.confirm('Admin Web Taxi', 'Eliminar el registro seleccionado', function (btn) {
            if (btn == 'yes') {
                Ext.Ajax.request({
                    url: url,
                    params: d,
                    async: false,
                    success: function (response) {
                        data = Ext.JSON.decode(response.responseText);
                        me.setToast("Taxi Web Admin", 'Registro Eliminado');
                        g.getStore().reload();
                    }
                });


            } else {
                return null;
            }
        });

    },
    getAjaxOnly: function (d, url, method) {
        me = this;
        var data = null;
        Ext.Ajax.request({
            url: url,
            params: d,
            method: method,
            async: false,
            cors: true,
            success: function (response) {
              data = Ext.JSON.decode(response.responseText);
            }
        });
        return data;
    },
    getAjaxOnlyToken: function (d, url, method,token) {
        me = this;
        let data = null;
        Ext.Ajax.request({
            url: url,
            jsonData: d,
            method: method,
            async: false,
            cors: true,
            defaultHeaders: {
                'Authorization': token,
                'Content-Type': 'application/json;charset=utf-8'
            },
            success: function(response, opts) {
                data = Ext.JSON.decode(response.responseText);
            },
       
            failure: function(response, opts) {
                data = Ext.JSON.decode(response.responseText);
            }
        });
        return data;
       
    },
    getAjax: function (d, url, grid) {
        me = this;

        Ext.Ajax.request({
            url: url,
            params: d,

            success: function (response) {
                var data = Ext.JSON.decode(response.responseText);
                if (data.error > 0) {
                    if (grid) {
                        grid.getStore().reload();
                    }
                    return 0;
                } else {
                    me.setToast("CHARLOTTE", data.msg);
                    return 1;
                }
            }
        });
    },
    getAjaxWindow: function (d, url, grid, window) {
        me = this;
        if (window) {
            m = Ext.create('Ext.LoadMask', {
                target: window,
                msg: "Espere por favor ..."
            });
            m.show();
        }
        Ext.Ajax.request({
            url: url,
            params: d,
            success: function (response) {
                var data = Ext.JSON.decode(response.responseText);
                if (data.error != 0) {
                    if (grid) {
                        grid.getStore().reload();
                    }
                    if (window)
                        m.destroy();

                    me.setToast("CHARLOTTE", data.msg);
                    window.close();
                    return 1;

                } else {
                    if (window)
                        m.destroy();
                    window.close();
                    me.setToast("CHARLOTTE", data.msg);
                    return 0;
                }
            }
        });
    },
    getAjaxReload: function (d, url, grid) {
        var x = 0;
        Ext.Ajax.request({
            url: url,
            params: d,
            success: function (response) {
                var data = Ext.JSON.decode(response.responseText);
                if (data.error != 0) {
                    Ext.Ajax.request({
                        url: webapptramite.Rutas.dietaListar,
                        params: {
                            fecha: Ext.Date.format(fecha, 'd/m/Y')
                        },
                        success: function (response) {
                            var data = Ext.JSON.decode(response.responseText);

                            grid.getStore().removeAll();
                            if (data.data) {
                                Ext.each(data.data, function (r) {
                                    c = {
                                        'iddieta': r.iddieta,
                                        'fecha': r.fecha,
                                        'desayuno': r.desayuno,
                                        'almuerzo': r.almuerzo,
                                        'cena': r.cena,
                                        'idtipodieta': r.idtipodieta,
                                        'tipodieta': r.tipodieta,
                                        'idsubtipodieta': r.idsubtipodieta,
                                        'subtipodieta': r.subtipodieta
                                    };
                                    grid.getStore().insert(0, c);
                                    //g.getView().refresh();          
                                });

                            }

                        }
                    });


                }
            }
        });
        return x;
    },
    getWOpenPrint: function (url, title) {
        w = window.open(url, title, "width=500,height=650");
    },
    getWOpenDownload: function (url) {
        w = window.open(url, "_blank");
    },
    getCreateWidget: function (f) {
        return Ext.widget(f);
    },
    getAjaxCargarDieta: function (d, url, grid) {
        var x = 0;
        Ext.Ajax.request({
            url: url,
            params: d,
            success: function (response) {
                var data = Ext.JSON.decode(response.responseText);
                if (data.error != 0) {
                    grid.getStore().removeAll();
                    if (data.data) {
                        Ext.each(data.data, function (r) {
                            c = {
                                'id': r.idconcepto,
                                'descripcion': r.descripcion
                            };
                            grid.getStore().insert(0, c);
                            //g.getView().refresh();          
                        });
                    }
                }
            }
        });
        return x;
    },
    getWindowPopup: function (filename, objeto) {

        if (objeto) {
            w = Ext.create(this.vistas + '.' + filename, objeto);
        } else {
            w = Ext.create(this.vistas + '.' + filename);
        }
        w.modal = true;
        w.show();
        return true;
    },
    getWindowPopupNoModal: function (filename) {
        w = Ext.create(this.vistas + '.' + filename);
        w.modal = false;
        w.show();
        return true;
    },
    getWindowPopupcloseModal: function (filename) {
        w = Ext.hide(this.vistas + '.' + filename);
        w.modal = true;
        w.close();
        return true;
    },
    getParseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    },
    getPreffixCrearNombre(file) {
        var pp = moment().format('YYYYMMDDhhmmss').toString() + '_';
        return pp;
    },



    /******
     * Mapas
     * 
     */
    getMap: function (object) {
        o = Ext.ComponentQuery.query('#' + object)[0].getMap();
        if (o)
            return o;
        else
            return null;
    },
    removerCapaMapa: function (map, ncapa) {
        let layersToRemove = [];
        map.getLayers().forEach(function (layer) {
            if (layer.get('name') == ncapa) {
                layersToRemove.push(layer);
            }
        });

        let len = layersToRemove.length;
        for (var i = 0; i < len; i++) {
            map.removeLayer(layersToRemove[i]);
        }
    },
    addMarkerMapaCar: function (map, lat, lon, cc) {
        //this.removerCapaMapa(map,'punto');
        var vl = new ol.layer.Vector({
            source: new ol.source.Vector(),
            name: "punto"
        });
        let vs = vl.getSource();
        let marker;
        if (cc) {
            //Crea un punto de una geometria de la base de datos
            marker = new ol.Feature(new ol.geom.Point(cc));
        } else {
            marker = new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.transform([lat, lon], 'EPSG:4326', 'EPSG:3857')
                ),
                population: 4000,
                rainfall: 500,
            });
        }
        let zIndex = 1;
        marker.setStyle(new ol.style.Style({
            image: new ol.style.Icon(({
                anchor: [0.5, 36],
                anchorXUnits: "fraction",
                anchorYUnits: "pixels",
                opacity: 1,
                src: 'resources/images/taxi.png',
                zIndex: zIndex
            })),
            zIndex: zIndex
        }));
        if (!cc) {
            map.getView().setCenter(ol.proj.transform(
                [lat, lon]
                , 'EPSG:4326', 'EPSG:3857'));
             map.getView().setZoom(18);
        }
        vs.addFeature(marker);
        map.addLayer(vl);
    },
    addMarkerMapa: function (map, lat, lon, cc) {
        var vl = new ol.layer.Vector({
            source: new ol.source.Vector(),
            name: "punto"
        });
        let vs = vl.getSource();
        let marker;
        if (cc) {
            //Crea un punto de una geometria de la base de datos
            marker = new ol.Feature(new ol.geom.Point(cc));
        } else {
            marker = new ol.Feature({
                geometry: new ol.geom.Point(
                    ol.proj.transform([lat, lon], 'EPSG:4326', 'EPSG:3857')
                ),
                population: 4000,
                rainfall: 500,
            });
        }
        let zIndex = 1;
        marker.setStyle(new ol.style.Style({
           /* image: new ol.style.Icon(({
                anchor: [0.5, 36],
                anchorXUnits: "fraction",
                anchorYUnits: "pixels",
                opacity: 1,
                src: 'resources/images/taxi.svg',
                zIndex: zIndex
            })),*/
            image: new ol.style.Icon({
                src: 'http://www.williambuck.com/portals/0/Skins/WilliamBuck2014/images/location-icon.svg'
            }),
            zIndex: zIndex
        }));
        if (!cc) {
            map.getView().setCenter(ol.proj.transform(
                [lat, lon]
                , 'EPSG:4326', 'EPSG:3857'));
            map.getView().setZoom(18);
        }
        vs.addFeature(marker);
        map.addLayer(vl);
    },
    getDataLoteUrl(url) {
        var metaData;
        Ext.Ajax.request({
            url: url,
            async: false,
            success: function (response) {
                data = Ext.JSON.decode(response.responseText);
                metaData = data.features[0].properties;
            }
        });
        return metaData;
    },
    loadDataLote(url) {
        metaData = { status: false, data: [] };
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                var jsonObject = JSON.parse(this.response);
                for (i in jsonObject) {
                    var val = jsonObject[i];
                    if (i == "features") {
                        for (j in val) {
                            var geojsonx = val[j];
                            var properties = geojsonx.properties;
                            metaData.data.push(properties);
                            console.log(metaData);
                            //ptool = webapptramite.tools.Tool.getById('tools');
                            //ptool.setActiveItem(2);

                            /*st = webapptramite.tools.Tool.getById('dgvlotedatos').getStore();
                            st.load({
                            params : {
                                sector :metaData.data[0].cod_sector ,
                                mz     :metaData.data[0].cod_mz ,
                                lote   :metaData.data[0].cod_lote 
                            }
                            });*/



                        }
                    }
                }
                if (metaData.data.length > 0) {
                    metaData.status = true;
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    },
    getLayerByName(value, map) {
        var layer;
        var found = map.getLayers().getArray().some(function (each) {

            //discard layers other than ol.layer.Vector
            if (each instanceof ol.layer.Vector) {
                console.log(each.get("name"));
                layer = each.get('name') === value ? each : undefined;
            }
            alert("xxx");
            if (layer) return true;
            return false;
        });
        return layer ? layer : false;
    },
    setVisibilityLayer(element, map, visible) {
        var layer = this.getLayerByName(element, map);
    },

    //Rutas de imagenes
    getNoImg: function () {
        return 'resources/images/not-available.png';
    },
    //Generar UUID
    getGenerateUUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    },

    getLoadMask(message,view){
        var myMask = new Ext.LoadMask({
            msg    : message,
            target : view
            
        });
        return myMask;
    },

    

    getIpPublic:function(){
        return new Ext.Promise(function (resolve, reject) {

            axios('https://api.ipify.org')
            .then(result=>{
                
                resolve({
                    "status_code": 200,
                    "data":  result.data
                });

            })
            .catch(err=>{

                resolve({
                    "status_code": 200,
                    "data":  '0.0.0.0'
                });

            });

        });
        
    }

});