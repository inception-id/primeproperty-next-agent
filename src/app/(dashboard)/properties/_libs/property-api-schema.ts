import { z } from "zod";

export const PropertyApiSchema = z.object({
  title: z.string().min(1, "Judul tidak boleh kosong"),
  description: z.string().min(1, "Deskripsi tidak boleh kosong"),
  province: z.string().min(1, "Provinsi tidak boleh kosong"),
  regency: z.string().min(1, "Kabupaten tidak boleh kosong"),
  street: z.string(),
  gmap_iframe: z.string(),
  purchase_status: z.string().min(1, "Jual/Sewa belum dipilih"),
  building_certificate: z.string().min(1, "Sertifikat belum dipilih"),
  price: z.number().min(1, "Harga tidak boleh kosong"),
  building_type: z.string().min(1, "Tipe properti tidak boleh kosong"),
  building_condition: z.string().min(1, "Kondisi properti tidak boleh kosong"),
  building_furniture_capacity: z.string().nullable(),
});
