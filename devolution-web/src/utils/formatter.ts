import Decimal from 'break_infinity.js';
import { storeToRefs } from 'pinia';
import * as numberFormatLibrary from 'swarm-numberformat';

import { type NumberFormatType, usePreferenceStore } from '@/stores/preference';

export function formatDecimalWithFormat(value: Decimal, numberFormat: NumberFormatType) {
  switch (numberFormat) {
    case 'engineering':
      return numberFormatLibrary.format(value, { format: 'engineering', sigfigs: 4 });
    case 'scientific':
      return numberFormatLibrary.format(value, { format: 'scientific', sigfigs: 4 });
    case 'short':
      return numberFormatLibrary.formatShort(value);
    case 'shortLongScale':
      return numberFormatLibrary.formatShort(value, { format: 'longScale' });
  }
}

export function formatDecimal(value: Decimal) {
  const preferenceStore = usePreferenceStore();
  const { numberFormat } = storeToRefs(preferenceStore);
  return formatDecimalWithFormat(value, numberFormat.value);
}
