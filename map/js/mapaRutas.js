var gpxEO = 'data/gpx/GAME-O.gpx'
var gpxNS = 'data/gpx/GAMN-S.gpx'
var gpxNESO = 'data/gpx/GAMNE-SO.gpx'
var gpxNOSE = 'data/gpx/GAMNO-SE.gpx'
/*var gpxSN = 'data/gpx/GAMS-N.gpx'
var gpxSENO = 'data/gpx/GAMSE-NO.gpx'
var gpxSONE = 'data/gpx/GAMSO-NE.gpx'*/
function displayinfoRutas(title,info,link) {
  x = document.getElementById('title')
  x.innerHTML = title
  x = document.getElementById('spot')
  x.innerHTML = info
  x = document.getElementById('coordenadas')
  x.innerHTML = "Ver Ruta en Strava"
  x.setAttribute('href',link)
}
var LgpxEO = new L.GPX(gpxEO, {
  async: true,
  marker_options: {
    startIconUrl: 'css/images/pin-icon-start.png',
    endIconUrl: 'css/images/pin-icon-end.png'
  }
}).on('click', function(e) {
whenClicked(e)
displayinfoRutas('Ruta Este-Oeste','Para quienes van a ______','https://www.strava.com/routes/6298692')
}).addTo(map)

var LgpxNS = new L.GPX(gpxNS, {
  async: true,
  marker_options: {
    startIconUrl: 'css/images/pin-icon-start.png',
    endIconUrl: 'css/images/pin-icon-end.png'
  }
}).on('click', function(e) {
  whenClicked(e)
  displayinfoRutas('Ruta Norte-Sur','Para quienes van a ______','https://www.strava.com/routes/6361711')
}).addTo(map)

var LgpxNESO = new L.GPX(gpxNESO, {
  async: true,
  marker_options: {
    startIconUrl: 'css/images/pin-icon-start.png',
    endIconUrl: 'css/images/pin-icon-end.png'
  }
}).on('click', function(e) {
  whenClicked(e)
  displayinfoRutas('Ruta NorEste-SurOeste','Para quienes van a ______','https://www.strava.com/routes/6361761')
}).addTo(map)

var LgpxNOSE = new L.GPX(gpxNOSE, {
  async: true,
  marker_options: {
    startIconUrl: 'css/images/pin-icon-start.png',
    endIconUrl: 'css/images/pin-icon-end.png'
  }
}).on('click', function(e) {
  whenClicked(e)
  displayinfoRutas('Ruta NorOeste-SurEste','Para quienes van a ______','https://www.strava.com/routes/6361663')
}).addTo(map)


map.whenReady(function(feature, layer) {
  var types = ["E-O","N-S","NE-SO","NO-SE"]
  var checkboxes = []

  for (var i = 0; i < types.length; i++) {
    // Create an an input checkbox and label inside.
    var item = filters.appendChild(document.createElement('li'));
    var label = item.appendChild(document.createElement('label'));
    var checkbox = label.appendChild(document.createElement('input'));
    var checkboxDiv =  label.appendChild(document.createElement('div'));
    var chIcon = checkboxDiv.appendChild(document.createElement('i'));
    var labelDiv =  label.appendChild(document.createElement('div'));
    var title =   labelDiv.appendChild(document.createElement('div'));

    checkbox.type = 'checkbox'
    checkbox.id = types[i]
    checkbox.checked = true
    label.setAttribute('class','label-checkbox item-content')
    checkboxDiv.setAttribute('class','item-media')
    chIcon.setAttribute('class', 'icon icon-form-checkbox')
    labelDiv.setAttribute('class', 'item-inner')
    title.innerHTML = types[i]
    title.setAttribute('for', types[i])
    title.setAttribute('class', 'item-title')

    checkbox.addEventListener('change', updateBoxes)
    checkboxes.push(checkbox)
  }

  function updateBoxes() {
    var enabled = {};

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) enabled[checkboxes[i].id] = true;
      console.log(enabled[checkboxes[i].id])
    }

    if (checkboxes[4].id in enabled) {
      LgpxNOSE.addTo(map)
    } else {
      map.removeLayer(LgpxNOSE)
    }
    if (checkboxes[3].id in enabled) {
      LgpxNESO.addTo(map)
    } else {
      map.removeLayer(LgpxNESO)
    }


    if (checkboxes[2].id in enabled) {
      LgpxNS.addTo(map)
    } else {
      map.removeLayer(LgpxNS)
    }
    if (checkboxes[1].id in enabled) {
      LgpxEO.addTo(map)
    } else {
      map.removeLayer(LgpxEO)
    }

    if (checkboxes[0].id in enabled) {
      if (map.hasLayer(layerDistancia)) {
        map.removeLayer(layerDistancia)
      }
      map.addLayer(todas)
    } else {
        map.removeLayer(todas)
    }
  }
})
