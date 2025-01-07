function combine(a: number, b: number): number {
  return a + b;
}

function combineStrings(a: string, b: string): string {
  return a + b; 
}

function combineWithCheck(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    return 0; // or handle the case appropriately
  }
}