importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');

firebase.initializeApp({

    apiKey: "AIzaSyCWfIigiDUNbb9nBTztwBGB25WuYO8wteE",
    authDomain: "pushnotification-67cb2.firebaseapp.com",
    projectId: "pushnotification-67cb2",
    storageBucket: "pushnotification-67cb2.appspot.com",
    messagingSenderId: "333547889629",
    appId: "1:333547889629:web:e6f1940b0565fa48cc8c34"
  });

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(' Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.ServiceWorkerRegistration.showNotification(notificationTitle,
    notificationOptions);
});