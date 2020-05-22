import './byeie' // loučíme se s IE
import { gCode } from './gcode'

let host = 'https://data.irozhlas.cz'
if (window.location.hostname === 'localhost') {
  host = 'http://localhost'
}

// mapa
const map = new mapboxgl.Map({
    container: "map",
    style: "https://data.irozhlas.cz/mapa-domu/map_styl/style.json",
    zoom: 8,
    maxZoom: 13,
    attributionControl: false,
    center: [16.6076956, 49.1934411],
  });

map.getCanvas().style.cursor = 'default'
map.fitBounds([[15.59, 49.40],[17.67,48.75]])
  
  map.addControl(new mapboxgl.AttributionControl({
    compact: true,
    customAttribution: "obrazový podkres <a target=\"_blank\" href=\"https://samizdat.cz\">Samizdat</a>, data <a target=\"_blank\" href=\"http://eagri.cz/public/web/ukzuz/portal\">ÚKZÚZ</a>",
  }));
  
  map.scrollZoom.disable(); // zoom myší teprve až po interakci s mapou
  map.on("click", (e) => {
    map.scrollZoom.enable();
  });
  
  map.addControl(new mapboxgl.NavigationControl(), "top-left"); // buttonky pro zoom a rotaci
  
  
  map.on("load", () => {
    //legenda
    var i;
    var colors = ['#de2d26', '#3182bd', '#bdbdbd'];
    var layers = ['možný rozhoz jedu (při splnění dalších podmínek)', 'zakázaný rozhoz jedu', 'nezjištěno'];

    for (i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var color = colors[i];
        var item = document.createElement('div');
        var key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
      
        var value = document.createElement('span');
        value.innerHTML = layer;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    }
    map.addLayer({
      id: "hrabos",
      type: "fill",
      source: {
        type: "vector",
        tiles: [host + "/hrabos-mapa/tiles/{z}/{x}/{y}.pbf"],
      },
      "source-layer": "to_map",
      paint: {
        "fill-color": [
          'match', ['get', 'prah_skodlivosti'], 
          'ano', '#de2d26',
          'ne', '#3182bd',
          '#bdbdbd'
      ],
        "fill-opacity": 0.8,
        "fill-outline-color": "hsla(59, 0%, 0%, 0.15)",
      },
    });

    map.on('mousemove', function(e) {
        var dpb = map.queryRenderedFeatures(e.point, {
          layers: ['hrabos']
        });
        if (dpb.length > 0) {
            document.getElementById('pd').innerHTML = `Hospodář: ${dpb[0].properties.uziv}<br>Rozloha pozemku: ${dpb[0].properties.vymera_ha} ha<br>Plodina: ${dpb[0].properties.plodina}<br>Aktivní nory hraboše (ha): ${dpb[0].properties.aktivni_nory}<br>Monžý rozhoz jedu (při splnění dalších podmínek): ${dpb[0].properties.prah_skodlivosti}`
          } else {
            document.getElementById('pd').innerHTML = '<p>Vyberte pozemek na mapě.</p>';
        }        
    });
  
    map.addLayer({
      id: "labels",
      source: {
        tiles: [
          "https://interaktivni.rozhlas.cz/tiles/ton_l2/{z}/{x}/{y}.png",
        ],
        type: "raster",
        tileSize: 256,
      },
      type: "raster",
    });
  });
  
gCode(map)
