function NewPetForm({addPet, formData, updateFormData}) {

    return (
      <div className="new-pet-form">
        <h2>New Pet</h2>
        <form onSubmit={addPet}>
          <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name}/>
          <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
          <button type="submit">Add Pet</button>
        </form>
      </div>
    );
  }
  
  export default NewPetForm;