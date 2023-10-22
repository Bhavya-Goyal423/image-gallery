import "./imagelist.css";
import { useValue } from "../../CustomContext";
import Image from "../Image/Image";
import { useEffect, useState } from "react";

export default function ImageList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dataChunks, setDataChunks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data } = useValue();
  console.log(isModalOpen);

  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 3600 && windowWidth > 1200) {
      const chunks = [[], [], [], []];
      let i = 0;
      let k = 0;

      while (i < data.length) {
        chunks[k].push(data[i]);
        i++;
        k = i % 4;
      }
      setDataChunks(chunks);
    } else if (windowWidth < 1200 && windowWidth > 800) {
      const chunks = [[], [], []];
      let i = 0;
      let k = 0;

      while (i < data.length) {
        chunks[k].push(data[i]);
        i++;
        k = i % 3;
      }
      setDataChunks(chunks);
    } else if (windowWidth < 800 && windowWidth > 560) {
      const chunks = [[], []];
      let i = 0;
      let k = 0;

      while (i < data.length) {
        chunks[k].push(data[i]);
        i++;
        k = i % 2;
      }
      setDataChunks(chunks);
    } else {
      setDataChunks([data]);
    }
  }, [data, windowWidth]);

  return (
    <div className="image-showcase">
      {dataChunks.map((data, idx) => (
        <div className={`grid grid-${idx + 1}`} key={idx}>
          {data.map((d) => (
            <Image
              key={d.id}
              data={d}
              selected={selected}
              setSelected={setSelected}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
