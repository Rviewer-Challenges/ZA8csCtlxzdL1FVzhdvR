import shuffle from "lodash.shuffle";

let numero_cartas = 30;

export default () => {
  const images = [
    "Homer.jpg",
    "Bart.jpg",
    "Marge.jpg",
    "Maggie.jpg",
    "Lisa.jpg",
    "Abraham.jpg",
  ];
  let cartas = [];

  while (cartas.length < numero_cartas) {
    const index = Math.floor(Math.random() * images);
    const carta = {
      icono: images,
      emparejada: false,
    };
    cartas.push(carta);
    cartas.push({ ...carta });
  }

  return shuffle(cartas);
};
