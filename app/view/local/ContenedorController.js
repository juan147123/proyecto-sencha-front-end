Ext.define('backoffice.view.local.ContenedorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.local-contenedor',
    init: function() {
        return false;
        //this.setCurrentView('listadolocales');
    },

    onBackBtnClick: function() {
        this.setCurrentView('inbox');
    },

    onMenuClick: function (menu, item) {
        if (item && item.routeId === 'localregistro') {
            this.setCurrentView(item.routeId, item.params);
        }
    },

    setCurrentView: function(view, params) {
        var contentPanel = this.getView().down('#contentPanel');
        //We skip rendering for the following scenarios:
        // * There is no contentPanel
        // * view xtype is not specified
        // * current view is the same
        if(!contentPanel || view === '' || (contentPanel.down() && contentPanel.down().xtype === view)){
            return false;
        }

        if (params && params.openWindow) {
            var cfg = Ext.apply({
                xtype: 'localwindows',
                items: [
                    Ext.apply({
                        xtype: view
                    }, params.targetCfg)
                ]
            }, params.windowCfg);

            Ext.create(cfg);
        } else {
            Ext.suspendLayouts();

            contentPanel.removeAll(true);
            contentPanel.add(
                Ext.apply({
                    xtype: view
                }, params)
            );

            Ext.resumeLayouts(true);
        }
    },
    onClickNuevoLocal:function(){
        try {
            let f = tools.Util.getById('frmSede');
            f.reset();
            let me = tools.Util.getById('contentPanelLocal');
            let l  = me.getLayout();
            l.setActiveItem(1);    
        } catch (error) {
            console.warn('ERROR EN CREAR LOCAL');  
        }
    },
    onClick_Reload:function(){
        tools.Util.getById('listSedes').getStore().reload();
    }
    
});
