import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import { transformProject } from '../../lib/transform';

export const GET: APIRoute = async () => {
  try {
    const { data: projects, error } = await supabase
      .from('projects')
      .select(`
        *,
        project_features (
          feature_en,
          feature_es
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const transformedProjects = projects.map(transformProject);

    return new Response(JSON.stringify(transformedProjects), {
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