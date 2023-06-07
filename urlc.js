function urlc()
{
    var urlbox = document.getElementById("url");
    var urlarr = urlbox.value.split("/");
    var vid = urlarr[urlarr.length - 1];
    urlbox.value = "youtube.com/watch?v=" + vid;
}
  
