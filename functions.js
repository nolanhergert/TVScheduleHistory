
function encodeURICustom(url) {
  url = url.replace(/ /g, "+");
  //url = url.replace(/&/g, "&amp;");
  return url;
}
function decodeURICustom(url) {
  //url = url.replace(/\+/g, " ");
  //url = url.replace(/&amp;/g, "&");
  return url;
}

function dbLoad(string_in, db, years, networks, show_names) {
  var lines = string_in.split("\r\n");
  for (var i = 1; i < lines.length; i++) {
    values = lines[i].split("\t");
    years.add(values[0]);
    networks.add(values[1]);
    show_names.add(values[5]);
    db.push(values);
  }
}

function dbQuery(db, yearsStr, networksStr, showNameStr) {
  var yearStart = 0;
  if (yearStr != "") {
    yearStart, yearEnd = yearsStr.split('-')
  }
  for (var i = 0; i < db.length; i++) {

    values = lines[i].split("\t");
    years.add(values[0]);
    networks.add(values[1]);
    show_names.add(values[5]);
    db.push(values);
  }
}