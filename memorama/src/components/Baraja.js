import shuffle from "lodash.shuffle";

const numero_cartas = 30;

const Baraja = () => {
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

export default Baraja