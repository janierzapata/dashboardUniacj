import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div class="alert alert-dismissible alert-warning container-2 ">
      <h1 class="alert-heading header404">
        <b>404</b>
      </h1>
      <p class="mb-0 notfound">Pagina no encontrada</p>
        <NavLink to="/index" class="alert-link  ">
      <button type="button" class="btn btn-warning btn-notfound">
          volver al inicio
      </button>
        </NavLink>
    </div>
  );
};
