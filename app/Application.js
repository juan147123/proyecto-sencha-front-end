

Ext.define('backoffice.Application', {
    extend: 'Ext.app.Application',

    name: 'backoffice',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    models : [
        'Store',
        'Business',
        'Correlative',
        'DocumentSales',
        'Client',
        'TypeContact',
        'TypeDocument',
        'Discount',
        'Supplier',
        'TypeTax',
        'Companytype',
        'Employee',
        'Rol',
        'InventoryStatus',
        'Replacement',
        'Product',
        'Category',
        'Brand',
        'Color',
        'Material',
        'Base',
        'UseMount',
        'Index',
        'Size',
        'Side',
        'Type',
        'Treatment',
        'Serie',
        'ProductxTreatment',
        'MethodPay',
        'User',
        'Coin',
        'Quotation',
        'Spent',
        'Sales',
        'Pagos',
        'ReplacementDetails',
        'StateReplacement',
        'Order'
    ],
    views :[
        //TODO: CORE
        'backoffice.view.seguridad.OlvidoClave',
        'backoffice.view.dashboard.Dashboard',
        'backoffice.view.local.Listado',
        'backoffice.view.local.Contenedor',
        'backoffice.view.local.Registro',
        'backoffice.view.login.Login',
        //'backoffice.view.mapa.Mapa',
        'backoffice.view.dashboard.GraficoIngresos',
        'backoffice.view.banco.Contenedor',
        'backoffice.view.banco.Listado',
        'backoffice.view.banco.Registro',
        'backoffice.view.tipodocumento.Contenedor',
        'backoffice.view.tipodocumento.Listado',
        'backoffice.view.tipodocumento.Registro',
        'backoffice.view.estado.Contenedor',
        'backoffice.view.estado.Listado',
        'backoffice.view.estado.Registro',
        //TODO: Ventas:
        'backoffice.view.venta.Contenedor',
        'backoffice.view.cotizacion.Contenedor',
        'backoffice.view.inventario.Contenedor',
        'backoffice.view.empresa.Contenedor',
        'backoffice.view.maestros.Contenedor',
        'backoffice.view.compra.Contenedor',
        'backoffice.view.contacto.Contenedor',
        'backoffice.view.usuario.Contenedor',
        'backoffice.view.maestros.ContenedorSistema',
        'backoffice.view.producto.Contenedor',
        'backoffice.view.producto.AgregarTratamiento',
        'backoffice.view.proveedor.Contenedor',
        'backoffice.view.proveedor.Pedido',
        'backoffice.view.contacto.Service',
        'backoffice.view.gasto.Contenedor',
        'backoffice.view.contacto.modalCliente',
        //FATURACION
        'backoffice.view.facturacion.Contenedor'
        
    ],
    stores: [
        
     /*  'MarcaModelos',*/
       'NavigationTree',
       'Static',
       'Jwt',
       //TODO: NEw Software
       'Business',
       'Store',
       'TypeDocument',
       'Correlative',
       'DocumentSales',
       'CorrelativeDocumentSales',
       'Client',
       'TypeContact',
       'Discount',
       'Supplier',
       'TypeTax',
       'Employee',
       'Rol',
       'InventoryStatus',
       'Replacement',
       'Product',
       'Dashboard',
       'tmp.ReplacementDetail',
       'tmp.PedidoTerminadoBifocal',
       'tmp.PedidoMontura',
       'tmp.PedidoTerminadoMonoFocalSPH1',
       'tmp.PedidoTerminadoMonoFocalSPH2',
       'tmp.PedidoTerminadoMonoFocalCYL',
       'tmp.PedidoTerminadoMonoSPHCYL1',
       'tmp.PedidoTerminadoMonoSPHCYL2',
       "tmp.DetalleFacturacion",
       'Category',
       'Brand',
       'Color',
       'Material',
       'Base',
       'UseMount',
       'Index',
       'Size',
       'Side',
       'Type',
       'Treatment',
       'Serie',
       'ProductxTreatment',
       'MethodPay',
       'User',
       'Companytype',
       'Coin',
       'Quotation',
       'Spent',
       'ProductQuotation',
       'tmp.DetalleCotizacion',
       'Sales',
       'TipoPago',
       'Pagos',
       'Ingresos',
       'ReplacementDetails',
       'StateReplacement',
       "TypeTransaction",
       'Order'

       
       
    ],
    //defaultToken : 'conductor',
    launch: function () {
        tools.Util.setVistas('backoffice.view');
        tools.Util.setStores('backoffice.store');

        Ext.util.Format.decimalSeparator  = '.';
        Ext.util.Format.thousandSeparator = ' ';
        Ext.util.Format.currencyPrecision = 5;
        Ext.util.Format.currencySign ='S/.';
        document.getElementById("splashscreen").style.display = 'none';
        //tools.Firebase.connect();

        //Development
        axios.defaults.baseURL = Ext.manifest.api;
        //IP Public Client
        tools.Util.getIpPublic().then(function (content) {
            tools.Jwt.setIpPublic(content.data);
        });
        
        Ext.create('backoffice.view.login.Login');
        //Ext.create('backoffice.view.main.Main');
    },
    onAppUpdate: function () {
        Ext.Msg.confirm('Actualizacion de Aplicación', 'Esta aplicacion tiene una actualizacion, recargar?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
