const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 4000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '187 London Street, Piramidal north, CA 12318',
        habitaciones: 2,
        baños: 2,
        costo: 4000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Condominio lujoso cerca del mar',
        src: 'https://i.pinimg.com/564x/f7/96/12/f7961202edaea745423d5017c9c433b2.jpg',
        descripcion: 'Este condominio de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '199 Pucatrihue St, Florida, CA 8878',
        habitaciones: 4,
        baños: 3,
        costo: 5000,
        smoke: true,
        pets: true
    },
    {
      nombre: 'Condominio moderno en zona residencial',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
      ubicacion: '187 London Street, Piramidal north, CA 12318',
      habitaciones: 2,
      baños: 2,
      costo: 4000,
      smoke: false,
      pets: true
  },
  {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '187 London Street, Piramidal north, CA 12318',
    habitaciones: 2,
    baños: 2,
    costo: 4000,
    smoke: false,
    pets: true
},
]

let html = document.querySelector('#alq')
let index = 0;
for (let alquiler of propiedades_alquiler) {
    let alq =
        `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src= "${alquiler.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${alquiler.nombre}
                </h5>
                <p class="card-text">
                  ${alquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${alquiler.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${alquiler.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${alquiler.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo} </p>`

    if (alquiler.smoke) {
        alq +=
            `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
            </p>`
    } else {
        alq +=
            `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
             </p>`
    }
    if (alquiler.pets) {
        alq +=
            `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
             </p>`
    } else {
        alq +=
            `<p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
            </p>`
    }
    alq +=
        `</div >
        </div >
    </div > `;
    html.innerHTML += alq
}