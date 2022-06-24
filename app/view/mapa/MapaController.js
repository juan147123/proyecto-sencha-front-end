Ext.define('backoffice.view.mapa.MapaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mapa-mapa',
    onRender: function () {

        olMap = tools.Util.getById('MiMapa');
        /*var runner = new Ext.util.TaskRunner();
        var task = runner.newTask({
            run: function() {

                tools.Firebase.leerCollection("Locations").then(function(content){
                    content.each(function(record){
                        let point = record.get('position').geopoint;
                        tools.Util.addMarkerMapaCar(olMap,point._long,point._lat,null);
                    });
                });
            },
            interval: 5000
            //interval: 60000 // 1-minute interval
        });*/
        //  task.start();

        /* tools.Firebase.leerCollection("Locations").then(function(content){
             content.each(function(record){
                 let point = record.get('position').geopoint;
                 console.log(point);
                 tools.Util.addMarkerMapaCar(olMap,point._long,point._lat,null);
             });
         });*/
    },
    onSelectConductor: function ( grid, record, index, eOpts) {

        console.log(record.get('uid'));

        /*tools.Firebase.leerCollection("Locations").then(function (content) {
          //  console.log(content);
            content.each(function (record) {
                let point = record.get('position').geopoint;
                console.log(point);
                tools.Util.addMarkerMapaCar(olMap, point._long, point._lat, null);
            });
        });*/
    }

});
