import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:3000/api",
	// headers -> aqui eu passo os tokens jwt.
});
