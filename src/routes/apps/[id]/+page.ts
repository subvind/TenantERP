
import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.fleetId) {
    return {
      fleetId: params.fleetId
    };
  }
  
  throw error(404, 'Not found');
}