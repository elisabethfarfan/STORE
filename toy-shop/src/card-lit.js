import { LitElement, html } from 'lit-element';
import './card-information';
import './header-lit';
const shoppingCar = new URL('../assets/carrito-de-compras.png', import.meta.url).href;

export class CardLit extends LitElement {

    static get properties() {
        return {
           toys: { type: Array },
           informationToy: {type: Array},
           flag: {type: Boolean},
           counter: {type: Number}
        };
      }

      constructor() {
        super();
        this.gettingToys();
        this.toys = [];
        this.informationToy= [];
        this.flag = false;
      }

   

    render() {
        return html`
        <style>
            .container{
                width:100%;
                height:92vh;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-wrap: wrap;
                position:relative;
            }
            .containerCard{
                display: flex;
                width:20%;
                height:40vh;
                justify-content:center;
                align-items:center;
                border-radius: 15px;
                margin: 15px;
            }
            .card{
                width:90%;
                height:90%;
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            }
            .imgCard{
                width: 100px;
                height:100px
            }
            .boxPrice{
                width:100%;
                height:50px;                
                display:flex;
                justify-content:space-around;;
                align-items:center;
                margin-top:20px;
                box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
            }
            .shoppingCar {
                width: 33px;
                height: 33px;
                padding-left: 50px;
            }
            .informationToy{
                position:absolute;
                width:50%;
                height:300px;
                display:block;
                border: 2px solid black;
                background-color:white;
               border-radius:20px;
                
            }
            .displayNone{
                display:none;
            }
            .closeDialog{
            z-index:10;
              width:20px;
              border-radius:50%;
              background-color:black;
              color:white;
              position:absolute;
              justify-content:center;
              align-items:center;
              right:0;
              top:0;
              cursor: pointer;
              padding:4px;
            }
            .btnBuy{
                width:100px;
                align:"center";
                background-color:#FF1F5E;
                padding:6px;
                color: white;
                margin-left:5px;
                border:none;
                border-radius:10px;
                
            }
            .btnBuy:hover{
                background-color:#DA3E63;
                cursor: pointer;
            }
            span{
                font-weight:  bolder;
            }
            

        </style>
        <!-- <button class="iniciar" @click="${this.gettingToys}">
        Buscar
        </button> -->
        <header-lit ></header-lit>
        <div class="container"  >
            ${this.toys.map(
                toy =>
                    html`
                     <div class="containerCard" >
                        <div class="card"> 
                                <p> ${toy.id}.  ${toy.category}</p>                   
                                <img class="imgCard" alt='toy' src=${toy.image}  />
                                <div class="boxPrice">
                                    <span>Precio $${toy.price}</span>
                                    <!-- <button class="btnBuy"  @click="${()=>this.getCounter(toy.id)}">Comprar</button> -->

                                    <button class="btnBuy" @click="${()=> this.getToyInformation(toy.id) }">Ver producto</button>
                                    
                                </div>
                                                              
                        </div>
                        
                    </div>
                `        
            )}
            <div class="${this.flag===false ? 'displayNone' :'informationToy'}">
            <button class="closeDialog" @click="${()=> this.closeModal() }">x</button>
            ${this.informationToy === 0 ? '' : 
                        html` <card-information .toys="${this.informationToy}"></card-information>
                    `}
            </div>
       </div>
       <!-- <card-lit></card-lit> -->
        `;
    }


     gettingToys() {
        fetch("https://fakestoreapi.com/products/")
          .then((r) => r.json())
          .then((r) => {
            this.toys = r;
            console.log(this.toys);
          });
      }


    getToyInformation(idToy){
        this.flag = true;
        this.informationToy = this.toys.filter(e => e.id === idToy);
        // console.log('sacar infor', idToy, this.informationToy);
        return this.informationToy;         
    }

    

    closeModal(){
        this.flag = false;
    }

   
}
customElements.define('card-lit', CardLit);