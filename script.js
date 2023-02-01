require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], (Map, MapView, FeatureLayer) => {
        const map = new Map({
          basemap: "hybrid"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
        });
        var feature1 = new FeatureLayer({
          portalItem: {
            id: 'c412b7f7235243b5852a959ae5eb7c4d'
          }
        });
      map.add(feature1);
        
        var feature2 = new FeatureLayer({
          portalItem: {
            id: '6dc80a28653a4a298e0a4753b09b283a'
          }
        });
       map.add(feature2);
});
