export function fahrenheitToCelsius(record) {
  record.celsius = (record.fahrenheit - 32) * 5 / 9;
  return record;
}
