Ext.define('backoffice.view.gasto.RegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gasto-registro',
    onClick_Cancelar: function (b) {
        this._regresarLista(0);
    },
    onClick_Guardar:function(){
        let formbanco = this.getView().getForm();
        let store  = tools.Util.getById('dgvGasto').getStore();
        if (!formbanco.isDirty()) {
            tools.Util.setToast("",Ext.manifest.msgFieldVal,1);
            return;
        }
        else if (!formbanco.isValid()) {
            tools.Util.setToast("","Datos invalidos",1);
            return;
        }
        _idBanco  = tools.Util.getById('idspent').getValue();
      
        formbanco.submit({
            url :  (_idBanco!=0? Ext.manifest.api + 'spent/'+ _idBanco.toString(): Ext.manifest.api+'spent'),
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
                let me = tools.Util.getById('contentPanelGastos');
                let l  = me.getLayout();
                l.setActiveItem(0);    
            }
        });    
    },
    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('contentPanelGastos').getLayout();
        me.setActiveItem(nroVista);
    }

});
