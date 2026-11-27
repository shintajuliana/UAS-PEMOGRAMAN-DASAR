import readlineSync from "readline-sync";

// Tipe data untuk setiap barang
type Barang = {
   id: string;
   nama: string;
   kategori: string;
   harga: number;
   stok: number;
};
// Data awal minimal 5 barang
let daftarBarang: Barang[] = [
    { id: "BR001", nama: "Indomie Goreng", kategori: "Makanan", harga: 3500, stok: 50 },
    { id: "BR002", nama: "Aqua 600ml", kategori: "Minuman", harga: 4000, stok: 35 },
    { id: "BR003", nama: "Chitato", kategori: "Snack", harga: 12000, stok: 20 },
    { id: "BR004", nama: "Sabun Lifebuoy", kategori: "Perawatan", harga: 5000, stok: 25 },
    { id: "BR005", nama: "Kopi Good Day", kategori: "Minuman", harga: 2500, stok: 40 }
];

// ============================================================
// FUNGSI UMUM
// ============================================================

// Fungsi tanpa parameter dan tanpa return
function tampilkanGaris(): void {
    console.log("==================================================");
}

// Fungsi tanpa parameter dengan return
function hitungJumlahJenisBarang(): number {
    return daftarBarang.length;
}

// Fungsi dengan parameter dan return
function cariBarangById(id: string): Barang | undefined {
    return daftarBarang.find(
        (barang: Barang) => barang.id.toLowerCase() === id.toLowerCase()
    );
}

// Fungsi dengan parameter tanpa return
function tampilkanDetailBarang(barang: Barang): void {
    tampilkanGaris();
    console.log("              DETAIL BARANG");
    tampilkanGaris();
    console.log(ID       : ${barang.id});
    console.log(Nama     : ${barang.nama});
    console.log(Kategori : ${barang.kategori});
    console.log(Harga    : Rp${barang.harga.toLocaleString("id-ID")});
    console.log(Stok     : ${barang.stok});
    console.log(Status   : ${barang.stok > 0 ? "Tersedia" : "Habis"});
    tampilkanGaris();
}

// Meminta input teks yang tidak boleh kosong
function inputTeks(pesan: string): string {
    let hasil = "";

    while (hasil.trim() === "") {
        hasil = readlineSync.question(pesan).trim();

        if (hasil.trim() === "") {
            console.log("Input tidak boleh kosong. Silakan coba lagi.");
        }
    }

    return hasil;
}

// Meminta input angka dan memvalidasinya
function inputAngka(
    pesan: string,
    minimal: number,
    bolehDesimal: boolean = false
): number {
    let angka = NaN;
    let valid = false;

    while (!valid) {
        const input = readlineSync.question(pesan).trim();
        angka = Number(input);

        if (input === "" || Number.isNaN(angka) || !Number.isFinite(angka)) {
            console.log("Input harus berupa angka yang valid.");
        } else if (angka < minimal) {
            console.log(Angka minimal adalah ${minimal}.);
        } else if (!bolehDesimal && !Number.isInteger(angka)) {
            console.log("Input harus berupa bilangan bulat.");
        } else {
            valid = true;
        }
    }

    return angka;
}

// Menghitung total nilai seluruh persediaan
function hitungTotalNilaiStok(): number {
    let totalNilai = 0;

    for (const barang of daftarBarang) {
        totalNilai += barang.harga * barang.stok;
    }

    return totalNilai;
}

// ============================================================
// CREATE - MENAMBAHKAN BARANG
// ============================================================

function tambahBarang(): void {
    tampilkanGaris();
    console.log("                 TAMBAH BARANG");
    tampilkanGaris();

    let id = inputTeks("Masukkan ID barang: ").toUpperCase();

    // Validasi ID agar tidak duplikat
    while (cariBarangById(id) !== undefined) {
        console.log("ID sudah digunakan. Masukkan ID yang berbeda.");
        id = inputTeks("Masukkan ID barang: ").toUpperCase();
    }

    const nama = inputTeks("Masukkan nama barang: ");
    const kategori = inputTeks("Masukkan kategori barang: ");
    const harga = inputAngka("Masukkan harga barang (Rp): ", 1, true);
    const stok = inputAngka("Masukkan jumlah stok: ", 0);

    // Menentukan status berdasarkan stok
    if (stok >= 0) {
        if (stok === 0) {
            console.log("Perhatian: barang akan tersimpan dengan status HABIS.");
        } else {
            if (stok <= 5) {
                console.log("Perhatian: stok barang tergolong sedikit.");
            } else {
                console.log("Stok barang mencukupi.");
            }
        }
    }

    const barangBaru: Barang = {
        id,
        nama,
        kategori,
        harga,
        stok
    };

    daftarBarang.push(barangBaru);

    console.log("\nBarang berhasil ditambahkan!");
    tampilkanDetailBarang(barangBaru);
}
