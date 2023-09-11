/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data.
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Hello Vue! Nice to meet you!',
            image: 'https://picsum.photos/200/300',
            style: 'text-center bg-dark p-5'
        }
    },
    methods:{
        updateStyle(){
            if(this.style === 'text-center bg-dark p-5'){
                this.style = 'text-center bg-danger p-5'
            } else {
                this.style = 'text-center bg-dark p-5'
            }
        }
    }
}).mount('#app')