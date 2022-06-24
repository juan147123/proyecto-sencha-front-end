Ext.define('backoffice.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Empresa',
                iconCls: 'x-fa fa-institution',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'empresa',
                routeId: 'empresa', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Ventas',
                iconCls: 'x-fa fa-credit-card',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                children: [
                    {
                        text: 'Cotización',
                        iconCls: 'x-fa fa-file',
                        viewType: 'cotizacion',
                        leaf: true
                    },
                    {
                        text: 'Ventas',
                        iconCls: 'x-fa fa-cart-arrow-down',
                        viewType: 'venta',
                        leaf: true
                    },

                    {
                        text: 'Facturación',
                        iconCls: 'x-fa fa-book',
                        viewType: 'facturacion',
                        leaf: true
                    }
                ]
                /* viewType: 'venta',
                leaf: true */
            },
            /*{
                text: 'Compras',
                iconCls: 'x-fa fa-truck',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'compra',
                leaf: true
            },*/
            {
                text: 'Inventario',
                iconCls: 'x-fa fa-cubes',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                //viewType: 'inventario',
                //leaf: true,
                children: [
                    {
                        text: 'Tienda',
                        iconCls: 'x-fa fa-cubes',
                        viewType: 'inventario',
                        leaf: true
                    },
                    {
                        text: 'Producto',
                        iconCls: 'x-fa fa-cube',
                        viewType: 'producto',
                        leaf: true
                    },

                    {
                        text: 'Pedido',
                        iconCls: 'x-fa fa-paper-plane',
                        viewType: 'proveedor-pedido',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Contactos',
                iconCls: 'x-fa fa-users',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'contacto',
                leaf: true
            },
            {
                text: 'Gastos',
                iconCls: 'x-fa fa-money',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'gastos',
                leaf: true
            },
            /*{
                text: 'Caja',
                iconCls: 'x-fa fa-server',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'servicioreserva',
                leaf: true
            },*/
            {
                text: 'Maestros',
                iconCls: 'x-fa fa-object-group',
                rowCls: 'nav-tree-badge',
                children: [
                    {
                        text: 'Generales',
                        iconCls: 'x-fa fa-street-view',
                        viewType: 'mantenimiento',
                        leaf: true
                    },
                    {
                        text: 'Sistema',
                        iconCls: 'x-fa fa-warning',
                        viewType: 'mantenimiento-sistema',
                        leaf: true
                    }
                ]
            },
            /* {
                text: 'Usuarios',
                iconCls: 'x-fa fa-user-secret',
                rowCls: 'nav-tree-badge',
                viewType: 'usuario',
                leaf: true
            }, */
            {
                text: 'Salir',
                iconCls: 'x-fa fa-sign-out',
                rowCls: 'nav-tree-badge', //nav-tree-badge-new',
                viewType: 'out',
                //routeId: 'dashboard', // routeId defaults to viewType
                leaf: true,

            },
        ]
    }//end root
});
