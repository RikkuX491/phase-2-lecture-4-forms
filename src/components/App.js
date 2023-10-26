import Header from "./Header"
import PetPage from "./PetPage"
import {useState} from "react"

function App() {

  const [searchText, setSearchText] = useState("")

  // const [nameInput, setNameInput] = useState("")
  // const [imageInput, setImageInput] = useState("")

  const [formData, setFormData] = useState({
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

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  function addPet(event){
    event.preventDefault()

    const newPet = {
      id: pets[pets.length - 1].id + 1,
      ...formData
    }

    setPets([...pets, newPet])

    setFormData({
      name: "",
      image: ""
    })
  }

  // function updateNameInput(event){
  //   setNameInput(event.target.value)
  // }

  // function updateImageInput(event){
  //   setImageInput(event.target.value)
  // }

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="app">
      <Header />
      <PetPage pets={filteredPets} updateSearchText={updateSearchText} adoptPet={adoptPet} addPet={addPet} formData={formData} updateFormData={updateFormData}/>
    </div>
  );
}

export default App;