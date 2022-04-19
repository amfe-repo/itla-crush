import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const successAlert = (title: string)=>
{
    return MySwal.fire({
        title: title,
        footer: "Itla crush",
        icon: "success"
    });
}

const errorAlert = (title: string)=>
{
    return MySwal.fire({
        title: title,
        footer: "Itla crush",
        icon: "error"
    });
}

export {successAlert, errorAlert};