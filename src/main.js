class App {
    
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
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

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida à sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v4',
            html_url: 'http://github.com/rocketseat/rocketseat.com.br'
        });

        console.log(this.repositories);
    }


}


const MeuApp = new App();