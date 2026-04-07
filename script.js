document.addEventListener("DOMContentLoaded", function () {
    const ua = navigator.userAgent;

    let browser = "Unknown";
    let version = "";

    if (ua.includes("Firefox/")) {
        browser = "Firefox";
        version = ua.split("Firefox/")[1].split(" ")[0];
    } 
    else if (ua.includes("Edg/")) {
        browser = "Edge";
        version = ua.split("Edg/")[1].split(" ")[0];
    } 
    else if (ua.includes("Chrome/")) {
        browser = "Chrome";
        version = ua.split("Chrome/")[1].split(" ")[0];
    } 
    else if (ua.includes("Safari/") && ua.includes("Version/")) {
        browser = "Safari";
        version = ua.split("Version/")[1].split(" ")[0];
    }

    document.getElementById("ua").textContent =
        browser + " " + version;
});

function getPlatform() {
  var p = navigator.platform.toLowerCase();

  if (p.indexOf("win") !== -1) return "Windows";
  if (p.indexOf("mac") !== -1) return "Mac";
  if (p.indexOf("linux") !== -1) return "Linux";
  if (p.indexOf("android") !== -1) return "Android";
  if (p.indexOf("iphone") !== -1 || p.indexOf("ipad") !== -1) return "iOS";

  return navigator.platform; // fallback
}

document.getElementById("platform").innerHTML = getPlatform();

fetch("https://worldtimeapi.org/api/ip")
  .then(function(res) { return res.json(); })
  .then(function(data) {
    document.getElementById("servertime").innerHTML =
      data.utc_datetime;
  })
  .catch(function() {
    document.getElementById("servertime").innerHTML = ":(";
  });