Ext.define('backoffice.view.tipodocumento.RegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tipodocumento-registro',
    onClick_GuardarTipoDocumento:function(){
        let formtipodoc = this.getView().getForm();
        let store  = tools.Util.getById('dgvTipoDocumento').getStore();
        if (!formtipodoc.isDirty()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
            return;
        }
        else if (!formtipodoc.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        _idtipodocumento  = tools.Util.getById('idTipoDocumento').getValue();
      
        formtipodoc.submit({
            url :  (_idtipodocumento!=0? Ext.manifest.api + 'tipodocumento/'+ _idtipodocumento.toString(): Ext.manifest.api+'tipodocumento'),
            method : (_idtipodocumento!=0?'PUT':'POST'),
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
                store.load();
                let me = tools.Util.getById('contentPaneltipodocumento');
                let l  = me.getLayout();
                l.setActiveItem(0);    
            }
        });

        let me = tools.Util.getById('contentPaneltipodocumento');
        let l  = me.getLayout();
        l.setActiveItem(0);    
    },
    onClick_CancelarTipoDocumento:function(){
        let f = tools.Util.getById('formtipodocumentoregistro');
        f.getForm().reset();
        let me = tools.Util.getById('contentPaneltipodocumento');
        let l  = me.getLayout();
        l.setActiveItem(0);    
    }

});
