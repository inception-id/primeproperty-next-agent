import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type DescriptionSeoInputProps = {
  defaultValue?: string | null;
};

export const DescriptionSeoInput = ({
  defaultValue,
}: DescriptionSeoInputProps) => {
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor="description" className="flex gap-1">
        Deskripsi (SEO: Max 160 Karakter)
      </Label>
      <Textarea
        id="description_seo"
        placeholder="Tulis deskripsi menarik di sini."
        name="description_seo"
        className="resize-none"
        defaultValue={defaultValue || ""}
        maxLength={160}
      />
    </div>
  );
};
