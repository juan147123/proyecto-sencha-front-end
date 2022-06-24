
Ext.define('backoffice.view.mapa.Mapa', {
    extend: 'Ext.panel.Panel',
    xtype: 'mapa',

    requires: [
        'backoffice.view.mapa.MapaController',
        'backoffice.view.mapa.MapaModel',
        //'BasiGX.view.component.Map'
    ],

    controller: 'mapa-mapa',
    viewModel: {
        type: 'mapa-mapa'
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    listeners: {
        render:'onRender'
    },
    initComponent: function () {
        me = this;
        let olMap = me._mapa();
        Ext.apply(me, {
            tbar : me._filtro(),
            items: [
                me._grillaConductores(),
                me._mapaTaxi(olMap)
            ],
        });
        me.callParent(arguments);
    },
    _filtro:function(){
        return  [
                {
                    xtype : 'fieldcontainer',
                    layout : 'hbox',
                    items : [
                        {
                            xtype : 'button',
                            ui : 'amber',
                            iconCls : 'fa fa-search',
                            
                        },
                        {
                            xtype : 'textfield',
                            emptyText : 'PLACA',
        
                        },
                    ]
                },
                {
                    xtype : 'fieldcontainer',
                    layout : 'hbox',
                    flex: 1,
                    items : [
                        {
                            xtype : 'button',
                            ui : 'amber',
                            iconCls : 'fa fa-search',
                            
                        },
                        {
                            xtype : 'textfield',
                            emptyText : 'CONDUCTOR',
                            flex: 1
                        }
                    ]
                }
                
            ];
        
    },
    _grillaConductores:function(){
        let conductores = tools.Util.getStoreById('stConductores');
        
        conductores.setPageSize(10);
        conductores.load();
        return   {
            xtype : 'grid',
            store : conductores,
            flex : 1,
            padding : 5,
            tbar : me._paginacion(),
            itemId : 'dgvConductores',
            listeners: {
                select: 'onSelectConductor'
            },
            columns : [
                {
                    xtype  :'templatecolumn',
                   // header : 'Conductores',
                    flex: 1,
                    align : 'left',
                    tpl: '<table style="width:100%" cellspacing=2 cellpadding=2><tr><td style="width:15%;">' + 
                    '<img src="/resources/images/avatar-taxi.png" width="50"></td><td><div style="word-wrap: break-word;">' + 
                    '{nombres} {apellidos} <br>' + 
                    '<tpl for="vehiculos">  {placa} </tpl><br>'+
                    '<tpl for="estadoConductor"><b>{nombre}</b></tpl>'+
                    '</div></td></tr></table>'
                    
                }
            ]
        };
    },
    _paginacion:function(){
        return {
            
                xtype: 'pagingtoolbar',
                displayInfo: true,
                emptyMsg: "Sin elementos a mostrar",
            
        }
    },
    _mapa: function () {

        let _sullana = new ol.View({               
            center: ol.proj.fromLonLat([-80.64000117321659, -5.205230784596154]),
            zoom: 9
        });

        var olMap = new ol.Map({
            view: new ol.View({
                center: [0, 0],
                zoom: 1
            }),
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: _sullana,
            controls: ol.control.defaults({
                zoom: true,
                attribution: true,
                rotate: true,
                navigation: true
            })
        });

        // EVENTOS ***
       /* olMap.on('singleclick', function(evt) {
          // let view = olMap.getView();
           // let viewResolution =  (_sullana.getResolution());
            let map = tools.Util.getMap('MiMapa');
            if(map){
              //  tools.Util.removerCapaMapa(map,'punto');
                tools.Util.addMarkerMapaCar(map,null,null,evt.coordinate);
            }
        });*/
        
        return olMap;
    },
    _mapaTaxi:function(olMap){
     

        mapComponent = Ext.create('BasiGX.view.component.Map', {   //GeoExt.component.Map', {
            layout: 'fit',
            itemId: 'MiMapa',
            map: olMap,
            //region: 'center',
            padding: 5,
            pointerRest: true,
            pointerRestInterval: 750,
            pointerRestPixelTolerance: 5,
            flex : 3,
         
        });

        return mapComponent;
    },
    _buttonConductores:function(){
        return {
            xtype: 'button',
            iconCls: 'fa fa-cab fa-1x',
            text  : 'POSICIONES',
            iconAlign: 'left',
            ui:'amber',
            menu: [{
                text: 'Conductores Libres',
                iconCls : 'fa fa-street-view fa-2x',
            }, {
                text: 'Conductores Servicio',
                iconCls : 'fa fa-street-view fa-2x',
            }, {
                text: 'Todos',
                iconCls : 'fa fa-street-view fa-2x',
            }]
        };
    },
    _buttonAlarmas:function(){
        return  {
            xtype: 'button',
            iconCls: 'fa fa-volume-up fa-2x',
            iconAlign: 'left',
            text : 'ALERTAS',
            ui:'amber',
            menu: [{
                text: 'Alertas Clientes',
                iconCls : 'fa fa-volume-up fa-2x',
            }, {
                text: 'Alertas Conductores',
                iconCls : 'fa fa-volume-up fa-2x',
            },]
        };
    },
});
