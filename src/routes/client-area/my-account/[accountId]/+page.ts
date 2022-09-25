
import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.vehicleId) {
    return {
      vehicleId: params.vehicleId
    };
  }
  
  throw error(404, 'Not found');
}