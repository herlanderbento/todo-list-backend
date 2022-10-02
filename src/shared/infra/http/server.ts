import { app } from "./app";

const PORT = process.env.NODE_ENV_PORT || 3000;

app.listen(PORT, () => console.log("Server is running!"));
