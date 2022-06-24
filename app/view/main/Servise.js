Ext.define('backoffice.view.main.Service', {
    alias: 'servicemain',
    //@Promise
    ShowNotifications: function () {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'GET',
                baseURL: Ext.manifest.api,
                url: 'notificationsdetalis',
            }).then((res) => {
                resolve({
                    "status_code": 200,
                    "data": res.data
                });

            })
            .catch((error) => {
                resolve({
                    "status_code": error.response.status,
                    "message": error.response.message
                });
            });
        });
    },
    UpdateReadNotification: function (id) {
        return new Ext.Promise(function (resolve, reject) {
            axios({
                method: 'PUT',
                baseURL: Ext.manifest.api,
                url: 'notificationsread/'+id,
            }).then((res) => {
                resolve({
                    "status_code": 200,
                    "data": res.data
                });

            })
            .catch((error) => {
                resolve({
                    "status_code": error.response.status,
                    "message": error.response.message
                });
            });
        });
    }
});