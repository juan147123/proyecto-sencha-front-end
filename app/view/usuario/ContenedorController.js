Ext.define('backoffice.view.usuario.ContenedorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usuario-contenedor',
    onClick_CrearUsuario:function(){
        try {
            let f = tools.Util.getById('usuarioregistro');
            f.reset();
            let me = tools.Util.getById('contentPanelusuario');
            let l  = me.getLayout();
            l.setActiveItem(1);    
        } catch (error) {
            console.warn('ERROR EN CREAR usuario');  
        }
    },
    onClick_RecargarList:function(){
        tools.Util.getById('dgvUsuario').getStore().load();
    }

});
