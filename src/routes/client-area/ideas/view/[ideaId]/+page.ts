
import { error } from '@sveltejs/kit';
  
export function load({ params }: any) {
  if (params.ideaId) {
    return {
      ideaId: params.ideaId
    };
  }
  
  throw error(404, 'Not found');
}