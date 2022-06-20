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

getRandomInt(15, 9);

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

getRandomFloat(1.1, 2.785, 5);
