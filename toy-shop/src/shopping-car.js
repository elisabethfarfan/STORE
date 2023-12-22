import { LitElement, html } from 'lit-element';
const shoppingCar = new URL('../assets/carrito-de-compras.png', import.meta.url).href;

export class ShoppingCar extends LitElement {

    static get properties() {
        return {           
           counter: {type: Number},
           opened: { type: Boolean },
        };
      }
      constructor() {
        super();   
        // this.counter = 0;
      }
      
    render() {
        
        return html`
         <style>
            body {margin: 0px;}

            .nav {
                display: flex;
                background-color: #FF1F5E;
                width: 100%;
                height: 8vh;
                padding: .2em 0;
            }
      
            .boxToyLogo {
                display: flex;
                justify-content: flex-start;
                width: 80%;
                align-items: center;
                margin-left:15px;
            }
            
            .toyLogo, .shoppingCar {
                width: 41px;
                height: 33px;
                padding-right: 8px;
            }
            .titleToy {
                font-size: 30px;
                color: #fff;
                text-shadow: 1px 5px 4px rgb(255 255 255 / 20%);
                font-family: 'Arial';
                
            
            }
            .buscador{
                background-color: white;
                width:20%;
                height:30px;
                margin-right:15px;
            }
            .closeDialog{                
              width:15px;
              border-radius:50%;
              background-color:white;
              color:black;
              position:absolute;
              align-items:center;
              /* right:0; */
              top:0;
              left:-1;
              cursor: pointer;
              padding:4px;
            }
            /* .opened {
                height:5px;
                font-size: 8px;
            } */
        
        </style>
         <div class="${this.opened ? 'closeDialog' : ''}">
                <img class="shoppingCar" alt='carro de compras' src=${shoppingCar} />
                <div class="closeDialog" >${this.counter}</div>
        </div>
        `;
    }

    getCounter(counter){
        this.counter=counter;
        this.opened = true;
        console.log('desde shooping-car', this.counter);
    }


}
customElements.define('shopping-car', ShoppingCar);