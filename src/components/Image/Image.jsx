import "./image.css";

export default function Image({ data }) {
  return (
    <div className="image-wrapper">
      <img className="query-image" src={data.thumb} alt="" />
      <div className="details">
        <img className="user-profile" src={data.userProfile} alt="" />
        <div className="post-details">
          <div className="user-details">
            <p className="user-full-name">{data.user}</p>
            <p className="user-name">{data.username}</p>
          </div>
          <div className="likes-count">{data.likes}</div>
        </div>
      </div>
    </div>
  );
}
