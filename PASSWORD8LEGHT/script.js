let input = document.getElementById('input');
let show = document.getElementById('show');
let container = document.getElementById('container');
let close = document.getElementById('close');
close.style.display = 'none';

show.addEventListener('click', function() {
    input.type = 'text'; 
    show.style.display = "none";
    close.style.display = 'block';
    setTimeout(() => {
        input.type = 'password'; 
        show.style.display = "block";
        close.style.display = 'none';
    }, 1000);
});

let weakMessage = document.getElementById('weakMessage');
weakMessage.style.display = "none";

let mediumMessage = document.getElementById('mediumMessage');
mediumMessage.style.display = "none";

let strongMessage = document.getElementById('strongMessage');
strongMessage.style.display = "none";

let veryStrongMessage = document.getElementById('veryStrongMessage');
veryStrongMessage.style.display = "none";

input.addEventListener("input", function () {
    let inputValue = input.value.trim();
    let inputLength = inputValue.length;

    // Reset message displays
    weakMessage.style.display = "none";
    mediumMessage.style.display = "none";
    strongMessage.style.display = "none";
    veryStrongMessage.style.display = "none";

    // Check password strength
    if (inputLength < 8) {
        weakMessage.style.display = "block";
        input.style.backgroundColor ="red";
    } else {
        let containsNumbers = /\d/.test(inputValue);
        let containsSpecialChars = /[@#]/.test(inputValue);
        input.style.backgroundColor ="yellow";

        if (containsNumbers) {
            strongMessage.style.display = "block";
        } else if (containsSpecialChars) {
            veryStrongMessage.style.display = "block";
            input.style.backgroundColor ="green";
        } else {
            mediumMessage.style.display = "block";
        }
    }
});
