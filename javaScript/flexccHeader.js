
class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!-- Navbar -->
            <header class="bg-header">
                    <div class="bg-navbar">
                        <div class="container">
                            <div class="navbar">
                                   <a href="/" class="navbar-brand">
                                        <img src="img/card4.jpg" alt="Logo Altos Game">
                                        Alto's Game
                                    </a>
                               <!-- Navbar -->
                                <nav>
                                    <div class="nav-wrapper">
                                        <a href="#" class="brand-logo">Fundamentos</a>
                                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><span class="material-symbols-outlined">menu</span></a>
                                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                                            <li><a href="#"><i class="material-symbols-outlined">home</i> Inicio</a></li>
                                            <li><a href="#"><i class="material-symbols-outlined">info</i> Acerca de</a></li>
                                            <li><a href="#"><i class="material-symbols-outlined">call</i> Contacto</a></li>
                                        </ul>
                                    </div>
                                </nav>

                                <!-- Menú lateral (hamburguesa) -->
                                <ul class="sidenav" id="mobile-demo">
                                    <li><a href="#"><i class="material-symbols-outlined">home</i> Inicio</a></li>
                                    <li><a href="#"><i class="material-symbols-outlined">info</i> Acerca de</a></li>
                                    <li><a href="#"><i class="material-symbols-outlined">call</i> Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
  `;
    }
  }
  // template.innerHTML = document.body.appendChild(template.content);
  
  customElements.define("my-header", MyHeader);


