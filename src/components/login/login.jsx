import React, { useRef, useState } from "react";
import "../../components/login/login.css";
import { ApiService } from "../../services";

export default function Login(props) {
  const [error, setError] = useState(null);
  const [espera, setEspera] = useState(false);

  const refUser = useRef(null);
  const refPassword = useRef(null);

 
 
  const handleLogin = async () => {
    setEspera(true);
    const data = {
      usuario: refUser.current.value,
      clave: refPassword.current.value,
    };
    
    
      const res =  await ApiService.UserService.login(data);

  
      if(res.conectado){
        window.localStorage.setItem("logged", JSON.stringify(data));
      }
      props.acceso(res.conectado);
      setError(res.error);
      setEspera(false);
    
  };

  return (
    <div className="col-4 margin-login">
      <div class="card border-success mb-3">
        <div class="card-header text-center">
          <h3> Ingresar</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <div className="input-group-prepend ">
                <span className="input-group-text">
                  <h3>📧</h3>
                </span>
              </div>
              <input
                type="email"
                class="form-control"
                placeholder="E-mail"
                ref={refUser}
              />
            </div>

            <div class="input-group form-group">
              <div className="input-group-prepend ">
                <span className="input-group-text">
                  <h3>🔑</h3>
                </span>
              </div>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                ref={refPassword}
              />
            </div>

           

            {error && (
              <div class="alert alert-dismissible alert-danger">
                <strong>{error}</strong>
              </div>
            )}

            <div class="form-group">
              <input
                onClick={handleLogin}
                type="button"
                value="Ingresar"
                disabled={espera}
                class="btn btn-lg btn-block login_btn"
              />
            </div>
          </form>
        </div>

        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            ¿todavia no tienes cuenta?
          </div>
          <a className="link-login d-flex justify-content-center " href="#/">
            Registrate
          </a>
          <div class="d-flex justify-content-center">
            <a className="link-login" href="#/">
              ¿olvidaste tu contraseña?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
