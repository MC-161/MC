import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Project } from '../types/types';

const useProjectCollection = (): Project[] => {
  const [projects, setProjects] = useState<Project[]>([]);
  const firestore = firebase.firestore();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsSnapshot = await firestore.collection('Projects').get();
        const projectsData: Project[] = [];

        projectsSnapshot.forEach((doc) => {
          const projectData = doc.data() as Project;
          projectData.id = doc.id;
          projectsData.push(projectData);
        });

        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects collection:', error);
      }
    };

    fetchProjects();
  }, []);
  return projects;
};

export default useProjectCollection;
