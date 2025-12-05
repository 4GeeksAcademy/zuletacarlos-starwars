import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Single = () => {
  const { type, uid } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${uid}`)
      .then(res => res.json())
      .then(data => {
        if (data.result) {
          setItem(data.result.properties);
        }
      })
      .catch(err => console.error(err));
  }, [type, uid]);

  const imageType = type === "people" ? "characters" : type;
  const imageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${imageType}/${uid}.jpg`;

  return (
    <div className="container mt-5">
      { }
      {item ? (
        <>
          { }
          <div className="d-flex justify-content-center align-items-center mb-5">
            <img
              src={imageUrl}
              alt={item.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
              onError={(e) => e.target.src = "https://via.placeholder.com/400x400?text=No+Image"}
            />
            <div className="ms-5 text-center">
              <h1 className="display-4">{item.name}</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <hr className="my-4 text-danger" />

          { }
          <div className="row text-danger text-center">
            {type === "people" && (
              <>
                <div className="col-2"><strong>Height</strong><br />{item.height}</div>
                <div className="col-2"><strong>Mass</strong><br />{item.mass}</div>
                <div className="col-2"><strong>Hair Color</strong><br />{item.hair_color}</div>
                <div className="col-2"><strong>Skin Color</strong><br />{item.skin_color}</div>
                <div className="col-2"><strong>Eye Color</strong><br />{item.eye_color}</div>
                <div className="col-2"><strong>Birth Year</strong><br />{item.birth_year}</div>
              </>
            )}
            {type === "planets" && (
              <>
                <div className="col-2"><strong>Climate</strong><br />{item.climate}</div>
                <div className="col-2"><strong>Population</strong><br />{item.population}</div>
                <div className="col-2"><strong>Orbital Period</strong><br />{item.orbital_period}</div>
                <div className="col-2"><strong>Rotation Period</strong><br />{item.rotation_period}</div>
                <div className="col-2"><strong>Diameter</strong><br />{item.diameter}</div>
              </>
            )}
            {type === "vehicles" && (
              <>
                <div className="col-2"><strong>Model</strong><br />{item.model}</div>
                <div className="col-2"><strong>Class</strong><br />{item.vehicle_class}</div>
                <div className="col-2"><strong>Passengers</strong><br />{item.passengers}</div>
                <div className="col-2"><strong>Cost</strong><br />{item.cost_in_credits}</div>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="mt-5 text-center">
        <Link to="/">
          <button className="btn btn-dark">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};