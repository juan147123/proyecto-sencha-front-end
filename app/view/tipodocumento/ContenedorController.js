Ext.define('backoffice.view.tipodocumento.ContenedorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tipodocumento-contenedor',
    onClick_CrearTipoDocumento:function(){
        try {
            let f = tools.Util.getById('formtipodocumentoregistro');
            f.getForm().reset();
            let me = tools.Util.getById('contentPaneltipodocumento');
            let l  = me.getLayout();
            l.setActiveItem(1);    
        } catch (error) {
            console.warn('ERROR EN CREAR tipo documento');  
        }
    }

});
