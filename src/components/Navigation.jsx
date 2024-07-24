import { Link } from "react-router-dom";
import { Image1b } from "./Image1b";
import { Image2b } from "./Image2b";
import { Image3b } from "./Image3b";
import { Image4b } from "./Image4b";
import { Image5b } from "./Image5b";
import { Image6b } from "./Image6b";
import { Image7b } from "./Image7b";

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
      <Link to="/image1" className="links">
        <figure className="image-size">
          <Image1b />
          <figcaption>Power Trip</figcaption>
        </figure>
      </Link>

      <Link to="/image2" className="links">
        <figure className="image-size">
          <Image2b />
          <figcaption>Municipal Waste</figcaption>
        </figure>
      </Link>

      <Link to="/image3" className="links">
        <figure className="image-size">
          <Image3b />
          <figcaption>Iron/Reagan</figcaption>
        </figure>
      </Link>

      <Link to="/image4" className="links">
        <figure className="image-size">
          <Image4b />
          <figcaption>Venemous</figcaption>
        </figure>
      </Link>

      <Link to="/image5" className="links">
        <figure className="image-size">
          <Image5b />
          <figcaption>Lost Society</figcaption>
        </figure>
      </Link>

      <Link to="/image6" className="links">
        <figure className="image-size">
          <Image6b />
          <figcaption>ST</figcaption>
        </figure>
      </Link>

      <Link to="/image7" className="links">
        <figure className="image-size">
          <Image7b />
          <figcaption>Poison The Preacher</figcaption>
        </figure>
      </Link>
    </div>
  )
}