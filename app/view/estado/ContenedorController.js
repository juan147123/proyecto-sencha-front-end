Ext.define('backoffice.view.estado.ContenedorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.estado-contenedor',
    onClick_CrearEstado:function(){
        try {
            let f = tools.Util.getById('form_estadoregistro');
            f.getForm().reset();
            let me = tools.Util.getById('contentPanelestado');
            let l  = me.getLayout();
            l.setActiveItem(1);    
        } catch (error) {
            console.warn('ERROR EN CREAR estado');  
        }
    }

});
