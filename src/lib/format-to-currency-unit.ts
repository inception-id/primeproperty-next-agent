import { CurrencyUnit } from "./api/properties/type";

export const formatToCurrencyUnit = (
  value: number,
  currency?: CurrencyUnit,
): string => {
  return Intl.NumberFormat("id-ID", {
    notation: "compact",
    compactDisplay: "short",
    currency: currency
      ? currency.toUpperCase()
      : CurrencyUnit.IDR.toUpperCase(),
    style: "currency",
    maximumFractionDigits: 1,
  }).format(value);
};
