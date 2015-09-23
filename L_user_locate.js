// SetView to thon location
map.locate({setView: true});
function onLocationFound(e) {
        L.marker(e.latlng).addTo(map)
}
map.on('locationfound', onLocationFound);
function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);