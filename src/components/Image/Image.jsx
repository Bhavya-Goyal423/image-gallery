import "./image.css";
import { useValue } from "../../CustomContext";

export default function Image({
  data,
  isModalOpen,
  setIsModalOpen,
  selected,
  setSelected,
}) {
  const { isDarkMode } = useValue();

  return (
    <div
      className="image-wrapper"
      style={isDarkMode ? { border: "1px solid #495057" } : undefined}
    >
      <img
        className="query-image"
        src={data.thumb}
        alt=""
        onClick={() => {
          setIsModalOpen(true);
          setSelected(data.id);
        }}
      />
      {isModalOpen && selected === data.id && (
        <div className="modal">
          <div className="helper">
            <img src={data.full} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 11 11"
              className="icon icon-close"
              onClick={() => {
                setIsModalOpen(false);
                setSelected(null);
              }}
            >
              <path
                d="M2.2 1.19l3.3 3.3L8.8 1.2a.67.67 0 0 1 .5-.2a.75.75 0 0 1 .7.7a.66.66 0 0 1-.2.48L6.49 5.5L9.8 8.82c.13.126.202.3.2.48a.75.75 0 0 1-.7.7a.67.67 0 0 1-.5-.2L5.5 6.51L2.21 9.8a.67.67 0 0 1-.5.2a.75.75 0 0 1-.71-.71a.66.66 0 0 1 .2-.48L4.51 5.5L1.19 2.18A.66.66 0 0 1 1 1.7a.75.75 0 0 1 .7-.7a.67.67 0 0 1 .5.19z"
                fill="currentColor"
                onClick={() => {
                  setIsModalOpen(false);
                  setSelected(null);
                }}
              ></path>
            </svg>
          </div>
        </div>
      )}
      <div
        className="details"
        style={isDarkMode ? { backgroundColor: "#212529" } : undefined}
      >
        <img className="user-profile" src={data.userProfile} alt="" />
        <div className="post-details">
          <div className="user-details">
            <p className="user-full-name">{data.user}</p>
            <p
              className="user-name"
              style={isDarkMode ? { color: "#adb5bd" } : undefined}
            >
              {data.username}
            </p>
          </div>
          <div className="likes-count">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 512 512"
              className="icon like-icon"
            >
              <path
                d="M198 448h172c15.7 0 28.6-9.6 34.2-23.4l57.1-135.4c1.7-4.4 2.6-9 2.6-14v-38.6c0-21.1-17-44.6-37.8-44.6H306.9l18-81.5.6-6c0-7.9-3.2-15.1-8.3-20.3L297 64 171 191.3c-6.8 6.9-11 16.5-11 27.1v192c0 21.1 17.2 37.6 38 37.6z"
                fill="currentColor"
              ></path>
              <path d="M48 224h64v224H48z" fill="currentColor"></path>
            </svg>
            {data.likes}
          </div>
        </div>
      </div>
    </div>
  );
}
