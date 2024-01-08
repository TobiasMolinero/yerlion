var banner = document.getElementById('banner')
var n = 1;

if(window.innerWidth > 1023){
    setInterval(() => {
        if(n === 5){
            n = 1;
        }
        banner.style.backgroundImage = `url(./assets/banner${n}.webp)`
        n ++
    }, 5000);
}
