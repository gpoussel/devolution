export function randomDoubleInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomIntegerInRange(min: number, max: number) {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
}

export function randomElement<T>(arr: T[]): T {
  return arr[randomIntegerInRange(0, arr.length - 1)];
}
