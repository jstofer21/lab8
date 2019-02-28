function initMap() {
	// add your code here
  L.mapquest.key = 'ZEPREXUQHTiOT4S0aSaFuCdKl9i6eASC';

  var map = L.mapquest.map('map', {
    center: [32.88,-117.236],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12,
    zoomControl: false
  });
  //$("#map") = map;
  L.marker([32.88,-117.24]).addTo(map);

}
