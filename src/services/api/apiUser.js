import { axiosClient } from "./apiClient.js";


export const registerUser = async (userData) => {
    try {
        const { data } = await axiosClient.post('/usuario/', userData);
        return data;
    } catch (error) {
        console.error('No se pudo registrar el usuario:', error);
        alert('No se pudo registrar el usuario');
        throw new Error(error);
    }
}