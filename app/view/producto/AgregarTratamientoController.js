Ext.define('backoffice.view.producto.AgregarTratamientoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.producto-agregartratamiento',
    onClickCancelar:function(e) {
        let window = this.getView();
        window.close();
    },
    onClickGuardar:function(b){
        let window = this.getView();
        let form = tools.Util.getById('frmTratamiento').getForm();
        if(!form.isValid()){    
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }else if(!form.isDirty()){
            Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
            return;
        }
        form.submit({
            url :  Ext.manifest.api + 'productxtreatment',
            method : 'POST',
            waitMsg: Ext.manifest.msgEnviando,
            jsonSubmit: true,
            trackResetOnLoad: true,
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization' : tools.Jwt.getBearer()
            },
            clientValidation: true,
            submitEmptyText : true,
            standardSubmit  :false,
            success: function (form, action) {
                let _response = JSON.parse(action.response.responseText);
                if(_response.data){
                    tools.Util.getById('dgvTratamiento').getStore().reload();
                    tools.Util.setToast("",Ext.manifest.msgOk,0);
                    window.close();
                }
            }
        });  
    }

});
