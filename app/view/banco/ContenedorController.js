Ext.define('backoffice.view.banco.ContenedorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.banco-contenedor',
    onClick_CrearBanco:function(){
        try {
            let f = tools.Util.getById('form_bancoregistro');
            f.getForm().reset();
            let me = tools.Util.getById('contentPanelbanco');
            let l  = me.getLayout();
            l.setActiveItem(1);    
        } catch (error) {
            console.warn('ERROR EN CREAR banco');  
        }
    }

});
