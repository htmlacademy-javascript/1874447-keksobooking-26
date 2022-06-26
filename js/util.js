// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomInt = (min, max) => {

  if (max < 0 || min < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};


// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloat = (min, max, digit) => {

  if (max < 0 || min < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return +(Math.random() * (max - min) + min).toFixed(digit);
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

const getRandomArray = (arr) => arr.sort(()=>Math.random()-0.5).slice(0, getRandomInt(0, arr.length));

export {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomArray};
