
fetch('https://match-time-backend.vercel.app/eventos')
    .then(response => response.json())
    .then(data => {
        const eventContainer = document.getElementById('event-container');
        data.forEach(evento => {
            const newDiv = document.createElement('div');
            newDiv.className = 'row efeito-fundo';
            newDiv.style.borderRadius = '10px';
            newDiv.style.marginBottom = '30px';
            newDiv.style.display = 'flex';
            newDiv.style.padding = '20px';

            const imgDiv = document.createElement('div');
            imgDiv.className = 'col-lg-2 col-md-6 col-sm-12 event';
            imgDiv.style.display = 'flex';
            imgDiv.style.justifyContent = 'center';
            imgDiv.style.textAlign = 'center';

            const img = document.createElement('img');
            img.style.width = '85%';
            img.style.height = '100%';
            img.style.borderRadius = '30px';
            img.className = 'game-poster';
            img.src = evento.img;

            imgDiv.appendChild(img);

            const textDiv = document.createElement('div');
            textDiv.className = 'col-lg-9 col-md-6 col-sm-12';

            const eventText = document.createElement('div');
            eventText.className = 'event-text';

            const title = document.createElement('h4');
            title.style.margin = '10px';
            title.style.padding = '5px';
            title.style.textAlign = 'left';
            title.style.color = 'white';
            title.style.textShadow = '0 0 0.2em #87F, 0 0 0.2em #87F, 0 0 0.2em #87F';
            title.textContent = evento.Titulo;

            const description = document.createElement('p');
            description.textContent = evento.descricao;

            const playButton = document.createElement('button');
            playButton.className = 'button-gamer';
            playButton.style.padding = '10px';
            playButton.style.alignSelf = 'auto';
            playButton.style.backgroundColor = 'azure';
            playButton.type = 'button';
            playButton.textContent = 'Jogar Agora';
            playButton.onclick = function () {
                window.location.href = 'lobby-room.html';
            };

            eventText.appendChild(title);
            eventText.appendChild(description);
            eventText.appendChild(playButton);

            textDiv.appendChild(eventText);

            newDiv.appendChild(imgDiv);
            newDiv.appendChild(textDiv);

            eventContainer.appendChild(newDiv);
        });
    })
    .catch(error => console.error('Erro ao obter os dados:', error));

