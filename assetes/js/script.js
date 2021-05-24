const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    const gender = document.querySelector('input[type="radio"]:checked').value;
    let tinggi = document.getElementById("tinggi").value;
    let result = document.getElementById("hasil");
    let hasil = "";
  
  


   
        if (gender === "woman") {
            beratIdeal = (tinggi - 100) - (tinggi - 100) * 0.15

        } else {

            beratIdeal = (tinggi - 100) - (tinggi - 100) * 0.10

        }


    if (tinggi < 100) {
            hasil = 'Tinggi harus lebih dari 100 cm'
        } else{
            hasil = 'Berat Ideal kamu ' + beratIdeal + ' kg';
        }

        
   


   
        result.innerText = hasil;
        e.preventDefault();
    
   
   




})


form.ddEventListener('reset', (e) => {
    let result = document.getElementById("hasil");
    result.innerText = 'ww';
    e.preventDefault();
})

