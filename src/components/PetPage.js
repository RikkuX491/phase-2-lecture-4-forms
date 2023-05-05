import NewPetForm from "./NewPetForm"
import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets, setSearchText, adoptPet}){

    return(
        <main>
            <NewPetForm />
            <Search setSearchText={setSearchText} />
            <PetList pets={pets} adoptPet={adoptPet} />
        </main>
    )
}

export default PetPage;