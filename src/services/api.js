import axios from "axios";

const i = axios.create({ baseURL: 'http://localhost:8080' });

export const login = async (user) => {
    // Verificar que username y password no estén vacíos
    if (!user.username || !user.password) {
        console.error("Username or password is missing");
        return;
    }

    // Crear el token base64
    const token = btoa(user.username + ":" + user.password);

    try {
        const response = await i.post("/login", {}, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + token,
            },
        });

        // Verificar si la respuesta es exitosa
        if (response.data.resp === "Login exitoso") {
            setAuth(token);
            return { token, id: response.data.id };
        } else {
            console.error("Login failed", response.data.resp);
        }
    } catch (error) {
        console.error("Login error", error);
    }
};

export const setAuth = async (token) => {
    i.defaults.headers.common["Authorization"] = `Basic ${token}`;
};

export const registerUser = async (user) => {
    try {
        await i.post("/auth/register", user);
    } catch (error) {
        console.error("Register error", error);
    }
};

export const createEvent = async (event) => {
  try {
    const response = await i.post("/events/create", event);
    return response.data; // Devuelves los datos del evento creado (incluyendo el id)
  } catch (error) {
    console.error("Create event error", error);
    throw error; // Lanza el error para manejarlo si es necesario
  }
};



export const cargarEventos = async () => {
    try {
        const response = await i.get("/events/all");
        return response.data;
    } catch (error) {
        console.error("Cargar eventos error", error);
    }
};

export const getUsers = async () => {
    try {
        const response = await i.get("/users/");
        return response.data;
    } catch (error) {
        console.error("Cargar eventos error", error);
    }
};

export const invitarEvento = async (invitation) => {
    try {
        await i.post(`/events/${invitation.event}/invite/${invitation.receiver}`, invitation);
    } catch (error) {
        console.error("Invitar evento error", error);
    }
};