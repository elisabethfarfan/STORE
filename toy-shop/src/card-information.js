import { LitElement, html } from 'lit-element';
import './card-lit';
import './header-lit';
import './shopping-car';

const shoppingCar = new URL('../assets/carrito-de-compras.png', import.meta.url).href;

export class CardInformation extends LitElement {

  static get properties() {
    return {
      toys: { type: Array },
      flag: { type: Boolean },
      counter: { type: Number },
      buyToys: { type: Array }
    };
  }

  constructor() {
    super();
    this.counter = 0;
    this.buyToys = [];
  }


  render() {

    return html`
         <style>
          .container{
            position:sticky;
            white:100%;
            height:100%;
            padding:5px 10px 10px 10px;
            background-color:white;
            border-radius:10px;
            font-family: 'Arial';
            color:#727272;
            
          }
          .boxDetail{
            white:100%;
            display:flex;
          }
          .imgProduct{
            white:50%;
            height:160px;
            margin-right:15px;

          }
          .boxDescription{
              /* white:100px; */
              flex-direction: column;
              padding:5px;
              font-size:13px;

            }
          .boxPrice{
            width:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            font-weight:  bolder;
            color: #FF1F5E;
            font-size:25px;
            margin-top:30px;
            /* background-color: #FF1F5E; */
          }
          
          .shoppingCar {
                width: 33px;
                height: 33px;
                padding-left: 50px;
            }
            .btnBuy{
                width:100px;
                align:"center";
                background-color:#FF1F5E;
                padding:6px;
                color: white;
                border:none;
                border-radius:10px;
                margin-left:50px;
                
                
            }
            .btnBuy:hover{
                background-color:#DA3E63;
                cursor: pointer;
            }
          

        </style>

      <div class="container">         
        
        ${this.toys.map(
      toy =>
        html`
              <h2>${toy.title}</h2>
              <div class="boxDetail">
                    <img class="imgProduct" alt='toy' src=${toy.image} />
                    <div class="boxDescription">
                        <p>${toy.description}</p>
                        <div class="boxPrice">
                          <span>Precio $ ${toy.price}</span>
                          <button @click="${()=> this.incrementar()}" >Comprar</button>
                        </div>
                        
                    </div>
               </div>
              
                                
            `
    )}
      </div>
      <shopping-car id="shooping"></shopping-car>  
      
        `;
  }

  // get feedback() {
  //   return this.shadowRoot.getElementById('shooping');
  // }

  incrementar() {
    this.counter+=1;
   this.shadowRoot.getElementById('shooping').getCounter(this.counter);
  }

}
customElements.define('card-information', CardInformation);