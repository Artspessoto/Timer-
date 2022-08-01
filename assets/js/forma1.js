///pegar o evento onClick e o relógio

const relogio = document.querySelector('.time');
const iniciar = document.querySelector('.begin');
const pausar = document.querySelector('.pause');
const zerar = document.querySelector('.erase');
let segundos = 0; //um contador para entrar na function iniciando a contagem

//os segundos está mantendo seu estado, 
//ela não está sendo criada novamento
//apenas está sendo manipulada pelas funções e alterando o estado dela atual

let timer;

iniciar.addEventListener('click', (e) =>{
    relogio.classList.remove('pausado');
    clearInterval(timer); 
    /* /\ isso garante que não se cria 2 timers na mesma página, sempre limpando caso
    o user inicie 2x        */
    startClock();//função que vai iniciar a contagem a partir da hora 00:00:00
});

pausar.addEventListener('click', (e) =>{
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', (e) =>{
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    //em sitações onde o user zerar a contagem e retomar, a contagem voltar a ser zerada definitivo
    segundos = 0;
});

const getHour = (seconds)=>{
    const data = new Date(seconds*1000); //para ter milésimos de segundo
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const startClock = () => {
    timer = setInterval(function() { //inicia um intervalo que vai adicionar o contador "segundos"
        segundos++; //segundos é o contador que vai ser adicionado cada segundo
        relogio.innerHTML = getHour(segundos);
    }, 1000);
    
}