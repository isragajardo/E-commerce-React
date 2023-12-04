import { useState } from "react"

function SearchBar({enSubmit}){

  const [term, setTerm] = useState("");


  function handleClick(event){
    event.preventDefault() //para que no recarge la pag
    enSubmit(term)

  }

  function handleChange(e){
    setTerm(e.target.value)
  }

    return(

      <div>
        <form onSubmit={handleClick}>
          <input placeholder="Search" onChange={handleChange}/>

        </form>

       
        
        
      </div>
        
    )

    

}

export default SearchBar