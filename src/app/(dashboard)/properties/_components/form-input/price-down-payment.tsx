"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type PriceDownPaymentInputProps = {
  defaultValue?: number | null;
  currency?: string;
};

export const PriceDownPaymentInput = ({
  defaultValue,
  currency,
}: PriceDownPaymentInputProps) => {
  const [price, setPrice] = useState(defaultValue || "");
  return (
    <div className="grid gap-2 w-full ">
      <Label htmlFor="price_down_payment" className="flex gap-1">
        Harga DP (Opsional)
      </Label>
      <Input
        id="price_down_payment"
        type="text"
        name="price_down_payment"
        placeholder="Rp."
        onChange={(e) => {
          if (isNaN(+e.target.value)) return;
          setPrice(Number(e.target.value));
        }}
        value={price}
      />
      {price && Number(price) > 0 && (
        <span className="text-xs">
          {currency?.toUpperCase()} {price.toLocaleString("id-ID")}
        </span>
      )}
    </div>
  );
};
