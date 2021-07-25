import proj4 from 'proj4';
import { register } from 'ol/proj/proj4';

export const PROJECTION_4326 = 'EPSG:4326';

export const registerBGS2005Projection = () => {
  proj4.defs(
    PROJECTION_4326,
    '+proj=lcc +axis=neu +lat_0=42.6678756833333 +lon_0=25.5 +lat_1=42 +lat_2=43.3333333333333 +x_0=500000 +y_0=4725824.3591 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
  );
  register(proj4);
};