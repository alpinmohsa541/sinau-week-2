function sortArray(arr) {
    // Menggunakan algoritma Bubble Sort untuk mengurutkan array
    const sortedArray = [...arr]; // Salin array agar tidak mengubah array asli
    const n = sortedArray.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // Tukar elemen jika dalam urutan yang salah
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    return sortedArray; // Kembalikan array yang sudah diurutkan
}


console.log(sortArray([5, 2, 9, 1, 5, 6])); 
