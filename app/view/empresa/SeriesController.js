Ext.define('backoffice.view.empresa.SeriesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.empresa-series',
    onBeforeActivate:function(){
        tools.Util.getById('dgvCorrelative').getStore().load();
    },
    onClickNuevo:function(b){
        try {
            let panel = tools.Util.getById('contentPanelEmpresa');
            let view  = panel.getLayout();
            view.setActiveItem(5);
            let form   = tools.Util.getById('empresa-series-registro');
            form.getForm().reset();
        } catch (error) {
            console.warn(error);  
        }
    },
    onClickEditar:function(grid, rowIndex, colIndex){
        let record = grid.getStore().getAt(rowIndex);
        let form   = tools.Util.getById('empresa-series-registro');
        form.getForm().reset();
        form.loadRecord(record);
        let panel = tools.Util.getById('contentPanelEmpresa');
        let view  = panel.getLayout();
        view.setActiveItem(5);

    },
    onClickCancelar:function(b){
        let form   = tools.Util.getById('empresa-series-registro');
        form.getForm().reset();
        let panel = tools.Util.getById('contentPanelEmpresa');
        let view  = panel.getLayout();
        view.setActiveItem(0);

    },

    onClickAnular: function(grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
        function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url  = Ext.manifest.api+'correlative/'+ _record.get('idcorrelative');
                    _record.set("enable",0);
                    let _resp = tools.Util.getAjaxOnlyToken(_record.data
                    ,_url,'DELETE',tools.Jwt.getBearer());
                    let _store  = tools.Util.getById('dgvCorrelative').getStore();
                    _store.load();
                }
            }
        );
      },

});
