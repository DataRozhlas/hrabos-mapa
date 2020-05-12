title: "Hraboše do koše"
perex: "Myši."
published: "26. března 2019"
styles: ["https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css"]
libraries: ["https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js"] #jquery, d3, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)
---

<wide>
<form action="?" id='frm-geocode'>
	  <div class="inputs">
	    <input type="text" id="inp-geocode" placeholder="Zadejte obec či adresu...">
	    <input type="submit" id="inp-btn" value="Najít">
	  </div>
	</form>
<div id="map"><div class='map-overlay' id='legend'></div></div>
<div id='pd'><p>Vyberte pozemek na mapě!</p></div>
</wide>