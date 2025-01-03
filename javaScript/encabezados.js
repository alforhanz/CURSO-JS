class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <!-- Navbar -->
          <nav>
              <div class="nav-wrapper">
                  <a href="#" class="brand-logo">Logo</a>
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
  `;
    }
  }
 
  customElements.define("my-header", MyHeader);
  