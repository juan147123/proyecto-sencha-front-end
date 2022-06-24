Ext.define('backoffice.view.tipodocumento.ListadoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tipodocumento-listado',
    onClick_Editar: function(grid, rowIndex, colIndex) {
        let record = grid.getStore().getAt(rowIndex);
        let f = tools.Util.getById('formtipodocumentoregistro');
        f.getForm().reset();
        f.loadRecord(record);
        let me = tools.Util.getById('contentPaneltipodocumento');
        let l  = me.getLayout();
        l.setActiveItem(1);   

    },
    onClick_Anular: function(grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, 'Eliminar el registro seleccionado',
        function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url  = Ext.manifest.api+'tipodocumento/'+ _record.get('idTipoDocumento');
                    tools.Util.getAjaxOnlyToken({},_url,'DELETE',tools.Jwt.getBearer());
                    let _store  = tools.Util.getById('dgvTipoDocumento').getStore();
                    _store.load();
                }
            }
        );
    },
});
