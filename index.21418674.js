const e=[{path:/^\/welcome$/,handler:function(e){let t=document.createElement("div"),n=document.createElement("style");return t.className="welcome",t.innerHTML=`
    <custom-text variant="title" class="title">
      Prueba T\xe9cnica - SPA Vanilla JS
    </custom-text>
    <div>
      <custom-text variant="body" class="body">
        \xa1Hola, soy Pablo, desarrollador web full-stack!
      </custom-text>
      <custom-text class="body">
        He optado por hacer una peque\xf1a app de clima, para saber el tiempo de mis tres ciudades favoritas!
      </custom-text>
    </div>
    <custom-button class="start-button">\xa1Empezar!</custom-button>
  `,n.innerHTML=`
    .welcome {
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
    }

    .title {
      font-size: 40px;
      animation: fade .6s ease;
    }

    .body {
      font-size: 20px;
      max-width: 80%;
      text-align: center;
      margin-bottom: 20px;
    }

    .start-button {
      font-size: 24px;
    }

    @keyframes fade {
      0% {
        transform: translateY(-100%);
      }
      75% {
        transform: translateY(10%);
      }
      100% {
        transform: translateY(0%);
      }
    }

    @media (max-width: 768px) {
      .title {
        font-size: 30px;
      }

      .body {
        font-size: 18px;
      }

      .start-button {
        font-size: 20px;
      }
    }
  `,t.appendChild(n),t.querySelector(".start-button").addEventListener("click",function(){e.goTo("/marpla")}),t}},{path:/^\/marpla$/,handler:function(e){let t=document.createElement("div"),n=document.createElement("custom-header");n.params=e,t.appendChild(n);let a=document.createElement("style");a.innerHTML=`
          .weather-container {
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 16px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .weather-icon {
            width: 150px;
            height: 150px;
            margin-bottom: 20px;
            animation: fadeIn 1s ease;
          }
          .weather-description {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            animation: slideIn 1s ease;
          }
          .weather-temperature {
            font-size: 48px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
            animation: slideIn 1s ease;
          }
          .weather-details {
            font-size: 24px;
            color: #666;
            text-align: center;
            margin-bottom: 10px;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes slideIn {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `,t.appendChild(a);let o=document.createElement("div");o.className="weather-container";let r=document.createElement("p");return r.textContent="Cargando...",o.appendChild(r),fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=-38.0263011%2C-57.5424541",{method:"GET",headers:{"X-RapidAPI-Key":"604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}}).then(e=>{if(e.ok)return e.json();throw Error(`Error en la solicitud de datos del clima: ${e.statusText}`)}).then(e=>{console.log("Datos del clima:",e),o.innerHTML="";let t=document.createElement("img");t.src=`https:${e.current.condition.icon}`,t.alt=e.current.condition.text,t.className="weather-icon",o.appendChild(t);let n=document.createElement("div");n.className="weather-description",n.textContent=`${e.location.name}, ${e.location.region}`,o.appendChild(n);let a=document.createElement("div");a.className="weather-temperature",a.textContent=`${e.current.temp_c}\xb0C`,o.appendChild(a);let r=document.createElement("div");r.className="weather-details";let i=document.createElement("p");i.textContent=`Humedad: ${e.current.humidity}%`,r.appendChild(i);let d=document.createElement("p");d.textContent=`Viento: ${e.current.wind_kph} km/h ${e.current.wind_dir}`,r.appendChild(d);let c=document.createElement("p");c.textContent=`Presi\xf3n: ${e.current.pressure_mb} mb`,r.appendChild(c),o.appendChild(r)}).catch(e=>{console.error("Error al obtener datos del clima:",e),o.innerHTML="<p>Error: No se pudieron obtener los datos del clima.</p>"}),t.appendChild(o),t}},{path:/^\/trenque$/,handler:function(e){let t=document.createElement("div"),n=document.createElement("custom-header");n.params=e,t.appendChild(n);let a=document.createElement("style");a.innerHTML=`
        .weather-container {
          padding: 10px;
          background-color: #f5f5f5;
          border-radius: 16px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          margin: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .weather-icon {
          width: 150px;
          height: 150px;
          margin-bottom: 20px;
          animation: fadeIn 1s ease;
        }
        .weather-description {
          font-size: 36px;
          font-weight: bold;
          color: #333;
          text-align: center;
          margin-bottom: 20px;
          animation: slideIn 1s ease;
        }
        .weather-temperature {
          font-size: 48px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
          animation: slideIn 1s ease;
        }
        .weather-details {
          font-size: 24px;
          color: #666;
          text-align: center;
          margin-bottom: 10px;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `,t.appendChild(a);let o=document.createElement("div");o.className="weather-container";let r=document.createElement("p");return r.textContent="Cargando...",o.appendChild(r),fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=-35.9819243%2C-62.7382118",{method:"GET",headers:{"X-RapidAPI-Key":"604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}}).then(e=>{if(e.ok)return e.json();throw Error(`Error en la solicitud de datos del clima: ${e.statusText}`)}).then(e=>{console.log("Datos del clima:",e),o.innerHTML="";let t=document.createElement("img");t.src=`https:${e.current.condition.icon}`,t.alt=e.current.condition.text,t.className="weather-icon",o.appendChild(t);let n=document.createElement("div");n.className="weather-description",n.textContent=`${e.location.name}, ${e.location.region}`,o.appendChild(n);let a=document.createElement("div");a.className="weather-temperature",a.textContent=`${e.current.temp_c}\xb0C`,o.appendChild(a);let r=document.createElement("div");r.className="weather-details";let i=document.createElement("p");i.textContent=`Humedad: ${e.current.humidity}%`,r.appendChild(i);let d=document.createElement("p");d.textContent=`Viento: ${e.current.wind_kph} km/h ${e.current.wind_dir}`,r.appendChild(d);let c=document.createElement("p");c.textContent=`Presi\xf3n: ${e.current.pressure_mb} mb`,r.appendChild(c),o.appendChild(r)}).catch(e=>{console.error("Error al obtener datos del clima:",e),o.innerHTML="<p>Error: No se pudieron obtener los datos del clima.</p>"}),t.appendChild(o),t}},{path:/^\/monte$/,handler:function(e){let t=document.createElement("div"),n=document.createElement("custom-header");n.params=e,t.appendChild(n);let a=document.createElement("style");a.innerHTML=`
          .weather-container {
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 16px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .weather-icon {
            width: 150px;
            height: 150px;
            margin-bottom: 20px;
            animation: fadeIn 1s ease;
          }
          .weather-description {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            animation: slideIn 1s ease;
          }
          .weather-temperature {
            font-size: 48px;
            font-weight: bold;
            color: #333;
            margin-bottom: 20px;
            animation: slideIn 1s ease;
          }
          .weather-details {
            font-size: 24px;
            color: #666;
            text-align: center;
            margin-bottom: 10px;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes slideIn {
            0% {
              transform: translateY(-50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `,t.appendChild(a);let o=document.createElement("div");o.className="weather-container";let r=document.createElement("p");return r.textContent="Cargando...",o.appendChild(r),fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=-34.9130142%2C-56.1812355",{method:"GET",headers:{"X-RapidAPI-Key":"604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}}).then(e=>{if(e.ok)return e.json();throw Error(`Error en la solicitud de datos del clima: ${e.statusText}`)}).then(e=>{console.log("Datos del clima:",e),o.innerHTML="";let t=document.createElement("img");t.src=`https:${e.current.condition.icon}`,t.alt=e.current.condition.text,t.className="weather-icon",o.appendChild(t);let n=document.createElement("div");n.className="weather-description",n.textContent=`${e.location.name}, ${e.location.region}`,o.appendChild(n);let a=document.createElement("div");a.className="weather-temperature",a.textContent=`${e.current.temp_c}\xb0C`,o.appendChild(a);let r=document.createElement("div");r.className="weather-details";let i=document.createElement("p");i.textContent=`Humedad: ${e.current.humidity}%`,r.appendChild(i);let d=document.createElement("p");d.textContent=`Viento: ${e.current.wind_kph} km/h ${e.current.wind_dir}`,r.appendChild(d);let c=document.createElement("p");c.textContent=`Presi\xf3n: ${e.current.pressure_mb} mb`,r.appendChild(c),o.appendChild(r)}).catch(e=>{console.error("Error al obtener datos del clima:",e),o.innerHTML="<p>Error: No se pudieron obtener los datos del clima.</p>"}),t.appendChild(o),t}},{path:/^\/test$/,handler:function(e){let t=document.createElement("div"),n=document.createElement("custom-header");n.params=e,t.appendChild(n);let a=document.createElement("style");a.innerHTML=`
      .weather-container {
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin-top: 20px;
      }
      .weather-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .weather-icon {
        width: 64px;
        height: 64px;
        margin-right: 20px;
      }
      .weather-description {
        flex-grow: 1;
        font-size: 18px;
      }
      .weather-temperature {
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }
    `,t.appendChild(a);let o=document.createElement("div");o.className="weather-container";let r=document.createElement("p");return r.textContent="Cargando...",o.appendChild(r),fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=-38%2C-57.56",{method:"GET",headers:{"X-RapidAPI-Key":"604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}}).then(e=>{if(e.ok)return e.json();throw Error(`Error en la solicitud de datos del clima: ${e.statusText}`)}).then(e=>{console.log("Datos del clima:",e),o.innerHTML="";let t=document.createElement("img");t.src=`https:${e.current.condition.icon}`,t.alt=e.current.condition.text,t.className="weather-icon",o.appendChild(t);let n=document.createElement("div");n.className="weather-description",n.innerHTML=`
          <p>${e.location.name}, ${e.location.region}</p>
          <p>${e.current.condition.text}</p>
        `,o.appendChild(n);let a=document.createElement("div");a.className="weather-temperature",a.textContent=`${e.current.temp_c}\xb0C`,o.appendChild(a)}).catch(e=>{console.error("Error al obtener datos del clima:",e),o.innerHTML="<p>Error: No se pudieron obtener los datos del clima.</p>"}),t.appendChild(o),t}}];!function(){customElements.define("custom-button",class extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=document.createElement("button"),t=document.createElement("style");e.className="root",t.innerHTML=`
              .root{
                  font-size: 25px;
                  border-radius: 4px;
                  padding: 17px 13px;
                  background-color: orange;
                  color: black;
                  width: 90vw;
                  border: none;
                  animation: lower .4s ease ;
                  cursor: pointer;
                  font-weight: bolder;
                  font-family: "Odibee Sans", cursive;
              }
              @media screen and (min-width: 960px){
                .root{
                  max-width: 200px;
                  margin: 0 auto;
                }
              }
              @keyframes lower{
                0%{
                    transform: translateY(100%);
                }
                75%{
                    transform: translateY(-10%);
                }
                100%{
                    transform: translateY(0%);
                }
            }
            `,e.textContent=this.textContent||"ups!",this.shadow.appendChild(e),this.shadow.appendChild(t)}})}(),function(){class e extends HTMLElement{shadow=this.attachShadow({mode:"open"});constructor(){super(),this.render()}render(){let e=this.getAttribute("variant")||"body",t=document.createElement("div"),n=document.createElement("style");n.innerHTML=`
        .title {
          font-size: 80px;
          font-weight: bold;
          color: orange;
          transition: all 3s ease;
          margin-bottom: 20px; /* A\xf1adir un espacio inferior */
        }
        .body {
          font-size: 30px;
          max-width: 600px;
          margin-bottom: 20px;
        }

        /* Media query para ajustar estilos en dispositivos m\xf3viles */
        @media (max-width: 768px) {
          .title {
            font-size: 40px; /* Reducir tama\xf1o de fuente en m\xf3vil */
          }
          .body {
            font-size: 20px; /* Reducir tama\xf1o de fuente en m\xf3vil */
            max-width: 100%; /* Ocupar todo el ancho disponible en m\xf3vil */
          }
        }
      `,t.className=e,t.textContent=this.textContent,this.shadow.appendChild(t),this.shadow.appendChild(n)}}customElements.define("custom-text",e)}(),function(){customElements.define("custom-header",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.params={},this.render()}connectedCallback(){this.clearEventListeners(),this.shadowRoot.querySelectorAll(".navigation-button").forEach(e=>{e.addEventListener("click",this.handleNavigationClick)})}clearEventListeners(){this.shadowRoot.querySelectorAll(".navigation-button").forEach(e=>{e.removeEventListener("click",this.handleNavigationClick)})}handleNavigationClick=e=>{let t=e.target.getAttribute("data-destination");this.params.goTo&&t&&this.params.goTo(t)};render(){let e=document.createElement("header"),t=document.createElement("style");e.className="root",e.innerHTML=`
          <div>
            <button class="navigation-button" data-destination="/welcome">Vanilla SPA</button>
          </div>
          <div>
            <button class="navigation-button" data-destination="/marpla">Mar Del Plata</button>
            <button class="navigation-button" data-destination="/trenque">T. Lauquen</button>
            <button class="navigation-button" data-destination="/monte">Montevideo</button>
          </div>
        `,t.innerHTML=`
          .root {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 50px;
            background-color: orange;
            color: white;
            max-width: 100vw;
          }
          .logo {
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            border: none;
            padding: 10px;
            border-radius: 4px;
          }
          .navigation-button {
            color: white;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 10px;
            font-size: 18px;
          }
          .navigation-button:hover {
            background-color: black;
            color: white;
            border-radius: 4px;
          }

          @media (max-width: 768px) {
            .root {
              flex-direction: column;
              align-items: center;
              padding: 10px;
            }

            .navigation-button {
              font-size: 16px;
            }

            .navigation-buttons-container {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              width: 100%;
              margin-top: 20px;
            }
          }
        `,this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(t),this.shadowRoot.appendChild(e)}})}(),function(t){function n(e){history.pushState({},"",e),a(e)}function a(a){for(let o of e)if(o.path.test(a)){let e=o.handler({goTo:n});t.innerHTML="",t.appendChild(e);return}console.error("Ruta no encontrada:",a),t.innerHTML=`<p>Error: P\xe1gina no encontrada.</p>`}"/"===location.pathname||"/welcome"===location.pathname?n("/welcome"):a(location.pathname),window.addEventListener("popstate",()=>{a(location.pathname)})}(document.querySelector("#root"));
//# sourceMappingURL=index.21418674.js.map
