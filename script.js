// 1. የተማሪዎች ምዝገባ ሎጂክ
document.getElementById('reg-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const name = document.getElementById('fullname').value;
    const grade = document.getElementById('grade').value;
    
    if(name && grade) {
        const msgBox = document.getElementById('success-msg');
        msgBox.style.display = 'block';
        msgBox.textContent = `አክብሮት እናመሰግናለን ${name}! ለ${grade} የተደረገው ምዝገባዎ በትክክል ተመዝግቧል።`;
        
        document.getElementById('reg-form').reset();
        
        setTimeout(() => {
            msgBox.style.display = 'none';
        }, 5000);
    }
});

// 2. የውጤት ማጣሪያ ሎጂክ (Simulation)
document.getElementById('check-result-btn').addEventListener('click', function() {
    const studentId = document.getElementById('student-id').value.trim();
    const resultDisplay = document.getElementById('result-display');
    
    if(studentId === "") {
        alert("እባክዎ ትክክለኛ የመለያ ቁጥር (ID) ያስገቡ!");
        return;
    }
    
    resultDisplay.style.display = 'block';
    
    // ለናሙና የሚሆን ውጤት ማሳየት (በመቀጠል ከዳታቤዝ ጋር ማገናኘት ይቻላል)
    if(studentId.toUpperCase() === "AGSS-101") {
        resultDisplay.innerHTML = `<strong>ውጤትዎ ተገኝቷል!</strong><br>ስም፡ ዮሐንስ አበበ<br>ክፍል፡ 10ኛ ክፍል<br>አጠቃላይ አማርኛ/ሂሳብ ውጤት፡ 88% (ማለፊያ - Very Good)`;
    } else {
        resultDisplay.innerHTML = `የመለያ ቁጥር <strong>${studentId}</strong> ያለው ተማሪ አልተገኘም ወይም ውጤቱ ገና አልወጣም። እባክዎ ቁጥሩን አስተካክለው እንደገና ይሞክሩ።`;
    }
});
