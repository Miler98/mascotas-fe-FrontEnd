// MascotaCard.js
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import laica from '../images/laica.png';

const MascotaCard = ({id, nombre, edad, raza, mascota }) => {
    
  const [titulo, setTitulo]=useState("");
    const openModal =()=>{

          setTitulo("Detalles");
    };

  return (
    <div className="card" style={{ width: '15rem' }}>
      <img src={laica} className="card-img-top" alt={mascota.nombre} />
      <div className="card-body">
        <h5 className="card-title">Nombre: {mascota.nombre}</h5>
        <h5 className="card-title">Raza: {mascota.raza}</h5>
        <h6 className="card-text">{mascota.tipo_mascota}</h6>
        <p className="card-text">Edad: {mascota.edad}</p>
        <button 
            onClick={()=>openModal(mascota.id,mascota.nombre,mascota.edad,mascota.raza)}
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalDetalle">
            Detalles
        </button>

        <div id="modalDetalle" className="modal fade" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <label className="h5 text-start">Nombre: {mascota.nombre}</label>
              <label className="h5">Raza: {mascota.raza}</label>
            </div>
            <div className="modal-body">
              
              <div className="input-group mb-3">
                <span>
                    <h5>{mascota.nombre} es una de las mascotas mas queridas y juguetonas 
                        de nuestro centro de adopcion, es un {mascota.raza} de {mascota.edad} años de edad,
                        cuenta con todas las vacunas necesarias para su crecimiento y protección.</h5>
                    <h4>esta en busca de un dulce hogar!</h4>  
                </span>
              </div>
              <div className="d-grid col-6 mx-auto">
              <button
                id="btnCerrarModal"
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              </div>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MascotaCard;






