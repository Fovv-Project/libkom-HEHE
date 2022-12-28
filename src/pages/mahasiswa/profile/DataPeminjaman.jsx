import { book1, book2 } from "../../../assets/images";

const RiwayatPeminjaman = () => {
    const DataPeminjaman = [
        {
            fotoBuku : book1,
            judul : "Belajar Koding",
            status : "Dipinjam",
            tenggatWaktu : "Senin, 21 November 2022"
        },
        {
            fotoBuku : book2,
            judul : "Laravel Uncover",
            status : "Dikembalikan",
            tenggatWaktu : "Jumat, 18 November 2022"
        },
        {
            fotoBuku : book1,
            judul : "Belajar Koding",
            status : "Dipinjam",
            tenggatWaktu : "Senin, 21 November 2022"
        },
        {
            fotoBuku : book2,
            judul : "Laravel Uncover",
            status : "Dikembalikan",
            tenggatWaktu : "Jumat, 18 November 2022"
        },
    ]
    
    for (let index = 0; index < 99; index++) {
        DataPeminjaman.push(
            {
                fotoBuku : book1,
                judul : "Belajar Koding",
                status : "Dipinjam",
                tenggatWaktu : "Senin, 21 November 2022"
            }
        )
        DataPeminjaman.push(
            {
                fotoBuku : book2,
                judul : "Laravel Uncover",
                status : "Dikembalikan",
                tenggatWaktu : "Jumat, 18 November 2022"
            }
        )
        DataPeminjaman.push(
            {
                fotoBuku : book1,
                judul : "Belajar Koding",
                status : "Dipinjam",
                tenggatWaktu : "Senin, 21 November 2022"
            }
        )
    }
    
    return DataPeminjaman;
}

const List = (fotoBukuPeminjaman, judulBuku, statusBuku, tenggatWaktuPeminjaman) => {
    return (
            {
                fotoBuku : fotoBukuPeminjaman,
                judul : judulBuku,
                status : statusBuku,
                tenggatWaktu : tenggatWaktuPeminjaman
            }
    )
}

export default function makeData() {
    const makeDataLevel = (depth = 0) => {
      const len = RiwayatPeminjaman.length[depth];
      return RiwayatPeminjaman().map((item,index) => {
        return {
          ...List(item.fotoBuku, item.judul, item.status, item.tenggatWaktu),
          subRows: RiwayatPeminjaman.length[depth + 1] ? makeDataLevel(depth + 1) : undefined
        };
      });
    };
  
    return makeDataLevel();
}