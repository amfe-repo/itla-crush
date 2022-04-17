import DeclarationForm from './DeclarationForm';
import './Declaration.css';


export default function Declaration() {
  return (
    <div className="container-fluid w-75 mx-auto p-0 row flex-column declaration">
        <p className="text-center fs-3 text-primary col">
          Your declaration
        </p>
        <div className="col-xxxl-5 col-xxl-7 col-lg-8 col-sm-10 col-12 mx-auto">
          <DeclarationForm></DeclarationForm>
        </div>
    </div>
  )
}
