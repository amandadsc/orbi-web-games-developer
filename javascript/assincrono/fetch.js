fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

    // retorna uma Promise, ou seja, tem que utilizar o await com usa fetch