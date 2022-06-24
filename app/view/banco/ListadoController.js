Ext.define('backoffice.view.banco.ListadoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.banco-listado',
    init:function(){
        console.log(tools.Jwt.getBearer());
        //alert(Ext.util.LocalStorage.getItem('idtoken'));
    },
    onClick_Editar: function(grid, rowIndex, colIndex) {
        let record = grid.getStore().getAt(rowIndex);
        let f = tools.Util.getById('form_bancoregistro');
        f.getForm().reset();
        f.loadRecord(record);
        let me = tools.Util.getById('contentPanelbanco');
        let l  = me.getLayout();
        l.setActiveItem(1);   

    },
    onClick_Anular: function(grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, 'Eliminar el registro seleccionado',
        function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _url  = Ext.manifest.api+'banco/'+ _record.get('idBanco');
                    let _resp = tools.Util.getAjaxOnlyToken({},_url,'DELETE',tools.Jwt.getBearer());
                    let _store  = tools.Util.getById('dgvBanco').getStore();
                    _store.load();
                }
            }
        );
    },
    
});
