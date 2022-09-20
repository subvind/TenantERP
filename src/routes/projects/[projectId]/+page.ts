
import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.projectId) {
    return {
      projectId: params.projectId
    };
  }
  
  throw error(404, 'Not found');
}