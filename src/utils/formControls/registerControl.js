import { registerUser } from "../../services/api/apiUser.js";
import { normalizeUserRegister } from "../nomalize/normalizeUser.js";


export const registerUserControl = async () => {
    const nombre = document.getElementById('registro-nombre').value;
    const apellido_paterno = document.getElementById('registro-apellido_paterno').value;
    const apellido_materno = document.getElementById('registro-apellido_materno').value;
    const email = document.getElementById('registro-email').value;
    const telefono = document.getElementById('registro-telefono').value;


    const formContainer = document.getElementById('form-registro');

    const userData = normalizeUserRegister(nombre, apellido_paterno, apellido_materno, email, telefono);

    try {
        const apiResponse = await registerUser(userData);
        alert(apiResponse.message);
        formContainer.reset();
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
