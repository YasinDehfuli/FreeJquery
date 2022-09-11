function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;

}

document.querySelector('#btn2').addEventListener('click', function () {
    document.querySelector('#btn2').style.left = getRandomArbitrary(-300, 200) + 'px';
    document.querySelector('#btn2').style.top = getRandomArbitrary(-50 , 150) + 'px';
})
document.querySelector('#btn1').addEventListener('click',function () {
    window.alert('Knew It !! :)))')
})