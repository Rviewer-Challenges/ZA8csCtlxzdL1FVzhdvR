import shuffle from "lodash.shuffle";
import Images from "./Images";
import numero_cartas from "./Menu";

export default () => {
  const images = Images();

  let cartas = [];

  while (cartas.length < numero_cartas) {
    const index = Math.floor(Math.random() * images.length);
    const carta = {
      icono: images.splice(index, 1)[0],
      emparejada: false,
    };
    cartas.push(carta);
    cartas.push({ ...carta });
  }

  return shuffle(cartas);
};
