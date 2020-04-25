import axios from "axios";
import { getAPI } from "./util";

const API = getAPI();

export const fetchAllCars = () => axios.get(`${API}/cars`);

export const fetchAllUsers = () => axios.get(`${API}/users`);
