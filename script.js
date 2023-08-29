function hitungRataRata() {
  const nama = document.getElementById("nama").value;
  const matkul = document.getElementById("matkul").value;
  const grade = document.getElementById("grade").value;

  if (nama === "" || matkul === "" || grade === "") {
    alert("Harap isi semua form sebelum menghitung!");
    return;
  }

  let gradeHuruf;
  switch (grade) {
    case "4":
      gradeHuruf = "A";
      break;
    case "3":
      gradeHuruf = "B";
      break;
    case "2":
      gradeHuruf = "C";
      break;
    case "1":
      gradeHuruf = "D";
      break;
    case "0":
      gradeHuruf = "E";
      break;
    default:
      gradeHuruf = "Tidak Valid";
    }

  const nilaiRataRata = parseFloat(grade);

  const resultTable = document.getElementById("resultTable");
  const newRow = resultTable.insertRow(-1);
  const namaCell = newRow.insertCell(0);
  const matkulCell = newRow.insertCell(1);
  const gradeCell = newRow.insertCell(2);
  const nilaiCell = newRow.insertCell(3);

  namaCell.innerHTML = nama;
  matkulCell.innerHTML = matkul;
  gradeCell.innerHTML = gradeHuruf;
  nilaiCell.innerHTML = nilaiRataRata.toFixed(2);

  resultTable.style.display = "table";
}
