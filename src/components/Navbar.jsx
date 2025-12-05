import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				{}
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
						alt="Star Wars"
						style={{ width: "100px", height: "auto" }}
					/>
				</Link>

				<div className="ml-auto">
					{}
					<div className="btn-group">
						<button
							type="button"
							className="btn btn-primary dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites
							<span className="badge bg-secondary ms-2">
								{store && store.favorites ? store.favorites.length : 0}
							</span>
						</button>

						<ul className="dropdown-menu dropdown-menu-end">
							{}
							{!store || !store.favorites || store.favorites.length === 0 ? (
								<li className="dropdown-item text-center">(Empty)</li>
							) : (
								store.favorites.map((fav, index) => (
									<li key={index} className="d-flex justify-content-between align-items-center dropdown-item" style={{ minWidth: "200px" }}>
										<span className="text-truncate" style={{ maxWidth: "150px" }}>
											{fav.name}
										</span>
										<span
											onClick={(e) => {
												e.stopPropagation();
												dispatch({ type: "remove_favorite", payload: fav });
											}}
											style={{ cursor: "pointer" }}
										>
											<i className="fa-solid fa-trash text-danger ms-2"></i>
										</span>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};