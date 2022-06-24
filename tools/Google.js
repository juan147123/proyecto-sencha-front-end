Ext.define('tools.Google', {
    singleton: true,
    requires: ['Ext.window.Toast'],
    sendNotification: function (notifacion) {
        me = this;
        var data = null;
        Ext.Ajax.request({
            url: Ext.manifest.api+'notificacion',
            jsonData: notifacion,
            method: 'POST',
           // async: false,
           // cors: true,
            success: function (response) {
              data = Ext.JSON.decode(response.responseText);
            }
        });
        return data;
    },
})