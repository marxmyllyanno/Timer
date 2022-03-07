function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, 
        timeZone: 'UTC'
    });
}

segundos = 0
let timer

function passaSegundos(){
    timer = setInterval(function(){
        segundos ++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}


const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('zerado')
    relogio.classList.remove('pausado')
    clearInterval()
    passaSegundos()
})
pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado')
    clearInterval(timer)
    segundos = segundos
})
zerar.addEventListener('click', function(event){
    relogio.classList.add('zerado')
    relogio.innerHTML = '00:00:00'
    clearInterval(timer)
    segundos = 0
})
