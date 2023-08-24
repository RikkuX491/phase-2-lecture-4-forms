import NewPetForm from "./NewPetForm"
import Search from "./Search"
import PetList from "./PetList"

function PetPage({pets, setSearchText, adoptPet, formInputData, updateFormInputData, addPet}){

    return(
        <main>
            <NewPetForm formInputData={formInputData} updateFormInputData={updateFormInputData} addPet={addPet} />
            <Search setSearchText={setSearchText} />
            <PetList pets={pets} adoptPet={adoptPet} />
        </main>
    )
}

export default PetPage;