import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
import View from "ol/View";
import '../map.css'
import { get as getProjection } from 'ol/proj';
import { baseLayerName, MAP_CENTER, MAP_DEFAULT_ZOOM } from "../map";
import { PROJECTION_4326, registerBGS2005Projection } from "../registerProj";
import { useRef, useState } from "react";
import { useMount } from "react-use";
import { OverviewMap, defaults as defaultControls } from 'ol/control';

registerBGS2005Projection();

const BGS2005 = getProjection(PROJECTION_4326);

const view = new View({
  projection: BGS2005,
  center: MAP_CENTER,
  zoom: MAP_DEFAULT_ZOOM,
  maxZoom: 23,
  minZoom: 6,
});


const MapAddress: React.FC = () => {
  const [map, setMap] = useState<Map | undefined>();

  const baseTileMapsRef = useRef<any>({
    [baseLayerName]: {
      title: 'OSM',
      layerName: baseLayerName,
      layer: new TileLayer({
        source: new OSM(),
        zIndex: 0,
      }),
    },
  });

  const overviewMapControl = new OverviewMap({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
  });

  useMount(() => setMap(new Map({
    controls: defaultControls().extend([overviewMapControl]),
    target: "map",
    layers: [
      baseTileMapsRef.current[baseLayerName].layer
    ],
    view: view,
  })))


  return <div id="map" />
};


export default MapAddress;