const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: 2500000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: 1500000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: 2000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de lujo con vista al mar',
        src: 'https://i.pinimg.com/564x/80/e2/93/80e293b144175738141db62be2ace589.jpg',
        descripcion: 'Esta casa de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '2133 Ferrero St, England Coast, CA 8787',
        habitaciones: 3,
        baños: 2,
        costo: 1900000,
        smoke: true,
        pets: true
    }
]

let html = document.querySelector('#prop')
let indice = 0;
for (let venta of propiedades_venta) {
    let prop =
        `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src= "${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${venta.nombre}
                </h5>
                <p class="card-text">
                  ${venta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${venta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${venta.habitaciones} habitaciones |
                  <i class="fas fa-bath"></i> ${venta.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${venta.costo} </p>`

    if (venta.smoke) {
        prop +=
            `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
            </p>`
    } else {
        prop +=
            `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
             </p>`
    }
    if (venta.pets) {
        prop +=
            `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
             </p>`
    } else {
        prop +=
            `<p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
            </p>`
    }
    prop +=
        `</div >
        </div >
    </div > `;
    indice++;
    if (indice <= 3) {
        html.innerHTML += prop
    }
}

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
    }
]

let alqui = document.querySelector('#alq')
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
    index++;
    if (index <= 3) {
        alqui.innerHTML += alq
    }
}