
// Function to change string to binary 
/** 
 * TODO: Convert String TO Binary
 * ? First: Loop input agar setiap huruf dapat diakses
 * ? Second: Ubah setiap karakter menjadi unicode, kemudian convert ke binary string menggunakan parameter 2 pada toString()
 * ? Third: Buat Array dan masukkan setiap karakter, kemudian join() untuk menggabungkan menjadi satu string
 */
    const binary = (string) => {

            let binary = "";

            for (var i = 0; i < string.length; i++) {
                var bin = string[i].charCodeAt().toString(2);
                binary += Array(8 - bin.length + 1).join(" ") + bin;
            } 
            
            console.log(binary);
    }

    
    /** 
     * TODO: Call the function
     */
    binary('Nama saya Resqi Ageng Rahmatullah')

