import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component<{}, { persons: any[] }> {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10') 
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
        console.log(persons);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }

  render() {
    return (
        
      <ul>
        {
            
          this.state.persons.map(person => 
            <li key={person.login.uuid}>{`${person.name.first} ${person.name.last}`}</li>
          )
        }
      </ul>
    );
  }
}
