importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyA7fe9yCz51yoZ6p8oX2yl9RI8qLAm1XQc",
    authDomain: "mysocoendo-129cd.firebaseapp.com",
    projectId: "mysocoendo-129cd",
    storageBucket: "mysocoendo-129cd.appspot.com",
    messagingSenderId: "435583050699",
    appId: "1:435583050699:web:41969356b18cf8ac8fcc4e",
    measurementId: "G-GFNQNQ7NRR"
});
firebase.messaging().usePublicVapidKey("BBoa0lMZJwcbggfIzbBvxkgk7SnV1QTdPpg-HqXe6bwyRsCaHlcYE6CnMgQd5ce7Zp5XLNF4Z_Uf6iaBfzHqLcs");
const messaging = firebase.messaging();
firebase.messaging()
    .getToken()
    .then(function (token) {
        TokenElem.innerHTML = "token is : " + token;
    })
    .catch(function (err) {
        ErrElem.innerHTML = ErrElem.innerHTML + "; " + err
        console.log("Unable to get permission.", err);
    });

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});