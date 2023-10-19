import { useContext, createContext, useState, useEffect } from "react";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const BASE_URL = `https://api.unsplash.com/search/photos?`;

const dataContext = createContext();

export const useValue = () => {
  const value = useContext(dataContext);
  return value;
};

const CustomContext = ({ children }) => {
  const [queryStr, setQueryStr] = useState("dog");
  const [data, setData] = useState([]);
  const [abortController, setAbortController] = useState(new AbortController());
  // console.log(data);

  const fetchData = async () => {
    try {
      const dataArr = [];
      abortController.abort();
      const newController = new AbortController();
      setAbortController(newController);
      const res = await fetch(
        `${BASE_URL}client_id=${CLIENT_ID}&query=${queryStr}`,
        { signal: newController.signal }
      );
      const data = await res.json();

      data.results.forEach((d) => {
        const newData = {
          likes: d.likes,
          thumb: d.urls.thumb,
          full: d.urls.full,
          user: d.user.name,
        };
        dataArr.push(newData);
      });
      setData(dataArr);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, [queryStr]);

  return (
    <dataContext.Provider value={{ queryStr, setQueryStr, data }}>
      {children}
    </dataContext.Provider>
  );
};
export default CustomContext;
