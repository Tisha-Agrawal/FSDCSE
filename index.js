function bulb_on(bulb) {
    bulb.src = 'yeloe.png'; 
}
function bulb_off(bulb) {

    bulb.src = 'lightt.png';
}

document.getElementById('startButton').addEventListener('click', function() {
    const num = parseInt(document.getElementById('numBulbs').value); 
    const container = document.getElementById('bulbContainer');
    container.innerHTML = ''; 
    for (let i = 0; i < num; i++) {
        const bulb = document.createElement('img');
        bulb.className = 'bulb';
        bulb.src = 'lightt.png'; 
        bulb.style.height="40px"
        bulb.style.width="40px"
        bulb.addEventListener('click', function() {
            if (bulb.src.includes('lightt.png')) {
                bulb_on(bulb); 
            } else {
                bulb_off(bulb); 
            }
        });
        container.appendChild(bulb);
    }
});
