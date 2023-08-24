function NewPetForm({formInputData, updateFormInputData, addPet}) {
    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form onSubmit={addPet}>
          <input onChange={updateFormInputData} type="text" name="name" placeholder="Pet name" value={formInputData.name} />
          <input onChange={updateFormInputData} type="text" name="image" placeholder="Image URL" value={formInputData.image} />
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;