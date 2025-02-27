import { supabase } from './supabase';
import type { ExperienceFromDB } from './types';



export async function getExperiences(): Promise<ExperienceFromDB[]> {
  const { data: experiences, error } = await supabase
    .from('experiences')
    .select('*')
    .order('start_date', { ascending: false });

  if (error || !experiences) {
    console.error('Error fetching experiences:', error);
    return [];
  }

  return experiences;
}


