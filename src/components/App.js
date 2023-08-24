import Header from "./Header"
import PetPage from "./PetPage"
import {useState} from "react"

function App() {

  const [searchText, setSearchText] = useState("")
 
  const [formInputData, setFormInputData] = useState({
    name: "",
    image: ""
  })

  const [pets, setPets] = useState([
    {
        id: 1,
        name: "Fido",
        image: "./images/dog.jpeg"
    },
    {
        id: 2,
        name: "Kitty",
        image: "./images/cat.png"
    },
    {
        id: 3,
        name: "Hammy",
        image: "./images/hamster.jpeg"
    },
    {
        id: 4,
        name: "Polly",
        image: "./images/parrot.jpeg"
    },
    {
        id: 5,
        name: "Angel",
        image: "./images/horse.jpeg"
    },
    {
        id: 6,
        name: "Fluffy",
        image: "./images/guinea-pig.jpeg"
    },
    {
        id: 7,
        name: "Goldie",
        image: "./images/fish.jpeg"
    }
  ])

  console.log(pets)

  const filteredPets = pets.filter(pet => {
    if(searchText === ""){
      return true
    }
    return pet.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function adoptPet(id){
    setPets(pets.filter(pet => {
      return pet.id !== id
    }))
  }

  function updateFormInputData(event){
    setFormInputData({...formInputData, [event.target.name]: event.target.value})
  }

  function addPet(event){
    event.preventDefault()
    setPets([...pets, {id: pets[pets.length-1].id + 1, ...formInputData}])
  }

  return (
    <div className="app">
      <Header />
      <PetPage pets={filteredPets} setSearchText={setSearchText} adoptPet={adoptPet} formInputData={formInputData} updateFormInputData={updateFormInputData} addPet={addPet} />
    </div>
  );
}

export default App;