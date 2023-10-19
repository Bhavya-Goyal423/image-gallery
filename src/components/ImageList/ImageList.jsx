import "./imagelist.css";
import { useValue } from "../../CustomContext";
import Image from "../Image/Image";
import { useEffect, useState } from "react";

export default function ImageList() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dataChunks, setDataChunks] = useState([]);
  const { data } = useValue();

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
    if (windowWidth > 1500) {
      const chunks = [[], [], [], []];
      let i = 0;
      let k = 0;

      while (i < data.length) {
        chunks[k].push(data[i]);
        i++;
        k = i % 4;
      }
      setDataChunks(chunks);
    }
  }, [data]);

  return (
    <div className="image-showcase">
      {dataChunks.map((data, idx) => (
        <div className={`grid grid-${idx + 1}`} key={idx}>
          {data.map((d) => (
            <Image key={d.id} data={d} />
          ))}
        </div>
      ))}
    </div>
  );
}
