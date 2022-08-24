import { useState, useEffect } from "react";
import { supabase } from "/utils/supabase";

export default function Home() {
  const [animals, setAnimals] = useState([]);
  const [animal, setAnimal] = useState({ petname: "", age: null, species: "" });
  const { petname, age, species } = animal;

  useEffect(() => {
    fetchAnimals();
  }, []);

  async function fetchAnimals() {
    const { data } = await supabase.from("animals").select();
    setAnimals(data);
  }

  async function createAnimal() {
    await supabase.from("animals").insert([{ petname, age, species }]).single();
    setAnimal({ petname: "", age: "", species: "" });
    fetchAnimals();
  }
  return (
    <div className="App">
      <input
        placeholder="Name of the animal"
        value={petname}
        onChange={(e) => setAnimal({ ...animal, petname: e.target.value })}
      />
      <input
        placeholder="Approx age in weeks"
        value={age}
        onChange={(e) => setAnimal({ ...animal, age: e.target.value })}
      />
      <input
        placeholder="Dog, cat, rabbit, hamster"
        value={species}
        onChange={(e) => setAnimal({ ...animal, species: e.target.value })}
      />
      <button onClick={createAnimal}>Upload for Adoption</button>
      {animals.map((animal) => (
        <div key={animal.id}>
          <h3>{animal.petname}</h3>
          <h4>Species: {animal.species} </h4>
          <h4>Age in weeks: {animal.age} </h4>
        </div>
      ))}
    </div>
  );
}
