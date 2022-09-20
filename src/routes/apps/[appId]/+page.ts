
import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.appId) {
    return {
      appId: params.appId
    };
  }
  
  throw error(404, 'Not found');
}