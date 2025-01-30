import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "./types"; // Vérifiez que les types existent

// Action creator pour l'inscription
export const signup = (username, email, password, roles) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
      username,
      email,
      password,
      roles, // Optionnel : Vous pouvez gérer les rôles si nécessaire
    });

    // Si l'inscription réussit, dispatcher REGISTER_SUCCESS
    dispatch({ type: REGISTER_SUCCESS });
    console.log("Inscription réussie :", response.data);

    // Facultatif : Connecter automatiquement après l'inscription
    dispatch(login(email, password));
  } catch (error) {
    // Si l'inscription échoue, dispatcher REGISTER_FAIL
    console.error("Erreur d'inscription :", error);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response?.data?.message || "Échec de l'inscription",
    });
  }
};

// Action creator pour la connexion
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      email,
      password,
    });
    localStorage.setItem(JSON.stringify(response.data))
    // Si la connexion réussit, dispatcher LOGIN_SUCCESS
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    // Si la connexion échoue, dispatcher LOGIN_FAIL
    console.error("Erreur de connexion :", error);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data?.message || "Échec de la connexion",
    });
  }
};
