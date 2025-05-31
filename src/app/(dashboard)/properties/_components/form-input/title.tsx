import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaStarOfLife } from "react-icons/fa";

type TitleInputProps = {
  defaultValue?: string;
};

export const TitleInput = ({ defaultValue }: TitleInputProps) => {
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor="title" className="flex gap-1">
        Judul
        <FaStarOfLife size={6} className="text-red-500" />
      </Label>
      <Input
        id="title"
        type="text"
        name="title"
        placeholder="Dijual Rumah Indah"
        required
        defaultValue={defaultValue}
      />
    </div>
  );
};
