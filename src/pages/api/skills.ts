import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase';
import {transformSkill} from '../../lib/transform';

export const prerender = false; 

export const GET: APIRoute = async () => {
  try {
    const { data: skills, error } = await supabase
      .from('skills')
      .select('*')
      .order('category', { ascending: true })
      .order('name', { ascending: true });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const transformedSkills = skills.map(transformSkill);

    return new Response(JSON.stringify(transformedSkills), {
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