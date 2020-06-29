class Matematica {
    // Método statico não enxerga o restante da classe, 
    // Método statico é basicamente para passar uma informação e retornar um valor
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));


class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List {           // Herdando uma class
    constructor() {
        super();                        // Chamando o construtor da classe pai
        this.usuario = 'Andre Silva';   // Cria nossas propriedades personalizadas
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
    MinhaLista.mostraUsuario();
}
