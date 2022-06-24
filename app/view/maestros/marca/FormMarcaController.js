Ext.define('backoffice.view.maestros.marca.FormMarcaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maestros-marca-formmarca',

    onClickCancelar: function (b) {
        this._regresarLista(0);
    },

    onClickGuardar: function () {
        let form = this.getView().getForm();
        let store  = tools.Util.getById('dgvMarca').getStore();
        /*if (!form.isDirty()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
            return;
        }*/
        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        _id  = tools.Util.getById('idbrand').getValue();
      
        form.submit({
            url :  (_id!=0? Ext.manifest.api + 'brand/'+ _id.toString(): Ext.manifest.api+'brand'),
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
                let me = tools.Util.getById('panelMarca');
                let l  = me.getLayout();
                l.setActiveItem(0);    
            },
            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
                
            }
        });

       /* let me = tools.Util.getById('contentPaneltipodocumento');
        let l  = me.getLayout();
        l.setActiveItem(0);   */


    },

    _regresarLista: function (nroVista) {
        let me = tools.Util.getById('panelMarca').getLayout();
        me.setActiveItem(nroVista);
    }
});
