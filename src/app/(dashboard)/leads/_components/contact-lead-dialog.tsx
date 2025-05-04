"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { env } from "@/lib/env";
import { cn } from "@/lib/utils";
import { LuPhone, LuX } from "react-icons/lu";
import { MdWhatsapp } from "react-icons/md";

type ContactLeadDialogProps = {
  name: string;
  phone: string;
  propertyId: number;
};

export const ContactLeadDialog = ({
  name,
  phone,
  propertyId,
}: ContactLeadDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger className="underline underline-offset-4 flex items-center gap-2">
        <LuPhone />
        <span>0{phone}</span>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <div className="flex items-center justify-between">
          <DialogTitle className="font-bold">Contact Lead</DialogTitle>
          <DialogClose>
            <LuX />
          </DialogClose>
        </div>
        <DialogDescription className="text-muted-foreground text-sm mb-4">
          How do ya want to contact &apos;{name}&apos;?
        </DialogDescription>

        <div className="grid grid-cols-2 gap-4">
          <DialogClose
            className={cn(
              buttonVariants({ variant: "outline" }),
              "dark:bg-foreground dark:text-background",
            )}
            onClick={() => {
              const url = `tel: +62${phone}`;
              window.open(url, "_blank");
            }}
          >
            <LuPhone />
            <span>Call</span>
          </DialogClose>
          <DialogClose
            className={cn(buttonVariants(), "bg-green-500 hover:bg-green-400")}
            onClick={() => {
              const whatsappUrl = new URL("https://api.whatsapp.com/send");
              whatsappUrl.searchParams.append("phone", `62${phone}`);
              const text = `Halo, saya ... dari Primepro Indonesia.\nApakah ada yang bisa kami bantu dengan properti yang bapak/ibu lihat di ${env.NEXT_PUBLIC_CLIENT_URL}/properties/${propertyId}?`;
              whatsappUrl.searchParams.append("text", text);
              window.open(whatsappUrl, "_blank");
            }}
          >
            <MdWhatsapp />
            <span>Whatsapp</span>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
