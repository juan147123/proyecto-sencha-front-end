Ext.define('backoffice.view.maestros.index.FormIndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-index-formindex',
    onClickCancelar: function (b) {
        this._regresarLista(0);
    },

    onClickGuardar: function () {
        let form = this.getView().getForm();
        let store  = tools.Util.getById('dgvIndex').getStore();
      
        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        _id  = tools.Util.getById('idindex').getValue();
      
        form.submit({
            url :  (_id!=0? Ext.manifest.api + 'index/'+ _id.toString(): Ext.manifest.api+'index'),
            method : (_id!=0?'PUT':'POST'),
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
                store.load();
                let me = tools.Util.getById('panelIndice');
                let l  = me.getLayout();
                l.setActiveItem(0);    
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
                
            }
        });
    },

    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelIndice').getLayout();
        me.setActiveItem(nroVista);
    }
});
