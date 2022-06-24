Ext.define('backoffice.view.descuento.FormDescuentoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form-descuento',
    onClickCancelar: function (b) {
        this._regresarLista(0);
    },

    onClickGuardar: function () {
        let form = this.getView().getForm();
        let store  = tools.Util.getById('dgvDescuento').getStore();
        /*if (!form.isDirty()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
            return;
        }*/
        if (!form.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        _id  = tools.Util.getById('iddiscount').getValue();
      
        form.submit({
            url :  (_id!=0? Ext.manifest.api + 'discount/'+ _id.toString(): Ext.manifest.api+'discount'),
            method : (_id!=0?'PUT':'POST'),
            waitMsg: Ext.manifest.msgEnviando,
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY1NjA1MzE2MSwiZXhwIjoxNjU2MDU2NzYxLCJuYmYiOjE2NTYwNTMxNjEsImp0aSI6IkJhTVJOU1VzUm1laU9YNzciLCJzdWIiOjIyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.D2QXorbro9HdQ3SGKJJTUIuzmsJ3JpiQx7-SGCkFCpU'
            },
            clientValidation: true,
            submitEmptyText : true,
            standardSubmit  :false,
            success: function (form, action) {
                store.load();
                let me = tools.Util.getById('panelDescuento');
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
        let me = tools.Util.getById('panelDescuento').getLayout();
        me.setActiveItem(nroVista);
    }

});