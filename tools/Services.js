Ext.define('tools.Services',{
    singleton: true,
    getConfig:function(){
        var firebaseConfig = {
            apiKey: "AIzaSyCJU-_5fuUlJKtqCxlgF5RX8imXPXbcGbA",
            authDomain: "taxiwaa-9303e.firebaseapp.com",
            databaseURL: "https://taxiwaa-9303e-default-rtdb.firebaseio.com",
            projectId: "taxiwaa-9303e",
            storageBucket: "taxiwaa-9303e.appspot.com",
            messagingSenderId: "464273438621",
            appId: "1:464273438621:web:33af1b02049acf9ea16174",
            measurementId: "G-FT7QC0WG18"
          };
        return firebaseConfig;
    },
});