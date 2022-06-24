Ext.define('backoffice.view.local.ListadoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.local-listado',
    onClick_Editar:function(b){
        try {
            let r = b.getWidgetRecord();
            let f = tools.Util.getById('frmSede');
            f.loadRecord(r);
            let me = tools.Util.getById('contentPanelLocal');
            let l  = me.getLayout();
            l.setActiveItem(1);
        } catch (error) {
            console.warn('ERROR EN CREAR LOCAL');  
        }
    },
    onClick_Eliminar:function(b){
        let r = b.getWidgetRecord();
        let view  = this.getView(); 
        Ext.Msg.confirm(Ext.manifest.AppName,"Desea eliminar le registro Seleccionado",function(rpt){
            if(rpt=="yes"){
                view.mask('...... Eliminando');
                Ext.Ajax.request({
                    method:'DELETE',
                    url: Ext.manifest.api +'/sede/'+ r.get('idsede'),
                    success: function(response, opts) {
                        view.unmask();
                        tools.Util.getById('listSedes').getStore().reload(); 
                    },
            
                    failure: function(response, opts) {
                    }
                });
            }
        })
        //tools.Util.getById('listSedes').getStore().reload();
    }
   

});
