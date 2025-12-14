import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Card } from "../components/Card";

export const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="text-center mt-5 container">

      { }
      <h1 className="text-danger text-start">Characters</h1>
      <div className="d-flex flex-row overflow-scroll mb-5 gap-3">
        {store.people && store.people.length > 0 ? (
          store.people.map((item) => (
            <Card key={item.uid} item={item} type="people" />
          ))
        ) : (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>

      { }
      <h1 className="text-danger text-start">Planets</h1>
      <div className="d-flex flex-row overflow-scroll mb-5 gap-3">
        {store.planets && store.planets.length > 0 ? (
          store.planets.map((item) => (
            <Card key={item.uid} item={item} type="planets" />
          ))
        ) : (
          <p className="text-start">Cargando planetas...</p>
        )}
      </div>

      { }
      <h1 className="text-danger text-start">Vehicles</h1>
      <div className="d-flex flex-row overflow-scroll mb-5 gap-3">
        {store.vehicles && store.vehicles.length > 0 ? (
          store.vehicles.map((item) => (
            <Card key={item.uid} item={item} type="vehicles" />
          ))
        ) : (
          <p className="text-start">Cargando vehículos...</p>
        )}
      </div>
    </div>
  );
};