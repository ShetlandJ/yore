MapView = function(markers){
this.render(markers);
};

MapView.prototype.render = function (markers) {
    console.log(markers);

    markers.forEach(function(marker){
        mainMap = addMarker(lat: marker.latlng[0], lng: marker.latlng[1]);
    });
};

MapView.prototype.moveLocation = function (location) {

};

module.exports = MapView;
