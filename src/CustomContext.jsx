import { useContext, createContext, useState, useEffect } from "react";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const BASE_URL = `https://api.unsplash.com/search/photos?`;

const dataContext = createContext();

export const useValue = () => {
  const value = useContext(dataContext);
  return value;
};

const CustomContext = ({ children }) => {
  const [queryStr, setQueryStr] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [data, setData] = useState([
    {
      id: "zhFBDjczpl4",
      likes: 5,
      thumb:
        "https://images.unsplash.com/photo-1696446701657-0db3da722b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MXwxfHNlYXJjaHwxfHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1696446701657-0db3da722b13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MXwxfHNlYXJjaHwxfHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Boxed Water Is Better",
      username: "boxedwater",
      userProfile:
        "https://images.unsplash.com/profile-1557251674406-effb9d313841?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "8Ogfqvw15Rg",
      likes: 3036,
      thumb:
        "https://images.unsplash.com/photo-1513553404607-988bf2703777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwyfHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1513553404607-988bf2703777?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwyfHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Joel Vodell",
      username: "joelvodell",
      userProfile:
        "https://images.unsplash.com/profile-1513922969232-e5d2c83bfb08?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "K785Da4A_JA",
      likes: 4435,
      thumb:
        "https://images.unsplash.com/photo-1559825481-12a05cc00344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwzfHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1559825481-12a05cc00344?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwzfHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Silas Baisch",
      username: "silasbaisch",
      userProfile:
        "https://images.unsplash.com/profile-1668425226177-8660639da6d0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "6ArTTluciuA",
      likes: 4336,
      thumb:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw0fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw0fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Matt Hardy",
      username: "matthardy",
      userProfile:
        "https://images.unsplash.com/profile-1683689059210-fb2f7e9abb79image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "wc9avd2RaN0",
      likes: 2458,
      thumb:
        "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw1fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw1fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Christoffer Engström",
      username: "christoffere",
      userProfile:
        "https://images.unsplash.com/profile-1511160711874-e72316091990?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "oQl0eVYd_n8",
      likes: 2620,
      thumb:
        "https://images.unsplash.com/photo-1439405326854-014607f694d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw2fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1439405326854-014607f694d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw2fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Joseph Barrientos",
      username: "jbcreate_",
      userProfile:
        "https://images.unsplash.com/profile-1519253190440-f7f9529d104a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "5cwigXmGWTo",
      likes: 1895,
      thumb:
        "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw3fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw3fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Ivan Bandura",
      username: "unstable_affliction",
      userProfile:
        "https://images.unsplash.com/profile-1618347101827-5bbe4dd61412image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "fbbxMwwKqZk",
      likes: 579,
      thumb:
        "https://images.unsplash.com/photo-1564419320461-6870880221ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MXwxfHNlYXJjaHw4fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1564419320461-6870880221ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MXwxfHNlYXJjaHw4fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Boxed Water Is Better",
      username: "boxedwater",
      userProfile:
        "https://images.unsplash.com/profile-1557251674406-effb9d313841?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "a5uptAdUmjE",
      likes: 4437,
      thumb:
        "https://images.unsplash.com/photo-1548032885-b5e38734688a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw5fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1548032885-b5e38734688a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw5fHxvY2VhbnxlbnwwfHx8fDE2OTc3NDUxODJ8MA&ixlib=rb-4.0.3&q=85",
      user: "Gatis Marcinkevics",
      username: "m_gatus",
      userProfile:
        "https://images.unsplash.com/profile-1548033284415-0df33790b9f7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "q-DJ9XhKkhA",
      likes: 1117,
      thumb:
        "https://images.unsplash.com/photo-1488278905738-514111aa236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxMHx8b2NlYW58ZW58MHx8fHwxNjk3NzQ1MTgyfDA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1488278905738-514111aa236c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxMHx8b2NlYW58ZW58MHx8fHwxNjk3NzQ1MTgyfDA&ixlib=rb-4.0.3&q=85",
      user: "Ant Rozetsky",
      username: "rozetsky",
      userProfile:
        "https://images.unsplash.com/profile-1510425410630-2c0b51c2b22e?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
  ]);
  const [abortController, setAbortController] = useState(new AbortController());

  const fetchData = async () => {
    try {
      const dataArr = [];
      abortController.abort();
      const newController = new AbortController();
      setAbortController(newController);
      const res = await fetch(
        `${BASE_URL}client_id=${CLIENT_ID}&query=${queryStr}&per_page=15`,
        { signal: newController.signal }
      );
      const data = await res.json();

      data.results.forEach((d) => {
        const newData = {
          id: d.id,
          likes: d.likes,
          thumb: d.urls.regular,
          full: d.urls.full,
          user: d.user.name,
          username: d.user.username,
          userProfile: d.user["profile_image"].small,
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
    <dataContext.Provider
      value={{ queryStr, setQueryStr, data, isDarkMode, setIsDarkMode }}
    >
      {children}
    </dataContext.Provider>
  );
};
export default CustomContext;
