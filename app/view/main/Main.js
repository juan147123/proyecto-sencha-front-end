
Ext.define('backoffice.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree',
        'backoffice.view.main.MainController'
    ],
    defaultToken: 'dashboard',
    controller: 'main',
    viewModel: 'main',
    cls: 'sencha-dash-viewport',
    itemId: 'mainView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function () {
        me = this;
        //dd   = Ext.data.StoreManager.lookup('stJwt');
        // user = dd.data.getAt(0);
        var empTpl = new Ext.XTemplate(
            '<div><div style="padding: 6px 0;"><span class="x-fa fa-bell f-color"></span></div><div class="n-count-0">{count}</div></div>'
        );
        Ext.apply(me, {
            items: [
                {
                    xtype: 'toolbar',
                    cls: 'sencha-dash-dash-headerbar shadow',
                    height: 64,
                    itemId: 'headerBar',
                    items: [
                        {
                            xtype: 'component',
                            reference: 'senchaLogo',
                            cls: 'sencha-logo',
                            html: '<div class="main-logo"><img src=' + Ext.manifest.urlLogo + '>TIENDA</div>',
                            width: 220

                        },
                        {
                            margin: '0 0 0 8',
                            ui: 'header',
                            iconCls: 'x-fa fa-navicon',
                            id: 'main-navigation-btn',
                            itemId: 'main-navigation-btn',
                            listeners: {
                                click: 'onToggleNavigationSize'
                            }
                            //handler: 'onToggleNavigationSize'
                        }
                    ]
                },
                {
                    xtype: 'maincontainerwrap',
                    id: 'main-view-detail-wrap',
                    reference: 'mainContainerWrap',
                    flex: 1,
                    items: [
                        {
                            xtype: 'treelist',
                            reference: 'navigationTreeList',
                            itemId: 'navigationTreeList',
                            ui: 'navigation',
                            store: 'NavigationTree',
                            micro: false,
                            width: 220,
                            expanderFirst: false,
                            expanderOnly: false,
                            singleExpand: true,
                            single: true,
                            listeners: {
                                selectionchange: 'onNavigationTreeSelectionChange',
                            }
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            reference: 'mainCardPanel',
                            cls: 'sencha-dash-right-main-container',
                            itemId: 'contentPanel',
                            layout: {
                                type: 'card',
                                anchor: '100%'
                            },
                            items: [
                                {
                                    xtype: 'producto',
                                    routeId: 'dashboardini',
                                    hideMode: 'offset'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        me.callParent();


        /*let store = tools.Util.getStoreById('stDashboard');
        store.load({
            callback: function(records, operation, success) {
                if(success){
                    
                    tools.Util.getById('lblTotalConductores').setText(records[0].get('totalConductores'));
                    tools.Util.getById('lblConducoresServicio').setText(records[0].get('totalServicios'));
                    tools.Util.getById('lblTotalViajes').setText(records[0].get('totalSolicitudesDia'));
                    tools.Util.getById('lblTotalViajesCursoRegular').setText(records[0].get('totalServiciosEjecucionTaxiRegular'));
                    tools.Util.getById('lblTotalViajesCursoTuristico').setText(records[0].get('totalServiciosEjecucionTaxiTuristico'));
                }    
            },
            scope: this
        });*/



    },

});
