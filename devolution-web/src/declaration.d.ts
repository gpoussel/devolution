declare module 'swarm-numberformat' {
  declare function format(
    value: number | Decimal,
    format: { format: 'scientific' | 'engineering' | 'standard'; sigfigs: number },
  ): string;
  declare function formatShort(value: number | Decimal): string;
  declare function formatShort(value: number | Decimal, format: { format: 'longScale' }): string;
}
