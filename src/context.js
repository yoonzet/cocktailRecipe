import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}${searchTerm}`
      ); /* 이렇게 url 페치 가능!(searchTerm은 input값!) 신기하당 */
      const data = await response.json();
      /*받은 응답 변수로 지정해서 그 속의 프로퍼티를 빼냄, if조건문 안에서 map해서 그 안의 
      값들 또 꺼냄!(콘솔에 찍어서 프로퍼티 확인)
       id 및 등등 객체로 저장해서 리턴!(맵이므로 저절로 배열로 나옴) -> 이것을 set~으로 상태변경! 
       없으면 빈배열! either way you have to change the Loding state once you've done */
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        setSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
