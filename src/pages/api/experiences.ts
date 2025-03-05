import type { APIRoute } from 'astro';
import { getExperiences } from '../../lib/api';
import { transformExperience } from '../../lib/transform';

export const prerender = false; 

export const GET: APIRoute = async () => {
  try {
    const experiences = await getExperiences();

    const transformedExperiences = experiences.map(transformExperience);

    return new Response(JSON.stringify(transformedExperiences), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}