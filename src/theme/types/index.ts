export interface Typography {
  fonts: Record<string, string>;
  fontSizes: number[];
  fontWeights: Record<string, number>;
  lineHeights: Record<string, number>;
  letterSpacings?: Record<string, string | number>;
}
