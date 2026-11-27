import readlineSync from "readline-sync";

// Tipe data untuk setiap barang
type Barang = {
   id: string;
   nama: string;
   kategori: string;
   harga: number;
   stok: number;
};
