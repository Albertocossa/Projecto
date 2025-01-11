

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

document.getElementById('cadastrar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var turma = document.getElementById('turma').value;
    
  
    fetch('https://my-api-five-brown.vercel.app/api/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome, turma }),
    })
    .then(response => response.json())
    .then(data => {
      alert('Usuário cadastrado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
  });
  