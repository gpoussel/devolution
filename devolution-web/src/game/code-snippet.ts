export interface CodeSnippet {
  source: string;
  code: string;
  language: 'javascript';
}

const CODE_SAMPLES: CodeSnippet[] = [
  {
    source: 'https://github.com/jrc03c/js-math-tools/blob/main/src/divide.js',
    code: `function divide(a, b) {
  return scale(a, pow(b, -1))
}`,
    language: 'javascript',
  },
  {
    source: 'https://github.com/jrc03c/js-math-tools/blob/main/src/is-number.js',
    code: `function isNumber(x) {
  return typeof x === "number" && !isNaN(x)
}`,
    language: 'javascript',
  },
  {
    source: 'https://github.com/jrc03c/js-math-tools/blob/main/src/mod.js',
    code: `function mod(a, b) {
  try {
    if (!isNumber(a)) return NaN
    if (!isNumber(b)) return NaN
    return a % b
  } catch (e) {
    return NaN
  }
}`,
    language: 'javascript',
  },
  {
    source: 'https://github.com/jrc03c/js-math-tools/blob/main/src/pow.js',
    code: `function pow(x, p) {
  try {
    if (!isNumber(x)) return NaN
    if (!isNumber(p)) return NaN
    return Math.pow(x, p)
  } catch (e) {
    return NaN
  }
}`,
    language: 'javascript',
  },
];

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomCodeSnippet(): CodeSnippet {
  return getRandomElement(CODE_SAMPLES);
}
