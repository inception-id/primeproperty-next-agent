import { z } from "zod";

export const PropertyApiSchema = z.object({
  title: z
    .string()
    .min(1, "Judul tidak boleh kosong")
    .max(55, "Judul Maksimum 55 karakter"),
  description: z.string().min(1, "Deskripsi Properti tidak boleh kosong"),
  description_seo: z.string().max(160, "Deskripsi SEO Maksimum 160 karakter"),
  province: z.string().min(1, "Provinsi tidak boleh kosong"),
  regency: z.string().min(1, "Kabupaten tidak boleh kosong"),
  street: z.string(),
  gmap_iframe: z.string(),
  purchase_status: z.string().min(1, "Jual/Sewa belum dipilih"),
  price: z.number().min(1, "Harga tidak boleh kosong"),
  building_type: z.string().min(1, "Tipe properti tidak boleh kosong"),
  building_condition: z.string().min(1, "Kondisi properti tidak boleh kosong"),
  building_furniture_capacity: z.string().nullable(),
});
