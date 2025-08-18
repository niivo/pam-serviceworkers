if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then((registration)=>{
        console.log("Service Worker registration sucessful!", registration);
    })
    .catch((error)=>{
        console.log("Error trying register Service Worker", error)
    });    
}
