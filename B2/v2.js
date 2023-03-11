function CapNhat(){
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById('h1_time').innerHTML = time;
}
setInterval(CapNhat, 1000)