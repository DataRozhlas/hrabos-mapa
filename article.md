title: "Hraboše do koše"
perex: "Myši."
published: "26. března 2019"
styles: ["https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css"]
libraries: ["https://api.tiles.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js"] #jquery, d3, highcharts, datatables
options: [noheader, nopic] #wide, noheader (, nopic)
---

Mapa ukazuje, kde v polovině dubna evidoval Ústřední kontrolní a zkušební ústav zemědělský kalamitní přemožení hraboše, tedy pětinásobně překročení prahu škodlivosti. Práh je nyní na jaře stanoven na 50 aktivních východů z hraboších nor na jeden hektar, aby úřad kývl na rozhoz jedu, musí tedy na jednom hektaru být alespoň 250 aktivních nor.

Nejde ale o jedinou podmínku, kterou musí zemědělec splnit, aby mohl rozhodit na svá pole Stutox: musí také dodržovat jeho návod k použití spolu s dalšími omezeními, které zemědělský ústav [stanovil ve svém nařízení]( http://eagri.cz/public/web/file/646035/Narizeni_o__povoleni_omezeneho_a_kontrolovaneho_pouziti_POR_hrabos_polni_6_3_2020.pdf).

V neposlední řadě nesmí zapomínat, že se na něj stále vztahuje [zákon o ochraně přírody](https://www.zakonyprolidi.cz/cs/1992-114?text=ochran%C4%9B+krajiny+a+p%C5%99%C3%ADrody). Pokud by tedy kvůli jedu uhynuli na jeho pozemcích chránění živočichové, hrozila by mu [pokuta](https://www.zakonyprolidi.cz/cs/1992-114/zneni-20180101#p87-3-b) a v krajním případě [i vězení](https://www.zakonyprolidi.cz/cs/2009-40/zneni-20191201#f3920891).


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