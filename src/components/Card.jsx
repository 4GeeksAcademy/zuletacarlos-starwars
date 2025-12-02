import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Card = ({ item, type }) => {

    const { store, dispatch } = useGlobalReducer();
    const isFavorite = store && store.favorites
        ? store.favorites.some(fav => fav.uid == item.uid)
        : false;

    // 1. Ajustamos el tipo de dato para la URL (people -> characters)
    const imageType = type === "people" ? "characters" : type;

    // 2. Construimos la URL usando el repo de breatheco-de que es más estable
    const imageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${imageType}/${item.uid}.jpg`;

    return (
        <div className="card m-2" style={{ width: "18rem", minWidth: "18rem" }}>
            <img
                src={imageUrl}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
                // Si la imagen falla, ponemos una gris por defecto
                onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
                    e.target.onerror = null;
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>

                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/single/${type}/${item.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>

                    <button
                        className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => {
                            if (isFavorite) {
                                dispatch({ type: "remove_favorite", payload: item });
                            } else {
                                dispatch({ type: "add_favorite", payload: { ...item, type } });
                            }
                        }}>
                        <i className={`fa-heart ${isFavorite ? "fa-solid" : "fa-regular"}`}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};