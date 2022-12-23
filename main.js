const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('how are you') || text.includes('How are you')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'I am fine, are you?';
      texts.appendChild(p)
    }
    if (text.includes("what's your name") || text.includes('what is your name') || 
    text.includes('What is your name')|| text.includes("What's your name")) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'My name is Command Robot...';
      texts.appendChild(p)
    }
    if (text.includes('Open Student System') || text.includes('open Student System') || text.includes('open Student system') || text.includes('open student system')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Opening Beykoz Student System...';
      texts.appendChild(p)
      console.log('Opening Student System...')
      window.open('https://online.beykoz.edu.tr/login/index.php')
    }
    if (text.includes('open YouTube') || text.includes('Open YouTube')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Opening Youtube...';
      texts.appendChild(p)
      console.log('Opening Youtube...')
      window.open('https://www.youtube.com/')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();