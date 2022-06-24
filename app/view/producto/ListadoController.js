Ext.define('backoffice.view.producto.ListadoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.producto-listado',
    onBeforeActivate: function (obj, opts) {
        let category = tools.Util.getStoreById('stCategory');
        category = tools.Util.setHeaderAuth(category);
        category.load();
    },
    onClickNuevo: function (e) {
        let form = tools.Util.getById('producto-registro');
        form.getForm().reset();
        let me = tools.Util.getById('contentPanelProducto').getLayout();
        let tratamiento = tools.Util.getById('dgvTratamiento').getStore();
        let id =tools.Util.getById('idproduct').getValue();
        tratamiento.getProxy().url = Ext.manifest.api + 'productxtreatment/product/' + id;
        tratamiento.load();
        me.setActiveItem(1);
    },
    onClickEditar: function (grid, rowIndex, colIndex) {
        let record = grid.getStore().getAt(rowIndex);
        let form = tools.Util.getById('producto-registro');
        form.getForm().reset();
        form.loadRecord(record);
        let panel = tools.Util.getById('contentPanelProducto');
        let view = panel.getLayout();

        let tratamiento = tools.Util.getById('dgvTratamiento').getStore();
        tratamiento.getProxy().url = Ext.manifest.api + 'productxtreatment/product/' + record.get('idproduct');
        tratamiento.load();
        view.setActiveItem(1);
    },
    onClickAnular: function (grid, rowIndex, colIndex) {
        me = this;
        Ext.Msg.confirm(Ext.manifest.AppName, Ext.manifest.msgEliminar,
            function (btn) {
                if (btn === 'yes') {
                    let _record = grid.getStore().getAt(rowIndex);
                    let _idproduct = _record.get('idproduct');
                    let _url = Ext.manifest.api + 'product/' + _idproduct;
                    let _resp = tools.Util.getAjaxOnlyToken({enable:0}
                        , _url, 'DELETE', tools.Jwt.getBearer());
                    tools.Util.getById('dgvProducto').getStore().load(
                        {
                            params: {
                                idcategory:0,
                                idmaterial:0, 
                                idtype :0,
                                idcolor:0,
                                idindex:0,
                                idbrand:0,
                                idtreatment:0
                            },
                        }
                    );
                }
            }
        );
    },

    onSelectCategoria: function (combo, record, eOpts) {
        this._buscarProducto();
    },
    onSelectMaterial: function (combo, record, eOpts) {
        this._buscarProducto();
    },
    onSelectTratamiento: function (combo, record, eOpts) {
        this._buscarProducto();
    },
    onSelectMarca: function (combo, record, eOpts) {
        this._buscarProducto();
    },
    onSelectIndice: function (combo, record, eOpts) {
        this._buscarProducto();
    },
    onSelectColor: function (combo, record, eOpts) {
        this._buscarProducto();
    },
    onSelectType: function (combo, record, eOpts) {
        this._buscarProducto();
    },
    onkeyUpCategoria: function (combo, e, eOpts) {
        if (e.getKey() == 13) {
            if (!combo.getRawValue()) {
                console.log('vacio');
            }

        }

    },
    _buscarProducto() {
        let grid = tools.Util.getById('dgvProducto');
        let store = grid.getStore();

        let idcategory = tools.Util.getById('cboCategoria').getValue();
        let idmaterial = tools.Util.getById('cboMaterial').getValue();
        let idtype = tools.Util.getById('cboTipo').getValue();
        let idcolor = tools.Util.getById('cboColor').getValue();
        let idindex = tools.Util.getById('cboIndex').getValue();
        let idbrand = tools.Util.getById('cboMarca').getValue();
        let idtreatment = tools.Util.getById('cboTratamiento').getValue();

        store.load({
            params: {
                idcategory: (idcategory ? idcategory : 0),
                idmaterial: (idmaterial ? idmaterial : 0),
                idtype: (idtype ? idtype : 0),
                idcolor: (idcolor ? idcolor : 0),
                idindex: (idindex ? idindex : 0),
                idbrand: (idbrand ? idbrand : 0),
                idtreatment: (idtreatment ? idtreatment : 0)
            }
        });
    }






});
