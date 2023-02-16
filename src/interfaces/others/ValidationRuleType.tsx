export type InputRule = {
  regex: string | RegExp;
  errorRegex: string;
  min?: number;
  max?: number;
  errorLen?: string;
  error?: string;
};
