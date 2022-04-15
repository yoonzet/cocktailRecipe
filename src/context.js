import React, { useState, useContext, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("g");
  const [cocktailSearch, setCocktails] = useState([]);

  const fetchDrinks = async () =>{
    const data = await fetch( `${url}${searchTerm}`)
    const cocktailSearch = await data.json();
    setCocktails(cocktailSearch.drinks);
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        // loading,
        cocktailSearch,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
