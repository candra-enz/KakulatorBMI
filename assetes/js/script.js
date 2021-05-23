const form = document.getElementById('form');



form.addEventListener('submit', (e) => {


    const gender = document.querySelector('input[type="radio"]:checked').value;
    const tinggi = document.getElementById("tinggi").value;
    const result = document.getElementById("hasil");

    let hasil = "";
  
  
        if (gender === "woman") {
            beratIdeal = (tinggi - 100) - (tinggi - 100) * 0.15

        } else {

            beratIdeal = (tinggi - 100) - (tinggi - 100) * 0.10

        }

    hasil ='Berat Ideal kamu ' +beratIdeal + ' kg';
   
   
    result.innerText = hasil;
    e.preventDefault();




});

