const RiwayatHadir = () => {
    const DataAbsen = [
        {
            nama : "Zafira Galea",
            nim : "09021281924049",
            jurusan : "Teknik Informatika",
            jamHadir : "10.00",
            hariHadir : "Senin, ",
            tanggalHadir : "13-10-2022"
        },
        {
            nama : "Shabrina Putri F",
            nim : "09021381924117",
            jurusan : "Teknik Informatika",
            jamHadir : "10.00",
            hariHadir : "Senin, ",
            tanggalHadir : "13-10-2022"
        },
        {
            nama : "Nilam Musdalifa",
            nim : "09021281924067",
            jurusan : "Teknik Informatika",
            jamHadir : "10.00",
            hariHadir : "Senin, ",
            tanggalHadir : "13-10-2022"
        },
    ]
    
    for (let index = 0; index < 99; index++) {
        DataAbsen.push(
            {
                nama : "Zafira Galea",
                nim : "09021281924076",
                jurusan : "Teknik Informatika",
                jamHadir : "10.00",
                hariHadir : "Senin, ",
                tanggalHadir : "13-10-2022"
            }
        )
        DataAbsen.push(
            {
                nama : "Shabrina Putri F",
                nim : "09021381924117",
                jurusan : "Teknik Mesin",
                jamHadir : "10.00",
                hariHadir : "Senin, ",
                tanggalHadir : "13-10-2022"
            }
        )
        DataAbsen.push(
            {
                nama : "Nilam Musdalifa",
                nim : "09021281924067",
                jurusan : "Teknik Tambang",
                jamHadir : "10.00",
                hariHadir : "Senin, ",
                tanggalHadir : "13-10-2022"
            }
        )
    }
    
    return DataAbsen;
}

const List = (namaMhs, nimMhs, jurusanMhs, jam, hari, tanggal) => {
    return (
            {
                nama : namaMhs,
                nim : nimMhs,
                jurusan : jurusanMhs,
                jamHadir : jam,
                hariHadir : hari,
                tanggalHadir : tanggal
            }
    )
}

export default function makeData() {
    const makeDataLevel = (depth = 0) => {
      const len = RiwayatHadir.length[depth];
      return RiwayatHadir().map((item,index) => {
        return {
          ...List(item.jamHadir, item.hariHadir, item.tanggalHadir),
          subRows: RiwayatHadir.length[depth + 1] ? makeDataLevel(depth + 1) : undefined
        };
      });
    };
  
    return makeDataLevel();
}