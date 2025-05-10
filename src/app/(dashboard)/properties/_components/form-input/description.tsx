import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type DescriptionInputProps = {
  defaultValue?: string;
};

export const DescriptionInput = ({ defaultValue }: DescriptionInputProps) => {
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor="description">
        Deskripsi <span className="text-red-500">(*)</span>
      </Label>
      <Textarea
        id="description"
        placeholder="Dijual rumah bertabur bintang beratapkan langit dan awan."
        name="description"
        required
        className="resize-none"
        defaultValue={defaultValue}
      />
    </div>
  );
};
