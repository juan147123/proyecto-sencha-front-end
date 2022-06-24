Ext.define('backoffice.view.empresa.TiendaSerieRegistroController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa-tiendaserieregistro',
    onBeforeActivate:function(obj,opts){
        let record = tools.Util.getById('dgvTienda').getSelectionModel().getSelection()[0]; 
        tools.Util.getById('viewTitulo').setHtml(
            '<div style="font-size:25px;">Configurar Serie a :  '+ record.get('address') +'</div><p>Configuracion de series de documentos digitales a una sucursal o tienda local.'
        );   
    },
    onClickCancelar:function(b){
        try {
            let me = tools.Util.getById('contentPanelEmpresa');
            let l  = me.getLayout();
            l.setActiveItem(1);
        } catch (error) {
            console.warn('ERROR VOLVER A TIENDA');  
        }
    },
    onSelectDocumento:function(combo, record, eOpts ){
        let store = tools.Util.getById('serie').getStore();
        store.getProxy().url = Ext.manifest.api +  'correlative/documentsales/'+ combo.getValue();
        store = tools.Util.setHeaderAuth(store);
        store.load();
    }

});
