let bag = document.getElementById('mouse-parallax-bg');
console.log(bag)
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bag.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});