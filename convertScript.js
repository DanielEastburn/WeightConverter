document.getElementById('output').style.visibility = 'hidden';

const input = document.querySelector('#lbsInput')
console.log(input)

input.addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'
    let lbs = e.target.value
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
    document.getElementById('ozOutput').innerHTML = lbs*16;
    
})