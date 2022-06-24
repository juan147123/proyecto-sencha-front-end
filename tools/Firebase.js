Ext.define('tools.Firebase',{
    singleton: true,
    getConfig:function(){
        var firebaseConfig = {
            apiKey : Ext.manifest.apiKey,
            authDomain : Ext.manifest.authDomain,
            databaseURL : Ext.manifest.databaseURL,
            projectId : Ext.manifest.projectId,
            storageBucket : Ext.manifest.storageBucket,
            messagingSenderId : Ext.manifest.measurementId,
            appId : Ext.manifest.appId,
            measurementId : Ext.manifest.messagingSenderId
          };
        return firebaseConfig;
    },
    connect:function(){
        firebaseConfig = this.getConfig();
        firebase.initializeApp(firebaseConfig);
        console.log("Connect firebase");
    },
    loginUserPass(email, password, view){
        let user;
        let errorCode;
        let store;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
             user = userCredential.user;
             user.getIdToken().then(function(idToken) {  
                _data = {
                    idtoken : idToken,
                    uid   : user.uid,
                    email : user.email,
                    isAnonymous: user.isAnonymous,
                    emailVerified: user.emailVerified,
                    email : user.email,
                    bearer : ''
                };
                tools.Jwt.saveToken(_data);
                store = Ext.data.StoreManager.lookup('stJwt')
                tools.Jwt.singToken(store.data.getAt(0).get('idtoken'))

                axios.defaults.baseURL = Ext.manifest.api;
                axios.defaults.headers.common['Authorization'] = tools.Jwt.getBearer();
                axios.defaults.headers.common['Content-Type']  = 'application/json';

                view.unmask();
                view.close();
                body = document.getElementById('mybody'); 
                body.removeAttribute("id");
                Ext.create('backoffice.view.main.Main');

             });
            
        })
        .catch((error) => {
            errorCode = error.code;
            errorMessage = error.message;
            console.log(errorCode);
            view.unmask();
            switch (errorCode) {
                case 'auth/wrong-password':
                        tools.Util.setToast(Ext.manifest.AppName, "Password Incorrecto",1);
                        
                    break;
                case 'auth/user-not-found':
                        tools.Util.setToast(Ext.manifest.AppName, "Usuario Incorrecto",1);
                        
                    break;
            }
        });
    
    },
    createUsuarioFirebase: function(email, password, view){
       // return new Ext.Promise(function(resolve,reject){
            try {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    tools.Util.getByName('uid').setValue(user.uid)
                    view.unmask();
                      
                })
                .catch((error) => {
                    //return error;
                    view.unmask();

                });
            } catch (error) {

                view.unmask();
                //return {error:-1} ;
            }
     //   });
    },
    _getFireStore:function(){
        return firebase.firestore();
    },
    leerCollection:function(_nombre){
        me = this;
        return new Ext.Promise(function(resolve,reject){
            let locations = tools.Util.getStoreById('stLocations');
            locations.removeAll();
            let i = locations.getCount();
            me._getFireStore().collection(_nombre).get().then((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    let _data = doc.data();
                    locations.insert(i++,{
                        fcmToken : _data.fcmToken,
                        status   : _data.status,
                        position : _data.position
                    })
                   
                });
                resolve(locations);
            });

         
        })//end Promise;
    }


});