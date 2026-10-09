import { Alojamiento } from './alojamiento.model';
import { Resena } from './resena.model';

/** Estructura del archivo marketplace-data.json */
export interface MarketplaceData {
  alojamientos: Alojamiento[];
  resenas: Resena[];
}
