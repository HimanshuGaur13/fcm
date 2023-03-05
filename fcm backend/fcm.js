const express = require('express');
var FCM = require('fcm-node');
var serverKey = "AAAATakA490:APA91bE5b2NX7YI9y1jB603abBBZ3G2BQXHamx4z0_ZDoi9rAstw7iyWLV8dotrcAIas4vlbvEYgkRx6Svp4VK-rt_D5H-fNgLIK5gxwocSjaTC6fQ2vaMrDg6aFuHWCD3PfbeWe1hwN"
var app = express();
var cors=require('cors')
const port = process.env.express||7400;


app.use(express.json())
app.use(express.urlencoded({extended:false}));



app.post('/fcm', async(req,res)=>{
var fcm = new FCM(serverKey);
var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'eT_ZngqUlfF41QB0-SZnOV:APA91bE-T25oaJpHqsfvp3lHXUVmCPjE_MgGUhVWjNWFH2XEJw520DjkvoUmqt-NPSbZHGjJAJPBaJl6r19ThyQ0rW3cSTAP56-X6PHNIe7sWrvo4sP_7WouRNIusg9x4YGYq1qPL-Ea', 
    collapse_key: 'your_collapse_key',
    
    notification: {
        title: req.body.title, 
        body: req.body.body 
    },
    
    // data: {  //you can send only notification or only data(or include both)
    //     my_key: 'AIzaSyCWfIigiDUNbb9nBTztwBGB25WuYO8wteE',
    //     my_another_key: 'my another value'
    // }
};

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
})
})



app.use(cors)
app.listen(port,()=>{
    console.log('server is listening on port' , port)
});