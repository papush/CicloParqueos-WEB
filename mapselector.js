function mapsSelector() {
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
     (navigator.platform.indexOf("iPad") != -1) ||
     (navigator.platform.indexOf("iPod") != -1))
    window.open("http://maps.apple.com/maps?daddr=9.922186,-84.066635&amp;ll=");

  var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

    if (isAndroid)
    {
      window.open("geo:0,0?q=9.922186,-84.066635(CicloParqueos CR)");
    }

  else /* else use Google */
    window.open("https://www.google.com/maps/place/CicloParqueos+CR/@9.9218584,-84.0687803,17z/data=!3m1!4b1!4m5!3m4!1s0x8fa0e3672be54cd5:0x44af8029e2ec335f!8m2!3d9.9218584!4d-84.0665916");
}
