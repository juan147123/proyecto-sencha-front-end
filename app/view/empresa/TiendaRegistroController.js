Ext.define('backoffice.view.empresa.TiendaRegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa-tiendaregistro',
    onClickCancelar:function(b){

        try {
            let me = tools.Util.getById('contentPanelEmpresa');
            let l  = me.getLayout();
            l.setActiveItem(1);
           // me.getComponent(0).getEl().slideIn('l');
        } catch (error) {
            console.warn(error);  
        }
    },
    onClickGuardar:function(b){
        try {
            let form  =  this.getView().getForm();
            if(!form.isValid()){    
                Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
                return;
            }else if(!form.isDirty()){
                Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
                return;
            }
            _idstore  = tools.Util.getById('idstore').getValue();
          
            form.submit({
                url :  (_idstore!=0? Ext.manifest.api + 'store/'+ _idstore.toString(): Ext.manifest.api+'store'),
                method : (_idstore!=0?'PUT':'POST'),
                waitMsg: Ext.manifest.msgEnviando,
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization' : tools.Jwt.getBearer()
                },
                clientValidation: true,
                submitEmptyText : true,
                standardSubmit  :false,
                success: function (form, action) {
                    tools.Util.getById('dgvTienda').getStore().reload();
                    tools.Util.setToast("",Ext.manifest.msgOk,0);
                    let panel = tools.Util.getById('contentPanelEmpresa');
                    let view  = panel.getLayout();
                    view.setActiveItem(1);
                }
            });  
        } catch (error) {
            console.warn(error);  
        }
        
    }

});
