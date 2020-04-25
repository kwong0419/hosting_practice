export const getAPI = () => {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3001";
  } else {
    return "https://demo-kevin-420.herokuapp.com";
  }
};
