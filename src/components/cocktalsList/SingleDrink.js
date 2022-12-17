import "./cocktails.css";
import { Link } from "react-router-dom";
const SingleDrink = ({ id, title, image, glass, type }) => {
  return (
    <article className=" col-12 col-md-6 col-xl-4 ">
      <div className="drink-container">
        <div>
          <img src={image} className="drink-img" />
        </div>
        <div className="drink-details">
          <h3>{title}</h3>
          <h4>{glass}</h4>
          <p>{type}</p>
          <Link className="btn btn-primary btn-details" to={`cocktails/${id}`}>
            details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleDrink;
