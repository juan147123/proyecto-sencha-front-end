Ext.define('backoffice.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-login',
    login:function(b){
        let _email    = this.lookupReference('email').getValue();
        let _password = this.lookupReference('password').getValue();
        let _form     = this.lookupReference('frmlogin');
        me = this;
        if(_form.isValid()){
           me.getView().mask('....Conectado');

           _form.submit({
            url : Ext.manifest.api + 'login',
            method : 'POST',
            waitMsg: Ext.manifest.msgEnviando,
            headers:
            {
                'Content-Type': 'application/json'
            },
            clientValidation: true,
            submitEmptyText : true,
            standardSubmit  :false,
            success: function (form, action) {
                me.getView().unmask();
                me.getView().close();
                let _usuario = JSON.parse(action.response.responseText);
                tools.Jwt.saveToken(_usuario);
                axios.defaults.headers.common['Authorization'] = tools.Jwt.getBearer();
                axios.defaults.headers.common['Content-Type']  = 'application/json';
                body = document.getElementById('mybody'); 
                body.removeAttribute("id");
                Ext.create('backoffice.view.main.Main');
                

            },
            failure :function(form,action){
                me.getView().unmask();
                if(action.response.status == 401){
                    tools.Util.setToast("",Ext.manifest.msgUsuarioIncorrecto,1);
                }
            }
        });  


           //tools.Firebase.loginUserPass(_email,_password,me.getView());
           //Ext.create('backoffice.view.main.Main')

          // axios.defaults.baseURL = Ext.manifest.api;
          // axios.defaults.headers.common['Authorization'] = tools.Jwt.getBearer();
          // axios.defaults.headers.common['Content-Type']  = 'application/json';

         

        }else{
            tools.Util.setToast(Ext.manifest.AppName, "Ingresar la información del usuario",1);
            
        }
    },
    onClickRestablerClave:function(b){
       try {
            let me = tools.Util.getById('contentPaneSeguridad');
            let l  = me.getLayout();
            l.setActiveItem(1);
           // me.getComponent(1).getEl().slideIn('r');
        } catch (error) {
            console.warn('ERROR ENVIAR OLVIDE CLAVE');  
        }
    }

});
