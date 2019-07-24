let colorStops = {
  '-30': 'red-500',
  '-20': 'red-400',
  '-10': 'red-300',
  '-5': 'red-200',
  '-1': 'red-100',

  '25': 'green-500',
  '20': 'green-400',
  '10': 'green-300',
  '5': 'green-200',
  '1': 'green-100'
};

let colorStopsKeys = Object.keys(colorStops)
  .map(i => parseFloat(i))
  .sort((a, b) => a - b);

export default function colorRamp(value) {
  if (value === 0) {
    return '';
  }
  let current = '';
  for (let pct of colorStopsKeys) {
    if (value >= pct) {
      current = colorStops[pct];
    }
  }

  return `bg-${current}`;
}
