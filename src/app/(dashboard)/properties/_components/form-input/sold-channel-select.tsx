import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SoldChannel } from "@/lib/api/properties/type";

type SoldChannelSelectProps = {
  defaultValue?: string;
};

export const SoldChannelSelect = ({ defaultValue }: SoldChannelSelectProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="sold_channel">Sold Channel</Label>
      <Select name="sold_channel" defaultValue={defaultValue}>
        <SelectTrigger className="capitalize">
          <SelectValue placeholder="-" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="-"> -</SelectItem>
          <SelectItem value={SoldChannel.Web}>{SoldChannel.Web}</SelectItem>
          <SelectItem value={SoldChannel.R123}>{SoldChannel.R123}</SelectItem>
          <SelectItem value={SoldChannel.Socmed}>
            {SoldChannel.Socmed}
          </SelectItem>
          <SelectItem value={SoldChannel.Banner}>
            {SoldChannel.Banner}
          </SelectItem>
          <SelectItem value={SoldChannel.Others}>
            {SoldChannel.Others}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
