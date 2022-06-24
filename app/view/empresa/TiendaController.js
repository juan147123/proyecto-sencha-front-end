Ext.define('backoffice.view.empresa.TiendaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa-tienda',
    onClickNuevo:function(b){
        try {
            let panel = tools.Util.getById('contentPanelEmpresa');
            let view  = panel.getLayout();
            view.setActiveItem(2);
            let form   = tools.Util.getById('empresa-tienda-registro');
            form.getForm().reset();
            tools.Util.getById('idBusinessStore').setValue(
                tools.Util.getByName('idbusiness').getValue()
            );
        } catch (error) {
            console.warn(error);  
        }
    },
    onClickCancelar:function(b){
        try {
            let me = tools.Util.getById('contentPanelEmpresa');
            let l  = me.getLayout();
            l.setActiveItem(0);
           // me.getComponent(0).getEl().slideIn('l');
        } catch (error) {
            console.warn('ERROR VOLVER TIENDA');  
        }
    },
    onBeforeActivate:function(obj,opts){
        let store = tools.Util.getById('dgvTienda').getStore();
        store.getProxy().url = Ext.manifest.api +  'store/business/'+ tools.Util.getByName('idbusiness').getValue() ,
        store.load();
    },
    onClickEditar:function(grid, rowIndex, colIndex){
        let record = grid.getStore().getAt(rowIndex);
        grid.getSelectionModel().select(record)
        let form   = tools.Util.getById('empresa-tienda-registro');
        form.getForm().reset();
        form.loadRecord(record);
        //grid.getSelectionModel().select(record);
       // grid.getView().focusRow(record);
        let panel = tools.Util.getById('contentPanelEmpresa');
        let view  = panel.getLayout();
        view.setActiveItem(2);

    },
    onClickConfiguraSerie:function(grid, rowIndex, colIndex){
        try {
            let record = grid.getStore().getAt(rowIndex);
            grid.getSelectionModel().select(record);
            let form    = tools.Util.getById('empresa-tienda-series-registro');
            form.getForm().reset();
            let panel   = tools.Util.getById('contentPanelEmpresa');
            let view    = panel.getLayout();
            view.setActiveItem(6);
           
            
            /*tools.Util.getById('idBusinessStore').setValue(
                tools.Util.getByName('idbusiness').getValue()
            );*/
        } catch (error) {
            console.warn(error);  
        }
    },
    onClickAnular: function(grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
        function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url  = Ext.manifest.api+'store/'+ _record.get('idstore');
                    _record.set("enable",0);
                    let _resp = tools.Util.getAjaxOnlyToken(_record.data
                    ,_url,'DELETE',tools.Jwt.getBearer());
                    let _store  = tools.Util.getById('dgvTienda').getStore();
                    _store.load();
                }
            }
        );
      },

    
});
