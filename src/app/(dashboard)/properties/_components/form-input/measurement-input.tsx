"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type MeasurementInputProps = React.ComponentProps<typeof Input> & {
  label: string;
  unit?: string;
};

export const MeasurementInput = ({
  label,
  unit,
  ...props
}: MeasurementInputProps) => {
  const [value, setValue] = useState(props.defaultValue || 0);
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor={props.id}>
        {label} {unit && `(${unit})`}
      </Label>
      <Input
        type="text"
        id={props.id}
        name={props.name}
        onChange={(e) => {
          if (isNaN(+e.target.value)) return;
          setValue(Number(e.target.value));
        }}
        value={value}
      />
    </div>
  );
};
