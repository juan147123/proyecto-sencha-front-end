Ext.define('backoffice.view.dashboard.GraficoIngresosController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard-graficoingresos',
    onAxisLabelRender: function (axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        //let view = tools.Util.getById("graficoIngreso");
        
        return 'S/.' + layoutContext.renderer(label); //+ '%';
    },

    onSeriesTooltipRender: function (tooltip, record, item) {
        //return null;
        
        tooltip.setHtml(record.get('mesnombre') + ': S/.' + record.get('total').toString());
        
    },
   
    onItemHighlight: function (chart, newHighlightItem, oldHighlightItem) {
        this.setSeriesLineWidth(newHighlightItem, 4);
        this.setSeriesLineWidth(oldHighlightItem, 2);


    },

    setSeriesLineWidth: function (item, lineWidth) {

        if (item) {
            item.series.setStyle({
                lineWidth: lineWidth
            });
        }
    },

    onPreview: function () {
        var chart;

        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');

            return;
        }

        chart = this.lookup('chart');

        chart.preview();
    },
    onRefrescarIngresos: function () {
        var view = tools.Util.getById("graficoIngreso");
        view.mask('....cargando');
        tools.Util.getById('graficoIngreso').getStore().reload({
            callback: function (records, operation, success) {
                if (success) {
                    view.unmask();
                }
            },
            scope: this
        });
    },
    onChangeAnio: function (combo, newValue, oldValue, eOpts) {
        var view = tools.Util.getById("graficoIngreso");
        view.mask('....cargando');
        tools.Util.getById('graficoIngreso').getStore().load({
            params: {
                year: newValue
            },
            callback: function (records, operation, success) {
                if (success) {
                    view.unmask();
                }
            },
            scope: this
        });


    }



});
