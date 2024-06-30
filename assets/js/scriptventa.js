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
  html.innerHTML += prop
}