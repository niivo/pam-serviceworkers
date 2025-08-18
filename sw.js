self.addEventListener("install", (event) =>{
    caches.open("asd").then((cache) =>{
        console.log("cahce opened")
        cache.add("index.html")
    });
});