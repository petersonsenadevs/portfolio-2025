import { supabase } from './supabase';
import type { Project, ProjectFromDB, ExperienceFromDB } from './types';
import { transformProject } from './transform';


export async function getProjects():Promise<ProjectFromDB[]>{
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

  if(error || !projects){
    console.error('Error fetching projects:', error);
    return [];
  }
return projects ? projects.map(project => project.id) : [];
}

export async function getAllProjectsIDs(): Promise<{ id: string }[]> {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('id')
    ;

  if (error || !projects) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return projects;
}
export async function getProjectById(id: string): Promise<Project | null> {
  const { data: project, error } = await supabase
    .from('projects')
    .select(`
      *,
      project_features (
        feature_en,
        feature_es
      )
    `)
    .eq('id', id)
    .single();

  if (error || !project) {
    console.error('Error fetching project:', error);
    return null;
  }

  return transformProject(project);
}

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

// Skill transformations
