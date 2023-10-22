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
      id: "Oi1fJwi35oI",
      likes: 1005,
      thumb:
        "https://images.unsplash.com/photo-1531012278403-e5db3b774373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxfHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1531012278403-e5db3b774373?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxfHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Osman Rana",
      username: "osmanrana",
      userProfile:
        "https://images.unsplash.com/profile-1470101925356-0e31654f5fad?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "6U4wogjLArk",
      likes: 2593,
      thumb:
        "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwyfHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwyfHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Pietro De Grandi",
      username: "peter_mc_greats",
      userProfile:
        "https://images.unsplash.com/profile-1510508149334-1afd6f4775e4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "7jZNgIuJrCM",
      likes: 1182,
      thumb:
        "https://images.unsplash.com/photo-1563187867-2cd158d07999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwzfHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1563187867-2cd158d07999?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwzfHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Marcelo Cidrack",
      username: "marcelocidrack",
      userProfile:
        "https://images.unsplash.com/profile-1609939868648-7b23bdc1a9b7image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "sRg9N_0pn1Q",
      likes: 779,
      thumb:
        "https://images.unsplash.com/photo-1527679124583-9208be990bb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw0fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1527679124583-9208be990bb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw0fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Ahmed Zayan",
      username: "zayyerrn",
      userProfile:
        "https://images.unsplash.com/profile-1579724273190-0a4df88987ffimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "Cw9QO9uyPBI",
      likes: 281,
      thumb:
        "https://images.unsplash.com/photo-1544189360-0c4ef5ccd5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw1fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1544189360-0c4ef5ccd5f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw1fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Geo Days",
      username: "geodays",
      userProfile:
        "https://images.unsplash.com/profile-1560070441446-a6b5f1de3f64?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "o9oQaOGpLz0",
      likes: 226,
      thumb:
        "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw2fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw2fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Ivan Ragozin",
      username: "rag0zin",
      userProfile:
        "https://images.unsplash.com/profile-1589740285486-8f06f7af3affimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "qToVxSYXPYU",
      likes: 818,
      thumb:
        "https://images.unsplash.com/photo-1542397284385-6010376c5337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw3fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1542397284385-6010376c5337?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw3fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Roberto H",
      username: "droberobert",
      userProfile:
        "https://images.unsplash.com/profile-fb-1539620817-74cfeb7b6219.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "BUfseUFh69Q",
      likes: 280,
      thumb:
        "https://images.unsplash.com/photo-1575893240675-17e719ffa7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw4fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1575893240675-17e719ffa7c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw4fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Ian Badenhorst",
      username: "capetown_guy",
      userProfile:
        "https://images.unsplash.com/profile-1539981685381-bd9e18c05f26?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "eMqG0_PpoGg",
      likes: 250,
      thumb:
        "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw5fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHw5fHxib2F0fGVufDB8fHx8MTY5Nzc2MzQ5MXww&ixlib=rb-4.0.3&q=85",
      user: "Bruce Warrington",
      username: "brucebmax",
      userProfile:
        "https://images.unsplash.com/profile-1548794148221-e265b294568c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "86wR5GZJZdQ",
      likes: 121,
      thumb:
        "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxMHx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxMHx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=85",
      user: "Alina Kacharho",
      username: "alina_k0906",
      userProfile:
        "https://images.unsplash.com/profile-fb-1605266932-36b89fc83f02.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "O453M2Liufs",
      likes: 3711,
      thumb:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxMXx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxMXx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=85",
      user: "Luca Bravo",
      username: "lucabravo",
      userProfile:
        "https://images.unsplash.com/profile-1585521746678-1988925483d3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "g5FyZvIzUS4",
      likes: 395,
      thumb:
        "https://images.unsplash.com/photo-1504716325983-cb91edab7e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxMnx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1504716325983-cb91edab7e7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxMnx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=85",
      user: "Willian Justen de Vasconcellos",
      username: "willianjusten",
      userProfile:
        "https://images.unsplash.com/profile-1649874962342-ab97e4293533image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "4Modm9afAjs",
      likes: 278,
      thumb:
        "https://images.unsplash.com/photo-1543140313-318677635120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxM3x8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1543140313-318677635120?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxM3x8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=85",
      user: "Mikael Stenberg",
      username: "bonko86",
      userProfile:
        "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "t-6GW8T6Jsc",
      likes: 1671,
      thumb:
        "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxNHx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxNHx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=85",
      user: "nikldn",
      username: "nikldn",
      userProfile:
        "https://images.unsplash.com/profile-1527810947425-22d4ab770f62?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    },
    {
      id: "Vg26vpIfgoU",
      likes: 102,
      thumb:
        "https://images.unsplash.com/photo-1520626639860-f0f34bd63189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxNXx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      full: "https://images.unsplash.com/photo-1520626639860-f0f34bd63189?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTc4MTh8MHwxfHNlYXJjaHwxNXx8Ym9hdHxlbnwwfHx8fDE2OTc3NjM0OTF8MA&ixlib=rb-4.0.3&q=85",
      user: "Lennart Heim",
      username: "ohlennart",
      userProfile:
        "https://images.unsplash.com/profile-1531688750730-28c613201242?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
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

  useEffect(() => {
    fetchData();
  }, [queryStr]);

  return (
    <dataContext.Provider
      value={{ queryStr, setQueryStr, data, isDarkMode, setIsDarkMode }}
    >
      {children}
    </dataContext.Provider>
  );
};
export default CustomContext;
