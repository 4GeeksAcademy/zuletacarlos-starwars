import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Card = ({ item, type }) => {
    
    const { store, dispatch } = useGlobalReducer();
    const isFavorite = store.favorites.some(fav => fav.uid == item.uid && fav.type == type);

    let imgType = type;
    if(type === "people"){
        imgType = "characters";
    }

    let imgUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${imgType}/${item.uid}.jpg`;

    if(type === "planets" && item.uid == "1"){
        imgUrl = "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg";
    }

    return (
        <div className="card m-2" style={{ width: "18rem", minWidth: "18rem" }}>
            
            <Link to={`/single/${type}/${item.uid}`}>
                <img 
                    src={imgUrl} 
                    className="card-img-top" 
                    alt={item.name} 
                    style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
                    }}
                />
            </Link>

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
                                dispatch({ type: "remove_favorite", payload: { ...item, type } });
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