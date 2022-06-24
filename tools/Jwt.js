Ext.define('tools.Jwt',{
    singleton: true,
    ippublic:'',
    singToken:function(_idtoken){
        _data = {
            idToken : _idtoken,
            typeOperator : 'conductor'
        };
        _url = Ext.manifest.api + 'auth/login';
        _method = 'POST';
        _rsp = tools.Util.getAjaxOnly(_data, _url, _method);
        this.saveBearer(_rsp.token)
        return _rsp;
    },
    setIpPublic(_ip){
        this.ippublic=_ip;

    },
    getIpPublic(){
        return this.ippublic;
    },
    saveToken:function(_data){
        store = Ext.data.StoreManager.lookup('stJwt');
        store.removeAll();
        store.add(_data);
        store.sync();
    },
    saveBearer:function(_jwt_token){
        store  = Ext.data.StoreManager.lookup('stJwt');
        record = store.data.getAt(0)
        record.set('bearer',"Bearer " +_jwt_token);
        store.update();
        store.sync();
    },
    saveBusiness:function(_negocio){
        store  = Ext.data.StoreManager.lookup('stJwt');
        record = store.data.getAt(0)
        record.set('idbusiness',_negocio);
        store.update();
        store.sync();
    },
    getBearer:function(){
        try {
            store  = Ext.data.StoreManager.lookup('stJwt');
            record = store.data.getAt(0);
            return  record.get("token");
        } catch (error) {
            return 0;
        }
    },
    getBusiness:function(){
        try {
            store  = Ext.data.StoreManager.lookup('stJwt');
            record = store.data.getAt(0);
            return  record.get("idbusiness");
        } catch (error) {
            return 0;
        }
    },
    getStore:function(){
        try {
            store  = Ext.data.StoreManager.lookup('stJwt');
            record = store.data.getAt(0);
            return  record.get("store");
        } catch (error) {
            return 0;
        }
    },
    getUser:function(){
        try {
            store  = Ext.data.StoreManager.lookup('stJwt');
            record = store.data.getAt(0);
            return  record.get("user");
        } catch (error) {
            return 0;
        }
    },
    getUserId:function(){
        try {
            store  = Ext.data.StoreManager.lookup('stJwt');
            record = store.data.getAt(0);
            return  record.get("id");
        } catch (error) {
            return 0;
        }
    }


});