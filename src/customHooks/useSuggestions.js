import { useCallback, useEffect, useState } from "react";
import { suggestionPokemon } from "../components/utilities/axios";


export function useSuggestions(inputvalue) {
    const [allPokemonNames,setAllPokemonNames ] = useState([])
    const [allFilteredPok,setFilteredPok] = useState([])
    
    useEffect(() => {
      async function fetchAllSuggestion() {
          try {
              const res = await suggestionPokemon()
                    setAllPokemonNames(res)
              }
          catch (error) {console.log(error);}
        }
      fetchAllSuggestion()
    }, [])
useEffect(() => {
        if (!inputvalue) {
            return setFilteredPok([])
        }
        else {
            const inputTerm = inputvalue.trim().toLowerCase()
            const filtered = allPokemonNames.filter((value, index) =>
                value.name.trim().toLowerCase().startsWith(inputTerm)
            )
            setFilteredPok(filtered) 
        }
    }, [inputvalue, allPokemonNames])

  

    return {allPokemonNames,allFilteredPok}
}
