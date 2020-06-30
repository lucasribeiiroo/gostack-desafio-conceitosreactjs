import React, { useEffect, useState } from "react";
import { getRepositories, addRepository, deleteRepository } from './services/methods';

import "./styles.css";

const repository =  {
  id: "12345",
  url: "https://github.com/josepholiveira",
  title: "Exemplo",
  techs: ["React", "Node.js", "React Native"],
}

function App() {

  const [repositories, setRepositories] = useState([repository]);

  useEffect(() => {
    const handleGetRepositories = async () => {
       const { data } = await getRepositories(); 
      setRepositories(data);
    }
    handleGetRepositories();
  }, [])

  function handleAddRepository() {
    const newRepository = {
      id: "123",
      url: "https://github.com/josepholiveira",
      title: "Desafio ReactJS",
      techs: ["React", "Node.js"],
    }
    addRepository(newRepository);
    setRepositories([...repositories, newRepository]);
  }

  function handleRemoveRepository(id) {
    deleteRepository(id);
    const newRepositories = repositories.filter(repository => repository.id !== id);
    setRepositories(newRepositories);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
            <li key={repository.id}>{repository.title}<button onClick={() => handleRemoveRepository(repository.id)}>Remover</button></li>
        ))}
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
