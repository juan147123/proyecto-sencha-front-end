Ext.define('backoffice.view.estado.RegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.estado-registro',
    onClick_GuardarEstado:function(){
        let formtipodoc = this.getView().getForm();
        let store  = tools.Util.getById('dgvEstado').getStore();
        if (!formtipodoc.isDirty()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'No hay nuevos datos para crear');
            return;
        }
        else if (!formtipodoc.isValid()) {
            Ext.Msg.alert(Ext.manifest.AppName, 'Datos invalidados');
            return;
        }
        _idestadoconductor  = tools.Util.getById('idEstadoConductor').getValue();
      
        formtipodoc.submit({
            url :  (_idestadoconductor!=0? Ext.manifest.api + 'estadoconductor/'+ _idestadoconductor.toString(): Ext.manifest.api+'estadoconductor'),
            method : (_idestadoconductor!=0?'PUT':'POST'),
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
                let me = tools.Util.getById('contentPanelestado');
                let l  = me.getLayout();
                l.setActiveItem(0);    
            }
        });

        let me = tools.Util.getById('contentPanelestado');
        let l  = me.getLayout();
        l.setActiveItem(0);    
    },
    onClick_CancelarEstado:function(){
        let f = tools.Util.getById('form_estadoregistro');
        f.getForm().reset();
        let me = tools.Util.getById('contentPanelestado');
        let l  = me.getLayout();
        l.setActiveItem(0);    
    }

});
