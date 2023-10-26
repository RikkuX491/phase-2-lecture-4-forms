import NewPetForm from "./NewPetForm"
import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets, updateSearchText, adoptPet}){

    return(
        <main>
            <NewPetForm />
            <Search updateSearchText={updateSearchText} />
            <PetList pets={pets} adoptPet={adoptPet} />
        </main>
    )
}

export default PetPage;