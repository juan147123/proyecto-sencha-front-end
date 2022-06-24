Ext.define('backoffice.view.local.RegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.local-registro',

    onComposeDiscardClick: function(bt) {
        var win = bt.up('window');
        if (win) {
            win.close();
        }
    },
    onClick_Cancelar:function(){
        try {
            let me = tools.Util.getById('contentPanelLocal');
            let l  = me.getLayout();
            l.setActiveItem(0);    
        } catch (error) {
            console.warn('ERROR EN VOLVER LA LISTADO');  
        }
        
    },
    onClick_Grabar:function(){
        try {
            let f = tools.Util.getById('frmSede');
            view  = this.getView();

            if(f.isValid()){
                let id = tools.Util.getByName("idsede").getValue();
                if(id==0){
                    view.mask('...... Enviando');
                    f.submit({
                        method: 'POST',
                        url: Ext.manifest.api +  '/sede',
                        jsonSubmit:true,
                        success: function(form, action) {
                            view.unmask();
                            let me = tools.Util.getById('contentPanelLocal');
                            let l  = me.getLayout();
                            l.setActiveItem(0);  
                            tools.Util.getById('listSedes').getStore().reload(); 
                         },
                    });
                }else{
                    view.mask('...... Enviando');
                    f.submit({
                        method: 'PUT',
                        url: Ext.manifest.api +  '/sede/' + id.toString(),
                        jsonSubmit:true,
                        success: function(form, action) {
                            view.unmask();
                            let me = tools.Util.getById('contentPanelLocal');
                            let l  = me.getLayout();
                            l.setActiveItem(0);   
                            tools.Util.getById('listSedes').getStore().reload(); 
                         },
                    });
                }
                
                
               

            }else{
                alert("eee"); return false;
            }
            
        } catch (error) {
            console.warn('ERROR EN VOLVER LA LISTADO');  
        }
        
    },
    setCurrentView: function(view, params) {
        var contentPanel = this.getView().down('#contentPanel');
        console.log(contentPanel);
        
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
});
