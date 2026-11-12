// ቋንቋ መቀየሪያ (Language Switcher Logic)
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = 'am';

langToggleBtn.addEventListener('click', function() {
    const amElements = document.querySelectorAll('.lang-am');
    const enElements = document.querySelectorAll('.lang-en');
    
    if (currentLang === 'am') {
        currentLang = 'en';
        langToggleBtn.textContent = 'አማርኛ';
        amElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = el.tagName === 'BUTTON' || el.tagName === 'A' ? 'inline-block' : 'block');
    } else {
        currentLang = 'am';
        langToggleBtn.textContent = 'English';
        enElements.forEach(el => el.style.display = 'none');
        amElements.forEach(el => el.style.display = el.tagName === 'BUTTON' || el.tagName === 'A' ? 'inline-block' : 'block');
    }
});

// የተማሪዎች ምዝገባ ሎጂክ
document.getElementById('reg-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = document.getElementById('fullname').value;
    const grade = document.getElementById('grade').value;
    
    if(name && grade) {
        const msgBox = currentLang === 'am' ? document.getElementById('success-msg') : document.getElementById('success-msg-en');
        msgBox.style.display = 'block';
        if(currentLang === 'am') {
            msgBox.textContent = `አክብሮት እናመሰግናለን ${name}! ለ${grade} የተደረገው ምዝገባዎ በትክክል ተመዝግቧል።`;
        } else {
            msgBox.textContent = `Thank you ${name}! Your registration for ${grade} has been successfully submitted.`;
        }
        
        document.getElementById('reg-form').reset();
        setTimeout(() => {
            msgBox.style.display = 'none';
        }, 5000);
    }
});

// የውጤት ማጣሪያ ሎጂክ (Simulation)
function checkResult() {
    const studentId = document.getElementById('student-id').value.trim();
    const resultDisplay = document.getElementById('result-display');
    
    if(studentId === "") {
        alert(currentLang === 'am' ? "እባክዎ ትክክለኛ የመለያ ቁጥር (ID) ያስገቡ!" : "Please enter a valid Student ID!");
        return;
    }
    
    resultDisplay.style.display = 'block';
    
    if(studentId.toUpperCase() === "AGSS-101") {
        if(currentLang === 'am') {
            resultDisplay.innerHTML = `<strong>ውጤትዎ ተገኝቷል!</strong><br>ስም፡ ዮሐንስ አበበ<br>ክፍል፡ 10ኛ ክፍል<br>አጠቃላይ ውጤት፡ 88% (ማለፊያ - Very Good)`;
        } else {
            resultDisplay.innerHTML = `<strong>Result Found!</strong><br>Name: Yohannes Abebe<br>Grade: Grade 10<br>Total Result: 88% (Pass - Very Good)`;
        }
    } else {
        if(currentLang === 'am') {
            resultDisplay.innerHTML = `የመለያ ቁጥር <strong>${studentId}</strong> ያለው ተማሪ አልተገኘም ወይም ውጤቱ ገና አልወጣም።`;
        } else {
            resultDisplay.innerHTML = `Student with ID <strong>${studentId}</strong> was not found or results are not yet released.`;
        }
    }
}

document.getElementById('check-result-btn').addEventListener('click', checkResult);
document.getElementById('check-result-btn-en').addEventListener('click', checkResult);
