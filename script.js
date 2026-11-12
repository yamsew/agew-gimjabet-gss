document.getElementById('reg-form').addEventListener('submit', function(e) {
    e.preventDefault(); // ገጹ እንዳይቀየር ይከላከላል
    
    const name = document.getElementById('fullname').value;
    const grade = document.getElementById('grade').value;
    
    if(name && grade) {
        const msgBox = document.getElementById('success-msg');
        msgBox.style.display = 'block';
        msgBox.textContent = `አክብሮት እናመሰግናለን ${name}! ለ${grade} የተደረገው ምዝገባዎ በትክክል ተመዝግቧል።`;
        
        // ፎርሙን ባዶ ማድረግ
        document.getElementById('reg-form').reset();
        
        setTimeout(() => {
            msgBox.style.display = 'none';
        }, 5000);
    }
});
