Ext.define('backoffice.view.usuario.RegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usuario-registro',
    onClickCancelar: function (b) {
        this._regresarLista(0);
    },

    onClickGuardar: function () {
        let form = this.getView().getForm();
        let store  = tools.Util.getById('dgvUsuario').getStore();
        /*if (!form.isDirty()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
            return;
        }*/
        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        _id  = tools.Util.getById('id').getValue();
      
        form.submit({
            url :  (_id!=0? Ext.manifest.api + 'user/'+ _id.toString(): Ext.manifest.api+'user'),
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
                tools.Util.setToast('',Ext.manifest.msgOk,0)
                store.load();
                let me = tools.Util.getById('contentPanelusuario');
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
        let me = tools.Util.getById('contentPanelusuario').getLayout();
        me.setActiveItem(nroVista);
    }

});
