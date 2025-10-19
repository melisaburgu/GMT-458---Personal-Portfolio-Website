window.addEventListener('DOMContentLoaded', () => {
  // Ankara koordinatları
  const ankaraCoords = ol.proj.fromLonLat([32.8597, 39.9208]);

  // OpenLayers harita
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({ source: new ol.source.OSM() })
    ],
    view: new ol.View({
      center: ankaraCoords,
      zoom: 10
    })
  });

  // Marker ekleme
  const marker = new ol.Feature({
    geometry: new ol.geom.Point(ankaraCoords)
  });

  const vectorSource = new ol.source.Vector({ features: [marker] });
  const markerLayer = new ol.layer.Vector({ source: vectorSource });
  map.addLayer(markerLayer);
});
