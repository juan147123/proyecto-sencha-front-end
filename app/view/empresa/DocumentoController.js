Ext.define('backoffice.view.empresa.DocumentoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa-documento',
    onClickCancelar:function(b){
        try {
            let me = tools.Util.getById('contentPanelEmpresa');
            let l  = me.getLayout();
            l.setActiveItem(0);
            me.getComponent(0).getEl().slideIn('l');
        } catch (error) {
            console.warn('ERROR VOLVER TIENDA');  
        }
    },
    onClickAgredaSerie:function(b){
        tools.Util.getWindowPopup('empresa.TiendaDocumento');
    }

});
