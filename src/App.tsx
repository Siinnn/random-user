import React from 'react';
import PersonList from './components/PersonList'; 
import {} from './App.css'
const App: React.FC = () => {
  return (
    <div>
      <h1>Liste des personnes</h1>
      <PersonList />
    </div>
  );
}

export default App;
