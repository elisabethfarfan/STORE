import { LitElement, html } from 'lit-element';

export class SearchLit extends LitElement {

    static get properties() {
        return {           
           placeholder: {type: String},
           listSearch: {type: Array},
           newValue: {type : Array}
        };
      }
      
     handleSearch(listSearh){      
        // if (listSearh !== '') {
        //     let expresion = new RegExp(`${listSearh}.*`, "i");
        //     this.newValue = this.listSearch.filter(x => expresion.test(x.title));
        // }}
        console.log('pruebaa de buscar');
        this.dispatchEvent(new CustomEvent('searchArr', options));
    };

    render() {
        return html`
        <style>
            body{
                margin:0;
                padding:0;
                background-color:#fff;
                font-family: sans-serif;
            }
            .box{
                margin:35px;
                position:absolute;
                top:0;
                left:50%;
                transform: translate(-50%, -50%);
            }
            input.src{
                padding: 9px 10px 9px 32px;
                outline:none;
                font-size:18px;
                border-radius:15px;
                color: black;
                border: 3px solid #a50559;
                background: #fff url("../assets/lupa.png") no-repeat 9px center;
                width: 60px;
                transition: all .5s;
            }

            input.src:hover{
                width: 180px;
                background-color: #fff;
                border-color: #8c10b3;
                box-shadow:0 0 5px #6dcff680;
            }
        </style>
        <div class="box">
            <input 
            type="text" 
            name="search" 
            placeholder="${this.placeholder}" 
            class="src" 
            @change="${() => this.handleSearch()}"
            autocomplete="off" />
        </div>
        `;
    }
}
customElements.define('search-lit', SearchLit);