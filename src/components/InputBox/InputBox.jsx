import "./inputbox.css";
import { useValue } from "../../CustomContext";

export default function InputBox() {
  const { queryStr, setQueryStr } = useValue();
  return (
    <div className="background">
      <div className="input-box">
        <input
          className="input"
          placeholder="search image"
          value={queryStr}
          onChange={(e) => setQueryStr(e.target.value)}
        />
      </div>
    </div>
  );
}
