Ext.define('backoffice.view.seguridad.OlvidoClaveController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.seguridad-olvidoclave',
    onClickRegresar:function(b){
        try {
            let me = tools.Util.getById('contentPaneSeguridad');
            let l  = me.getLayout();
            l.setActiveItem(0);    
        } catch (error) {
            console.warn('ERROR LOGIN');  
        }
    },
    onClickRecuperarClave:function(b){
        try {
            let form = this.getView().getForm();
            if(!form.isValid()){
                tools.Util.setToast('','Ingrese un correo valido',1);
                return false;
            }
            let service = Ext.create('service-OlvideClave');
            let email   = tools.Util.getById('email').getValue();
            service.sendEmail(email).then(
                function (response){
                form.reset();    
                tools.Util.setToast('','Enviado',0);
                let me = tools.Util.getById('contentPaneSeguridad');
                let l  = me.getLayout();
                l.setActiveItem(0);
            });
          
        } catch (error) {
            console.warn(error.toString());  
        }
    }

});
