// Modelo antigo sem usar async e await
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
});

minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });


// Async e Await
// A partir do momento que definimos uma função como async automaticamente ela vira uma Promise
async function executaPromise() {
    // Usamos vários awais ao inves do .then a próxima linha só vai executar quando a anterior estiver terminado
    const response = await minhaPromise();
    const response = await minhaPromise();
    const response = await minhaPromise();
    const response = await minhaPromise();

    console.log(response);
}

executaPromise();


// Arrow Function
const executaPromiseArrow = async () => {
    const response = await minhaPromise();
    const response = await minhaPromise();
    const response = await minhaPromise();
    const response = await minhaPromise();
}

executaPromiseArrow();