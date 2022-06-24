Ext.define('backoffice.view.banco.RegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.banco-registro',
    onClick_GuardarBanco:function(){
        let formbanco = this.getView().getForm();
        let store  = tools.Util.getById('dgvBanco').getStore();
        if (!formbanco.isDirty()) {
            tools.Util.setToast("",Ext.manifest.msgFieldVal,1);
            return;
        }
        else if (!formbanco.isValid()) {
            tools.Util.setToast("","Datos invalidos",1);
            return;
        }
        _idBanco  = tools.Util.getById('idBanco').getValue();
      
        formbanco.submit({
            url :  (_idBanco!=0? Ext.manifest.api + 'banco/'+ _idBanco.toString(): Ext.manifest.api+'banco'),
            method : (_idBanco!=0?'PUT':'POST'),
            waitMsg: 'Enviando ...',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization' : tools.Jwt.getBearer()
            },
            clientValidation: true,
            submitEmptyText : true,
            standardSubmit  :false,
            success: function (form, action) {
                tools.Util.setToast("",Ext.manifest.msgOk,0);
                store.load();
                let me = tools.Util.getById('contentPanelbanco');
                let l  = me.getLayout();
                l.setActiveItem(0);    
            }
        });

        let me = tools.Util.getById('contentPanelbanco');
        let l  = me.getLayout();
        l.setActiveItem(0);    
    },
    onClick_CancelarBanco:function(){
        let f = tools.Util.getById('form_bancoregistro');
        f.getForm().reset();
        let me = tools.Util.getById('contentPanelbanco');
        let l  = me.getLayout();
        l.setActiveItem(0);    
    }

});
