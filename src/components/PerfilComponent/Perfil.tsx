import PerfilCard from './PerfilCard';
import './Perfil.css';


export default function Perfil() {
  return (
    <div className="container-fluid w-75 mx-auto p-0 row flex-column perfil">
        <p className="text-center fs-3 text-primary col">
          My info
        </p>
        <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
          <PerfilCard></PerfilCard>
        </div>
    </div>
  )
}
