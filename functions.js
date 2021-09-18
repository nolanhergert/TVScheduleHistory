
function encodeURICustom(url) {
  url = url.replace(/ /g, "+");
  url = url.replace(/&/g, "&amp;");
  return url;
}
function decodeURICustom(url) {
  //url = url.replace(/\+/g, " ");
  url = url.replace(/&amp;/g, "&");
  return url;
}