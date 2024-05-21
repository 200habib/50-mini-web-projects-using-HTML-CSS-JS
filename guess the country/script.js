let container = document.getElementById('container');
let next = document.getElementById('next');
let input = document.getElementById('input');

let country = {
    countryName: ['italy','french' ,'germany' ,'spain' ,'portogal' ,'russia'],
    countryFlag : ['/img/Flag_of_Italy.svg','/img/Flag-France.webp' ,'/img/Flag_of_Germany.svg' ,'/img/Flag-Spain.webp']
}

let count = 0
country.countryName[count]
    next.addEventListener('click', function() {
        if (input.value==country.countryName[count]) {
            count++
            imge.src= country.countryFlag[count]
        }
    });
    const imge = document.createElement("img");
    imge.src= country.countryFlag[count]
    container.appendChild(imge);
