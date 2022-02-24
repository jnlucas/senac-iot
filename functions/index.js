const functions = require('firebase-functions');
const admin = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyCM8jGVAuLInEF5DoDcT8l9Mwy13bI4dAs",
    authDomain: "senac-30adc.firebaseapp.com",
    databaseURL: "https://senac-30adc-default-rtdb.firebaseio.com",
    projectId: "senac-30adc",
    storageBucket: "senac-30adc.appspot.com",
    messagingSenderId: "478514850767",
    appId: "1:478514850767:web:4745799d3ff848943700ba",
    measurementId: "G-43QGZFTTKR"
  };

   admin.initializeApp(firebaseConfig);


   exports.gravarBanco = functions.https.onRequest((request,response) => {
    
    var temperatura = '0';
    
    if(request.method == 'GET'){
        if(request.query.temperatura){
            temperatura = request.query.temperatura;
        }
    }else{
        if(request.body.temperatura){
            temperatura = request.body.temperatura;
        }
    }
    
   
    
    admin.database().ref("text").set(temperatura); 
    response.send(temperatura)

    

})


