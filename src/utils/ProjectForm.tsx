import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useToast } from '@chakra-ui/react';

interface ProjectFormProps {
  onAddProject: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [langsInput, setLangsInput] = useState('');
  const [langs, setLangs] = useState<string[]>([]);
  const [githubUrl, setGithubUrl] = useState('');
  const [siteUrl, setSiteUrl] = useState('');

  const firestore = firebase.firestore();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const projectRef = firestore.collection('Projects');
      const docRef = await projectRef.add({
        Title: title,
        Body: body,
        Langs: langs,
        GitHubUrl: githubUrl,
        SiteUrl: siteUrl,
        id: '', // Placeholder for the document ID
      });

      // Update the document with the generated ID
      await docRef.update({ id: docRef.id });

      setTitle('');
      setBody('');
      setLangsInput('');
      setLangs([]);
      setGithubUrl('');
      setSiteUrl('');

      toast({
        title: 'Project Added',
        description: 'Your project has been successfully added!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      onAddProject(); // Call the callback to update the project list
    } catch (error) {
      console.error('Error adding project:', error);

      toast({
        title: 'Error',
        description: 'An error occurred while adding the project.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLangsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLangsInput(e.target.value);
    setLangs(e.target.value.split(',').map(lang => lang.trim()));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mt-10">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Body:</label>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Langs Used (comma-separated):</label>
        <input
          type="text"
          value={langsInput}
          onChange={handleLangsInputChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">GitHub URL:</label>
        <input
          type="text"
          value={githubUrl}
          onChange={e => setGithubUrl(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Site URL:</label>
        <input
          type="text"
          value={siteUrl}
          onChange={e => setSiteUrl(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
