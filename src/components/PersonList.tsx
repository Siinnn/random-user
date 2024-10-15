import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomUser = () => {
  const [persons, setPersons] = useState([]);
  const [expandedUsers, setExpandedUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=10");
        const personsData = res.data.results;
        setPersons(personsData);
        console.log(personsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, []);

  const handleExpand = (index) => {
    if (expandedUsers.includes(index)) {
      setExpandedUsers(expandedUsers.filter((i) => i !== index));
    } else {
      setExpandedUsers([...expandedUsers, index]);
    }
  };

  return (
    <>
      {persons.map((person, index) => (
        <div key={index}>
          <img src={person.picture.large} alt="User" />
          <p>
            {person.name.title} {person.name.first} {person.name.last}
            <br />
            {person.email}
          </p>
          <button onClick={() => handleExpand(index)}>
            {expandedUsers.includes(index) ? "-" : "+"}
          </button>
          {expandedUsers.includes(index) && (
            <div>
              <p>Adresse : {person.location.street.number} {person.location.street.name}</p>
              <p>Ville : {person.location.city}</p>
              <p>Pays : {person.location.country}</p>
              <p>Téléphone : {person.phone}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default RandomUser;
