self.addEventListener("install", (event) =>{
    caches.open("asd").then((cache) =>{
        console.log("cahce opened")
        cache.addAll([
            "index.html", 
            "manifest.json",
            "script.js", 
            "sw.js",
            "style.css",
            "icons/ic_launcher.png",
            "icons/playstore.png",
            "images/gatoolho.jpg",
            "images/dedo.gif",
            "images/joia.jpg",
            "images/titulo.gif"
        ])
        });
        });
            self.addEventListener("fetch", (event) => {
                event.respondWith(
                    caches.match(event.request).then((response)=>{
                        return response || fetch(event.request);
                    })
                )
            })