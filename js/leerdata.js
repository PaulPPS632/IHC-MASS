// Función para cargar y mostrar los datos del JSON
function mostrarDatos() {
    // Obtener el elemento tabs-content
    var tabsContent = document.querySelector('.tabs-content');
    
    // Realizar una solicitud HTTP para cargar el archivo JSON
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parsear el JSON
            var tiendas = JSON.parse(xhr.responseText);
            
            // Iterar sobre los datos de las tiendas
            tiendas.forEach(function(tienda, index) {
                // Crear el elemento tabs-item
                var tabsItem = document.createElement('div');
                tabsItem.classList.add('tabs-item');
                tabsItem.setAttribute('data-ciudad', tienda['data-ciudad']);
                tabsItem.setAttribute('data-distrito', tienda['data-distrito']);
                
                // Crear el elemento tabs-check
                var tabsCheck = document.createElement('div');
                tabsCheck.classList.add('tabs-check');
                tabsCheck.id = 'check-' + (index + 1);
                tabsItem.appendChild(tabsCheck);
                
                // Crear el elemento tabs-description
                var tabsDescription = document.createElement('div');
                tabsDescription.classList.add('tabs-description');
                
                // Crear el elemento tabs-description-nombre y asignarle el valor de tienda-nombre
                var tabsNombre = document.createElement('div');
                tabsNombre.classList.add('tabs-description-nombre');
                tabsNombre.textContent = tienda['tienda-nombre'];
                tabsDescription.appendChild(tabsNombre);
                
                // Crear el elemento tabs-description-direccion y asignarle el valor de tienda-direccion
                var tabsDireccion = document.createElement('div');
                tabsDireccion.classList.add('tabs-description-direccion');
                tabsDireccion.textContent = tienda['tienda-direccion'];
                tabsDescription.appendChild(tabsDireccion);
                
                tabsItem.appendChild(tabsDescription);
                
                // Agregar el elemento tabs-item al div tabs-content
                tabsContent.appendChild(tabsItem);

            });
        }
    };
    
    xhr.open('GET', '../js/tiendas.json', true);
    xhr.send();

    //const AllTabsItems = document.querySelectorAll(".tabs-item");


}

// Llamar a la función para mostrar los datos cuando el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarDatos();
    // Delegación de eventos para asegurar que se aplique a elementos dinámicos
    document.addEventListener("click", function(event) {
        // Verificar si el clic fue en un elemento con clase .tabs-item
        const clickedTabsItem = event.target.closest(".tabs-item");
        if (clickedTabsItem) {
            
            const AllTabsItems = document.querySelectorAll(".tabs-item");

            // Cambiar el estado de check-active solo para el elemento clicado
            AllTabsItems.forEach((item) => {
                const divcheck = item.querySelector(".tabs-check");
                if (item === clickedTabsItem) {
                    divcheck.classList.toggle("check-active");
                } else {
                    divcheck.classList.remove("check-active");
                }
            });
        }
    });
    
});