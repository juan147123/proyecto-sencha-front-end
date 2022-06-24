Ext.define('backoffice.view.estado.ListadoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.estado-listado',
    onClick_Editar: function(grid, rowIndex, colIndex) {
        let record = grid.getStore().getAt(rowIndex);
        let f = tools.Util.getById('form_estadoregistro');
        f.getForm().reset();
        f.loadRecord(record);
        let me = tools.Util.getById('contentPanelestado');
        let l  = me.getLayout();
        l.setActiveItem(1);   

    },
    onClick_Anular: function(grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, 'Eliminar el registro seleccionado',
        function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url  = Ext.manifest.api+'estadoconductor/'+ _record.get('idEstadoConductor');
                    let _resp = tools.Util.getAjaxOnlyToken({},_url,'DELETE',tools.Jwt.getBearer());
                    let _store  = tools.Util.getById('dgvestado').getStore();
                    _store.load();
                }
            }
        );
    },

});
