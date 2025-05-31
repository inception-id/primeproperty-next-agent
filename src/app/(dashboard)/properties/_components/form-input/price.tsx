"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";

type PriceInputProps = {
  defaultValue?: number;
  currency?: string;
};

export const PriceInput = ({ defaultValue, currency }: PriceInputProps) => {
  const [price, setPrice] = useState(defaultValue || "");
  return (
    <div className="grid gap-2 w-full ">
      <Label htmlFor="price" className="flex gap-1">
        Harga
        <FaStarOfLife size={6} className="text-red-500" />
      </Label>
      <Input
        id="price"
        type="text"
        name="price"
        placeholder="Rp."
        required
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
