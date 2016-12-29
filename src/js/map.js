ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [34.865966, -111.763806],
        zoom: 15
    });
    myMap.container.fitToViewport();
}