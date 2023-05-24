import "./Bootcamps.css";
const title = {
  titulo: "EXPERIENCIAS FORMATIVAS QUE CAMBIARÁN TU CARRERA",
  info: "Descubre nuestros Bootcamps",
};


function Bootcamp() {
  return (
    <div className="Bootcamp">
      <p className="p">{title.titulo} </p>
      <div className="linea"></div>
      <h1 className="h1-text">{title.info}</h1>
    </div>
  );
}
export default Bootcamp;
