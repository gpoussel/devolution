import Decimal from 'break_infinity.js';
import * as numberFormat from 'swarm-numberformat';

export function formatDecimal(value: Decimal) {
  return numberFormat.formatShort(value);
}
