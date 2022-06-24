Ext.define('backoffice.view.empresa.SeriesRegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa-seriesregistro',
    onBeforeActivate:function(){
        tools.Util.getById('iddocument_sales').getStore().load();
    },
    onClickCancelar:function(b){
        try {
            let panel = tools.Util.getById('contentPanelEmpresa');
            let view  = panel.getLayout();
            view.setActiveItem(4);
            let form   = tools.Util.getById('empresa-series-registro');
            form.getForm().reset();
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
            _id  = tools.Util.getById('idcorrelative').getValue();
          
            form.submit({
                url :  (_id!=0? Ext.manifest.api + 'correlative/'+ _id.toString(): Ext.manifest.api+'correlative'),
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
                    tools.Util.getById('dgvCorrelative').getStore().reload();
                    tools.Util.setToast("",Ext.manifest.msgOk,0);
                    let panel = tools.Util.getById('contentPanelEmpresa');
                    let view  = panel.getLayout();
                    view.setActiveItem(4);
                }
            });  
        } catch (error) {
            console.warn(error);  
        }
    }




});
