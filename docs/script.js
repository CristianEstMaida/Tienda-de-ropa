    // Definir los textos en diferentes idiomas 
    const languages = {
      es: {
        onlineStore: "Tienda en línea",
        homeTitle: "Inicio",
        contactTitle: "Contacto",
        languageOption: "Español",  
        highlightedProductsTitle: "Productos destacados",
        tShirtTitle: "Remera",
        priceTShirt: "Precio: $2999.99",
        addTShirt: "Agregar al carrito",
        jacketTitle: "Campera",
        priceJacket: "Precio: $14999.99",
        addJacket: "Agregar al carrito",  
        productsTitle: "Productos",
        searchPlaceholder: "Buscar productos",
        searchProductsTitle: "Buscar",
        priceLabel: "Precio:",
        addToCartBtn: "Agregar al carrito",
        //addToCartButton: "Agregar al carrito",
        shoppingCart: "Carrito de compras",
        makePayment: "Realizar pago en Mercado Pago",
        transferPayment: "Realizar transferencia bancaria",
        makePaymentBtn: "Realizar compra",
        cvuTitle: "Número de CVU",
        nameExampleTitle: "Nombre",
        aliasTitle: "Alias",
        name: "Cristian Esteban Maida",
        cvuEjemplo: "0000003100078348355281",
        aliasEjemplo: "angus.rito.apios.mp",
        deleteButton: "Eliminar",
        cartTotalText: "Total:",
        homeDelivery: "Envío a domicilio",
        nameTitle: "Nombre",
        emailTitle: "Correo electrónico",
        addressTitle: "Dirección",
        submitTitle: "Enviar",
        footerText: "Derechos de autor © 2023 Tienda en línea. Todos los derechos reservados."
        
      },
      en: {
        onlineStore: "Online store",
        homeTitle: "Home",
        contactTitle: "Contact",
        languageOption: "English",
        highlightedProductsTitle: "Featured products",
        tShirtTitle: "T-shirt",
        priceTShirt: "Price: $2999.99",
        addTShirt: "Add to cart",
        jacketTitle: "Jacket",
        priceJacket: "Price: $14999.99",
        addJacket: "Add to cart",
        productsTitle: "Products",
        searchPlaceholder: "Search products",
        searchProductsTitle: "Search",
        priceLabel: "Price:",
        //addToCartButton: "Add to cart",
        addToCartBtn: "Add to cart",
        shoppingCart: "Shopping cart",
        makePayment: "Make payment in Mercado Pago",
        transferPayment: "Make bank transfer",
        makePaymentBtn: "Make payment",
        nameExampleTitle: "Name",
        cvuTitle: "CBU Number",
        aliasTitle: "Alias",
        cvuEjemplo: "0110052531005208960734",
        name: "Cristian Esteban Maida",
        aliasEjemplo: "ALARMA.PUERTA.GATA",
        deleteButton: "Remove",
        cartTotalText: "Cart Total:",
        homeDelivery: "Home delivery",
        nameTitle: "Name",
        emailTitle: "Email",
        addressTitle: "Address",
        submitTitle: "Submit",
        footerText: "Copyright © 2023 Online store. All rights reserved."
        
      }
    };

    // Definir los textos de los productos en diferentes idiomas
    const productsTexts = {
      es: [
        { name: "Remera", price: 2999.99, image: 'product1.jpg', description: "Sumérgete en el mundo del rock con esta espectacular remera." },
        { name: "Campera", price: 14999.99, image: 'product2.jpg', description: "Descubre el equilibrio perfecto entre estilo y funcionalidad con esta impresionante campera." },
        // Agrega más productos aquí
      ],
      en: [
        { name: "T-shirt", price: 2999.99, image: 'product1.jpg', description: "Immerse yourself in the world of rock with this spectacular t-shirt." },
        { name: "Jacket", price: 14999.99, image: 'product2.jpg', description: "Discover the perfect balance between style and functionality with this stunning jacket." },
        // Agrega más productos aquí
      ]
    };

    // Obtener elementos del DOM
    const onlineStore = document.getElementById("online-store");
    const homeTitle = document.getElementById("home-title");
    const contactTitle = document.getElementById("contact-title");
    const languageSelect = document.getElementById("language-select");
    const highlightedProductsTitle = document.getElementById("highlighted-products-title");
    const tShirtTitle = document.getElementById("t-shirt-title");
    const priceTShirt = document.getElementById("price-t-shirt");
    const makePayment = document.getElementById("make-payment");
    const addTShirt = document.getElementById("add-t-shirt");
    const jacketTitle = document.getElementById("jacket-title");
    const priceJacket = document.getElementById("price-jacket");
    const addJacket = document.getElementById("add-jacket");
    const productsTitle = document.getElementById("products-title");
    // Obtener el elemento del input de búsqueda
    const searchInput = document.getElementById("search-input");
    const searchProductsElement = document.getElementById("search-products-title");
    const searchProductsBtn = document.getElementById("search-products-title");
    // Actualizar el contenido del párrafo "Precio:"
    const priceLabelElement = document.getElementById("price-label");
    // Actualizar el contenido del botón "Agregar al carrito"
    const addToCartBtnElement = document.getElementById("add-to-cart-btn");
    //const priceLabels = document.querySelectorAll(".product p.price");
    //const addToCartButtons = document.querySelectorAll(".product button");
    const shoppingCart = document.getElementById("shopping-cart");
    const cartTotalElement = document.getElementById("cart-total-text");
    const homeDelivery = document.getElementById("home-delivery");
    // Actualizar el contenido de los botones de compra
    const mercadoPagoBtn = document.getElementById("mercado-pago-btn");
    const transferenciaBtn = document.getElementById("transferencia-btn");
    const realizarCompraBtn = document.getElementById("realizar-compra-btn");
    const nameElement = document.getElementById("nombre");
    const cvuElement = document.getElementById("cvu");
    const aliasElement = document.getElementById("alias");
    const cuitElement = document.getElementById("cuit");
    const nameTitle = document.getElementById("name-title");
    const emailTitle = document.getElementById("email-title");
    const addressTitle = document.getElementById("address-title");
    const submitTitle = document.getElementById("submit-title");
    const footerCopyright = document.getElementById("footer-copyright");

    // Definir el arreglo de productos actual
    let products = [];
    let languageTexts;
    const itemsPerPage = 4;
    let currentPage = 1;
    let deleteButtonText;
    let cartTotal = 0;
    // Agregar el evento click al botón
    //searchProductsTitle.addEventListener("click", searchProducts);

    // Función para cambiar el idioma
    function changeLanguage() {
      const selectedLanguage = languageSelect.value;
      languageTexts = languages[selectedLanguage]; // Assign the languageTexts at the global scope 
      
      const languageProducts = productsTexts[selectedLanguage];
      const priceLabel = languageTexts.priceLabel;
      const addToCartBtnText = languageTexts.addToCartBtn;
      const searchBtnText = languageTexts.searchProductsTitle;
      // Obtener el texto para el total del carrito
      const cartTotalText = languageTexts.cartTotalText;

      deleteButtonText = languageTexts.deleteButton;
        
      // Obtener el texto para el párrafo "Precio:" y el botón "Agregar al carrito"
      //const priceLabelText = languageTexts.priceLabel;
      //const addToCartButtonText = languageTexts.addToCartButton;

      // Configuración de paginación
      

      onlineStore.innerText = languageTexts.onlineStore;
      homeTitle.innerText = languageTexts.homeTitle;
      contactTitle.innerText = languageTexts.contactTitle;
      //languageSelect.options[0].textContent = languageTexts.languageOption;  
      highlightedProductsTitle.innerText = languageTexts.highlightedProductsTitle;
      tShirtTitle.innerText = languageTexts.tShirtTitle;
      priceTShirt.innerText = languageTexts.priceTShirt;
      addTShirt.innerText = languageTexts.addTShirt;
      makePayment.innerText = languageTexts.makePayment;
      jacketTitle.innerText = languageTexts.jacketTitle;  
      priceJacket.innerText = languageTexts.priceJacket;
      searchProductsElement.innerText = searchBtnText;
      productsTitle.innerText = languageTexts.productsTitle;
      addJacket.innerText = languageTexts.addJacket;
      //priceLabelElement.innerText = priceLabel;
      //addToCartBtnElement.innerText = addToCartBtnText;
      shoppingCart.innerText = languageTexts.shoppingCart;
      mercadoPagoBtn.innerText = languageTexts.makePayment;
      transferenciaBtn.innerText = languageTexts.transferPayment;
      realizarCompraBtn.innerText = languageTexts.makePaymentBtn;
      cartTotalElement.innerText = cartTotalText + " $" + cartTotal.toFixed(2);
      nameElement.innerText = languageTexts.nameExampleTitle + ": " + languageTexts.name;
      cvuElement.innerText = languageTexts.cvuTitle + ": " + languageTexts.cvuEjemplo;
      aliasElement.innerText = languageTexts.aliasTitle + ": " + languageTexts.aliasEjemplo;
      homeDelivery.innerText = languageTexts.homeDelivery;
      nameTitle.innerText = languageTexts.nameTitle;
      emailTitle.innerText = languageTexts.emailTitle;
      addressTitle.innerText = languageTexts.addressTitle;
      submitTitle.innerText = languageTexts.submitTitle;
      footerCopyright.innerText = languageTexts.footerText;

      // Modificar el contenido del párrafo "Precio:" y el texto del botón "Agregar al carrito"
      /*priceLabels.forEach((priceLabel) => {
        priceLabel.innerText = priceLabelText;
      });
    
      addToCartButtons.forEach((button) => {
        button.innerText = addToCartButtonText;
      });*/

      // Actualizar el texto del botón "Agregar al carrito" en cada producto
      const productButtons = document.querySelectorAll(".product button");
      productButtons.forEach(button => {
        const originalText = button.getAttribute("data-lang");
        if (originalText === addToCartBtnText) {
          button.innerText = addToCartBtnText;
        }
      });
      
      // Update the "Eliminar" buttons with the appropriate text for the selected language
      const deleteButtons = document.querySelectorAll(".cart-item button");
      deleteButtons.forEach((button) => {
        button.innerText = deleteButtonText;
      });
      
      // Obtener el texto del placeholder en el idioma seleccionado
      const placeholderText = languageTexts.searchPlaceholder;
      // Modificar el texto del placeholder
      searchInput.placeholder = placeholderText;
      //searchProductsTitle.innerText = languageTexts.searchProductsTitle;
      // Actualizar los productos según el idioma seleccionado
      products.splice(0, products.length, ...languageProducts); // Reemplazar los productos con los correspondientes al idioma seleccionado
      // Agregar el evento click al botón
      searchProductsBtn.addEventListener("click", searchProducts(priceLabel, addToCartBtnText, searchBtnText, deleteButtonText));
      showProducts(priceLabel, addToCartBtnText); // Mostrar los productos actualizados
      generatePagination();
    }

    // Evento para cambiar el idioma al seleccionar una opción
    languageSelect.addEventListener("change", changeLanguage);

    // Cambiar el idioma inicialmente
    changeLanguage();
    //generatePagination();

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", e => {
      e.preventDefault();
  
      // Obtener los datos del formulario
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      
       // Crear el enlace de correo electrónico con los valores del formulario
      const mailtoLink = `mailto:cristianmaida@outlook.com?subject=Contacto&body=Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;
  
      // Abrir el enlace de correo electrónico
      window.location.href = mailtoLink;
      // Crear objeto de datos a enviar al servidor
      const data = {
          name: name,
          email: email,
          message: message
      };
    });
    // Función para buscar productos
    let cartItems = [];
    //let cartTotal = 0;
    
    //
    
    // Actualizar el carrito inicialmente
    updateCart();
  
    function getCartItems() {
      // Retorna los productos del carrito como un arreglo de objetos
      // Puedes implementar esta función según la estructura de tu carrito   
      return cartItems;
    }
    
    function getCartTotal() {
    // Retorna el total de la compra del carrito
    // Puedes implementar esta función según la estructura de tu carrito
      return cartTotal;
    }
    
    function generatePDF() {
      // Crear un nuevo objeto jsPDF
      const doc = new jsPDF();
      //const cartItemsContainer = getCartItems();
      //const cartTotalElement = getCartTotal();

   
      // Configurar el contenido del PDF
      const content = `Presupuesto\n\nProductos:\n${cartItems.map((product) => `${product.name} - $${product.price}`).join("\n")}\nTotal: $${cartTotal}`;

      // Agregar el contenido al PDF
      if (cartItems.length === 0) {
          alert("El carrito está vacío. Por favor, agrega productos antes de realizar la compra.");
          return;
      }
      else {
        doc.setFontSize(12);
        doc.text(content, 10, 10, { align: "left" });
        doc.save('comprobante.pdf');
      }
      // Opciones de configuración para el método fromHTML
      const options = {
        margin: {
          top: 10,
          bottom: 10,
          left: 10,
          right: 10
        }
      };
      
      // Convertir el contenido HTML a PDF
      //doc.fromHTML(content, options, function () {
        // Guardar el archivo PDF con un nombre específico
        //doc.save('comprobante.pdf');
      //});
    }
    
    function mostrarDatosTransferencia() {
      const nombreElement = document.getElementById("nombre");
      nombreElement.style.display = "block";
      
      const cvuElement = document.getElementById("cvu");
      cvuElement.style.display = "block";
      
      const aliasElement = document.getElementById("alias");
      aliasElement.style.display = "block";
      
      const cuitElement = document.getElementById("cuit");
      cuitElement.style.display = "block";
    }
    
    // Función para agregar un producto al carrito
    function addToCart(product) {
      cartItems.push(product);
      cartTotal += product.price;
      updateCart();
    }

    // Función para eliminar un producto del carrito
    function removeFromCart(index, deleteButtonText) {
      const removedItem = cartItems.splice(index, 1)[0];
      cartTotal -= removedItem.price;
      updateCart();
    }

    // Función para actualizar la visualización del carrito
    function updateCart() {
      const cartItemsContainer = document.getElementById("cart-items");
      cartItemsContainer.innerHTML = "";

      cartItems.forEach((product, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <p>${product.name} - $${product.price}</p>
          <button id="eliminar" onclick="removeFromCart(${index})" data-delete-text="${deleteButtonText}">${deleteButtonText}</button>
        `;

        cartItemsContainer.appendChild(cartItem);
      });

      const cartTotalElement = document.getElementById("cart-total");
      cartTotalElement.innerText = "$" + cartTotal.toFixed(2);
    }

    function checkout() {
        if (cartItems.length === 0) {
            alert("El carrito está vacío. Por favor, agrega productos antes de realizar la compra.");
            return;
        }

        // Crear objeto de datos a enviar al servidor
        const data = {
            items: cartItems,
            total: cartTotal
        };

        // Enviar los datos al servidor
        fetch("/api/checkout", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
        if (response.ok) {
            // Transacción exitosa, mostrar mensaje de confirmación
            alert("¡Compra realizada con éxito! Gracias por tu compra.");

            // Reiniciar el carrito
            cartItems = [];
            cartTotal = 0;
            updateCart();
        } else {
            // Error en la transacción, mostrar mensaje de error
            alert("Error al procesar la compra. Por favor, inténtalo de nuevo.");
        }
        })
        .catch(error => {
        // Error en la comunicación con el servidor, mostrar mensaje de error
        alert("Error en la comunicación con el servidor. Por favor, inténtalo de nuevo más tarde.");
        console.error(error);
        });
    }

    // Función para buscar productos
    function searchProducts(priceLabel, addToCartBtnText, searchBtnText, deleteButtonText) {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p="price-label">${priceLabel} $${product.price}</p>
            <p>${product.description}</p>
            <button id="add-to-cart-btn" data-lang="Add to cart" onclick="addToCart({ name: '${product.name}', price: ${product.price}, image: '${product.image}' }, deleteButtonText)">${addToCartBtnText}</button>
        `;

        productList.appendChild(productDiv);
        });
    } else {
        productList.innerHTML = "<p>No se encontraron productos que coincidan con la búsqueda.</p>";
    }
    }

    // Datos de ejemplo: una lista de productos
    //const products = [
    //{ name: "Remera", price: 2999.99, image: 'product1.jpg', description: "Sumérgete en el mundo del rock con esta espectacular remera de Colorium." },
    //{ name: "Campera", price: 14999.99, image: 'product2.jpg', description: "Descubre el equilibrio perfecto entre estilo y funcionalidad con esta impresionante campera." },
    // Agrega más productos aquí
    //];

    // Configuración de paginación
    //const itemsPerPage = 4;
    //let currentPage = 1;

    // Función para mostrar los productos en la página actual
    function showProducts(priceLabel, addToCartBtnText) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < products.length; i++) {
        const product = products[i];

        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
          <!--div class="product"-->
            <img src="product${i + 1}.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p="price-label">${priceLabel} $${product.price}</p>
            <p>${product.description}</p>
            <button id="add-to-cart-btn" data-lang="Add to cart" onclick="addToCart({ name: '${product.name}', price: ${product.price}, image: '${product.image}' })">${addToCartBtnText}</button>
          <!--/div-->
        `;

        productList.appendChild(productDiv);

        // Actualizar el contenido del párrafo "Precio:" y el botón "Agregar al carrito"
        const priceLabelElement = productDiv.querySelector("#price-label");
        const addToCartBtnElement = productDiv.querySelector("#add-to-cart-btn");
    
        //priceLabelElement.innerText = priceLabel;
        //addToCartBtnElement.innerText = addToCartBtnText;
    }
    }

    // Función para generar los enlaces de paginación
    function generatePagination() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(products.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.innerText = i;

        if (i === currentPage) {
        pageLink.classList.add("active");
        }

        pageLink.addEventListener("click", () => {
        currentPage = i;
        showProducts();
        generatePagination();
        });

        pagination.appendChild(pageLink);
    }
    }

    // Agregar el evento click al botón "Buscar"
    searchProductsBtn.addEventListener("click", () => {
      const priceLabel = languages[languageSelect.value].priceLabel;
      const addToCartBtnText = languages[languageSelect.value].addToCartBtn;
      const searchBtnText = languageTexts.searchProductsTitle;
      searchProducts(priceLabel, addToCartBtnText, searchBtnText);
    });

    // Mostrar productos y generar paginación inicial
    
    //showProducts();
    //generatePagination();
