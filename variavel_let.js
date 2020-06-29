function teste(x) {
    let y = 2;  // Usado em escopo de função

    if(x > 5) {
        let y = 4;   // let permite seu valor ser reatribuido
        console.log(x, y);
    }
}

teste(10);