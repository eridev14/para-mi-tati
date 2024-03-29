import jsonArr from './frases.json'

const hearts = [
    [0, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0]
];

const app = document.getElementById('app');

let heartContainer = document.createElement('div');
heartContainer.className = 'heart';

function generateHeart() {
    let count = 1;
    let id = 0;
    hearts.forEach(heartRow => {
        heartRow.forEach((item) => {
            const span = document.createElement('span');
            span.classList = item === 1 ? `heart__item heart__item--${count++}` : 'heart__item--none';
            if (item === 1) {
                span.dataset.id = id++;
            }
            heartContainer.append(span);
        });
    });

    app.append(heartContainer);
}

const btn = document.querySelector('.btn');


btn.addEventListener('click', () => {
    generateHeart();
    btn.hidden = true;
    const arrItems = document.querySelectorAll('.heart__item');
    const arr = Array.from(arrItems)
    console.log(arr);

    arr.forEach((item) => {
        console.log(item);
        let div;
        item.addEventListener('mouseenter', () => {
            let idItem = item.getAttribute('data-id')
            div = document.createElement('div');
            div.className = 'message'
            div.innerHTML = `
                <span>
                    ${jsonArr.frases[idItem]}
                </span>
                <img src="./pngwing.com.png" alt="obeja">
            `


            const divWidth = div.offsetWidth;
            const divHeight = div.offsetHeight;

            const maxX = document.body.clientWidth - divWidth - 200;
            const maxY = document.body.clientHeight - divHeight - 300;

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            div.style.left = `${randomX}px`
            div.style.top = `${randomY}px`

            document.body.append(div)
        })

        item.addEventListener('mouseleave', (e) => {
            div.remove();
        })

    })
})


// async function getFrases() {
//     let response = await fetch('/public/frases.json');
//     let json = await response.json();
//     return json.frases
// }



