"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type PriceInputProps = {
  defaultValue?: number;
};

export const PriceInput = ({ defaultValue }: PriceInputProps) => {
  const [price, setPrice] = useState(defaultValue || 0);
  return (
    <div className="grid gap-2 w-full ">
      <Label htmlFor="price" className="flex flex-wrap gap-1">
        Harga
        <span className="text-red-500">(*)</span>
        {price > 0 && <span>(Rp. {price.toLocaleString("id-ID")})</span>}
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
    </div>
  );
};
