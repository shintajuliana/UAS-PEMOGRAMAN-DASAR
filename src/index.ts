import readlineSync from "readline-sync";

// ============================================================
// TIPE DATA BARANG
// ============================================================

type Barang = {
    id: string;
    nama: string;
    kategori: string;
    harga: number;
    stok: number;
};

// ============================================================
// DATA AWAL (SEED DATA)
// ============================================================

let daftarBarang: Barang[] = [
    { id: "BR001", nama: "Indomie Goreng", kategori: "Makanan", harga: 3500, stok: 50 },
    { id: "BR002", nama: "Aqua 600ml", kategori: "Minuman", harga: 4000, stok: 35 },
    { id: "BR003", nama: "Chitato", kategori: "Snack", harga: 12000, stok: 20 },
    { id: "BR004", nama: "Sabun Lifebuoy", kategori: "Perawatan", harga: 5000, stok: 25 },
    { id: "BR005", nama: "Kopi Good Day", kategori: "Minuman", harga: 2500, stok: 40 }
];
