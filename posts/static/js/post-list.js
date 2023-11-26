// Variable para mantener un registro de si las redes sociales ya han sido agregadas
let postAgregado = false;

console.log('estamos en posts');

function obtenerDatosYActualizar() {

    fetch('/api/posts/?user=daniel')  // Usamos la URL de la vista 'UserView' en la app 'users'
        .then(response => response.json())
        .then(posts => {
            // Llamar a la función para mostrar los datos en la página
            mostrarPosts(posts);
            
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

function mostrarPosts(data) {
    nombrePost = data.title
    contentPost = data.content 

    // Obtener el elemento "projects"
    const projectsElement = document.getElementById('projects');

    if (!postAgregado) {
        for (const item of data) {
            agregarProject(item);
        }
        postAgregado = true;
    }
        
    function agregarProject(data) {
        // Crear elementos y asignar atributos
        const divItem = document.createElement('div');
        divItem.classList.add('item', 'row');

        const linkA = document.createElement('a');
        linkA.classList.add('col-md-4', 'col-12');
        linkA.href = `http://127.0.0.1:8000/posts/${data.slug}`;
        linkA.target = '_blank';

        const img = document.createElement('img');
        img.classList.add('img-fluid', 'project-image', 'rounded', 'shadow-sm');
        img.src = data.miniature;
        img.alt = data.imageAlt;
        img.style.width = '90%';

        const divDesc = document.createElement('div');
        divDesc.classList.add('desc', 'col-md-8', 'col-12');

        const h3 = document.createElement('h3');
        h3.classList.add('title');
        const titleLink = document.createElement('a');
        titleLink.href = `http://127.0.0.1:8000/posts/${data.slug}`;
        titleLink.target = '_blank';
        titleLink.textContent = data.title;
        h3.appendChild(titleLink);

        const p1 = document.createElement('p');
        const truncatedText = data.content.substring(0, 200);
        p1.textContent = truncatedText;
        //p1.classList.add('text-truncate');


        const p2 = document.createElement('p');
        const moreLink = document.createElement('a');
        moreLink.classList.add('more-link');
        moreLink.href = `http://127.0.0.1:8000/posts/${data.slug}`;
        moreLink.target = '_blank';
        const linkIcon = document.createElement('i');
        linkIcon.classList.add('fas', 'fa-external-link-alt');
        moreLink.appendChild(linkIcon);
        moreLink.appendChild(document.createTextNode('Find out more'));
        p2.appendChild(moreLink);

        // Estructurar elementos en el orden deseado
        linkA.appendChild(img);
        divDesc.appendChild(h3);
        divDesc.appendChild(p1);
        divDesc.appendChild(p2);

        divItem.appendChild(linkA);
        divItem.appendChild(divDesc);

        projectsElement.appendChild(divItem);
    }

}





// Realizar la primera petición y actualizar cada 5 segundos
obtenerDatosYActualizar();
setInterval(obtenerDatosYActualizar, 1000); // Actualizar cada 5 segundos (5000 milisegundos)
    
