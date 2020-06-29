import api from './api';

class App {

    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository]');
        this.registerHandlers();
    }

    /**
     * Registra os eventos
     */
    registerHandlers() {
        this.formEl.onsubmit = (event) => {
            this.addRepository(event);
        }
    }

    setLoading(loading = true) {
        if (loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    /**
     * Adiciona um evento a listagem
     * @param {*} event 
     */
    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        // Valida se tem valor no input, se não existir damos um return faz que a função pare de executar
        if (repoInput.length === 0)
            return;

        this.setLoading();

        // Se passou realiza a requizição na api
        try {
            const response = await api.get(`/repos/${repoInput}`);

            console.log(response);

            const { name, description, html_url, owner: { avatar_url } } = response.data;

            // Podemos usar o Short Sintax
            this.repositories.push({
                name: name,
                description: description,
                avatar_url: avatar_url,
                html_url: html_url
            });

            this.inputEl.value = '';

            this.render();

            console.log(this.repositories);
        } catch (error) {
            alert('O repositório não existe!');
        }

        this.setLoading(false);

    }


    render() {
        this.listEl.innerHTML = ''; // Limpa a lista de elementos

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}


const MeuApp = new App();