//ARREGLO
let todosmarcadores = [];
let edificios = [];
let cafetines = [];
let kioscos = [];
let administrativas = [];
let infomarker = [];

const unp = {
  north: 12.13844,
  south: 12.136232,
  west: -86.221658,
  east: -86.218874,
};
const unpcenter = { lat: 12.137797, lng: -86.221002 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: unpcenter,
    restriction: {
      latLngBounds: unp,
      strictBounds: false,
    },
    zoom: 19,
    mapId: "663481e2c353fdbc", //663481e2c353fdbc	//75505d6b7ec9798d
  });

  const infomarker1 = new google.maps.InfoWindow({
    content: marker1content,
  });
  infomarker.push(infomarker1);
  const infomarker2 = new google.maps.InfoWindow({
    content: marker2content,
  });
  infomarker.push(infomarker2);
  const infomarker3 = new google.maps.InfoWindow({
    content: marker3content,
  });
  infomarker.push(infomarker3);
  const infomarker4 = new google.maps.InfoWindow({
    content: marker4content,
  });
  infomarker.push(infomarker4);
  const infomarker5 = new google.maps.InfoWindow({
    content: marker5content,
  });
  infomarker.push(infomarker5);
  const infomarker6 = new google.maps.InfoWindow({
    content: marker6content,
  });
  infomarker.push(infomarker6);
  const infomarker7 = new google.maps.InfoWindow({
    content: marker7content,
  });
  infomarker.push(infomarker7);
  const infomarker8 = new google.maps.InfoWindow({
    content: marker8content,
  });
  infomarker.push(infomarker8);
  const infomarker9 = new google.maps.InfoWindow({
    content: marker9content,
  });
  infomarker.push(infomarker9);
  const infomarker10 = new google.maps.InfoWindow({
    content: marker10content,
  });
  infomarker.push(infomarker10);
  const infomarker11 = new google.maps.InfoWindow({
    content: marker11content,
  });
  infomarker.push(infomarker11);
  const infomarker12 = new google.maps.InfoWindow({
    content: marker12content,
  });
  infomarker.push(infomarker12);
  const infomarker13 = new google.maps.InfoWindow({
    content: marker13content,
  });
  infomarker.push(infomarker13);
  const infomarker14 = new google.maps.InfoWindow({
    content: marker14content,
  });
  infomarker.push(infomarker14);
  const infomarker15 = new google.maps.InfoWindow({
    content: marker15content,
  });
  infomarker.push(infomarker15);
  const infomarker16 = new google.maps.InfoWindow({
    content: marker16content,
  });
  infomarker.push(infomarker16);
  const infomarker17 = new google.maps.InfoWindow({
    content: marker17content,
  });
  infomarker.push(infomarker17);
  const infomarker18 = new google.maps.InfoWindow({
    content: marker18content,
  });
  infomarker.push(infomarker18);
  const infomarker19 = new google.maps.InfoWindow({
    content: marker19content,
  });
  infomarker.push(infomarker19);
  const infomarker20 = new google.maps.InfoWindow({
    content: marker20content,
  });
  infomarker.push(infomarker20);
  const infomarker21 = new google.maps.InfoWindow({
    content: marker21content,
  });
  infomarker.push(infomarker21);
  const infomarker22 = new google.maps.InfoWindow({
    content: marker22content,
  });
  infomarker.push(infomarker22);
  const infomarker23 = new google.maps.InfoWindow({
    content: marker23content,
  });
  infomarker.push(infomarker23);
  const infomarker24 = new google.maps.InfoWindow({
    content: marker24content,
  });
  infomarker.push(infomarker24);
  const infomarker25 = new google.maps.InfoWindow({
    content: marker25content,
  });
  infomarker.push(infomarker25);
  const infomarker26 = new google.maps.InfoWindow({
    content: marker26content,
  });
  infomarker.push(infomarker26);
  const infomarker27 = new google.maps.InfoWindow({
    content: marker27content,
  });
  infomarker.push(infomarker27);
  const infomarker28 = new google.maps.InfoWindow({
    content: marker28content,
  });
  infomarker.push(infomarker28);
  const infomarker29 = new google.maps.InfoWindow({
    content: marker29content,
  });
  infomarker.push(infomarker29);
  infomarker.push(infomarker1);

  //marcador
  const marker1 = new google.maps.Marker({
    position: { lat: 12.136868, lng: -86.219786 },
    map,
    title: "Fruta Polar",
    animation: google.maps.Animation.DROP,
  });

  //animation
  marker1.addListener("click", () => {
    toggleBounce(1);
  });
  marker1.addListener("click", toggleBounce);

  //contenido del marcador
  marker1.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker1.open({
      anchor: marker1,
      map,
      shouldFocus: false,
    });
  });
  //marcador2
  const marker2 = new google.maps.Marker({
    position: { lat: 12.136850760022238, lng: -86.21960584060814 },
    map,
    title: "Cafetines Don Domingo",
    animation: google.maps.Animation.DROP,
  });

  marker2.addListener("click", () => {
    toggleBounce(2);
  });
  marker2.addListener("click", toggleBounce);

  //contenido del marcador
  marker2.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker2.open({
      anchor: marker2,
      map,
      shouldFocus: false,
    });
  });

  //marcador3
  const marker3 = new google.maps.Marker({
    position: { lat: 12.13714067537591, lng: -86.22035357086335 },
    map,
    title: "Cafetin Doña Elena",
    animation: google.maps.Animation.DROP,
  });

  marker3.addListener("click", () => {
    toggleBounce(3);
  });
  marker3.addListener("click", toggleBounce);

  //contenido del marcador
  marker3.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker3.open({
      anchor: marker3,
      map,
      shouldFocus: false,
    });
  });
  //marcador4
  const marker4 = new google.maps.Marker({
    position: { lat: 12.137014151592751, lng: -86.2203522297589 },
    map,
    title: "Cafetín Iveth",
    animation: google.maps.Animation.DROP,
  });
  marker4.addListener("click", () => {
    toggleBounce(4);
  });
  marker4.addListener("click", toggleBounce);

  //contenido del marcador
  marker4.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker4.open({
      anchor: marker4,
      map,
      shouldFocus: false,
    });
  });

  //marcador5
  const marker5 = new google.maps.Marker({
    position: { lat: 12.137686146111813, lng: -86.21966039667217 },
    map,
    title: "Los Madroños",
    animation: google.maps.Animation.DROP,
  });
  marker5.addListener("click", () => {
    toggleBounce(5);
  });
  marker5.addListener("click", toggleBounce);

  //contenido del marcador
  marker5.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker5.open({
      anchor: marker5,
      map,
      shouldFocus: false,
    });
  });

  //marcador6
  const marker6 = new google.maps.Marker({
    position: { lat: 12.137539922791628, lng: -86.21971896274152 },
    map,
    title: "la capilla",
    animation: google.maps.Animation.DROP,
  });
  marker6.addListener("click", () => {
    toggleBounce(6);
  });
  marker6.addListener("click", toggleBounce);

  //contenido del marcador
  marker6.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker6.open({
      anchor: marker6,
      map,
      shouldFocus: false,
    });
  });

  //marcador7
  const marker7 = new google.maps.Marker({
    position: { lat: 12.137688735438847, lng: -86.22106940183187 },
    map,
    title: "Cancha",
    animation: google.maps.Animation.DROP,
  });
  marker7.addListener("click", () => {
    toggleBounce(7);
  });
  marker7.addListener("click", toggleBounce);

  //contenido del marcador
  marker7.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker7.open({
      anchor: marker7,
      map,
      shouldFocus: false,
    });
  });

  //marcador 8
  const marker8 = new google.maps.Marker({
    position: { lat: 12.138016148953174, lng: -86.22078088972509 },
    map,
    title: "Parqueo",
    animation: google.maps.Animation.DROP,
  });
  marker8.addListener("click", () => {
    toggleBounce(8);
  });
  marker8.addListener("click", toggleBounce);

  //contenido del marcador
  marker8.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker8.open({
      anchor: marker8,
      map,
      shouldFocus: false,
    });
  });

  //marcador 9
  const marker9 = new google.maps.Marker({
    position: { lat: 12.137953870657029, lng: -86.2214230684903 },
    map,
    title: "Unidad de transporte",
    animation: google.maps.Animation.DROP,
  });
  marker9.addListener("click", () => {
    toggleBounce(9);
  });
  marker9.addListener("click", toggleBounce);

  //contenido del marcador
  marker9.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker9.open({
      anchor: marker9,
      map,
      shouldFocus: false,
    });
  });

  //marcador 10
  const marker10 = new google.maps.Marker({
    position: { lat: 12.137803747033898, lng: -86.22140764578737 },
    map,
    title: "Comisariato",
    animation: google.maps.Animation.DROP,
  });
  marker10.addListener("click", () => {
    toggleBounce(10);
  });
  marker10.addListener("click", toggleBounce);

  //contenido del marcador
  marker10.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker10.open({
      anchor: marker10,
      map,
      shouldFocus: false,
    });
  });

  //marcador 11
  const marker11 = new google.maps.Marker({
    position: { lat: 12.1376490343899, lng: -86.22137344762335 },
    map,
    title: "Oficina de deporte",
    animation: google.maps.Animation.DROP,
  });
  marker11.addListener("click", () => {
    toggleBounce(11);
  });
  marker11.addListener("click", toggleBounce);

  //contenido del marcador
  marker11.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker11.open({
      anchor: marker11,
      map,
      shouldFocus: false,
    });
  });

  //marcador 12
  const marker12 = new google.maps.Marker({
    position: { lat: 12.13836584309041, lng: -86.22108722539566 },
    map,
    title: "Oficina de deporte",
    animation: google.maps.Animation.DROP,
  });
  marker12.addListener("click", () => {
    toggleBounce(12);
  });
  marker12.addListener("click", toggleBounce);

  //contenido del marcador
  marker12.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker12.open({
      anchor: marker12,
      map,
      shouldFocus: false,
    });
  });

  //marcador 13
  const marker13 = new google.maps.Marker({
    position: { lat: 12.137523556649088, lng: -86.2211325466571 },
    map,
    title: "Oficina de deporte",
    animation: google.maps.Animation.DROP,
  });
  marker13.addListener("click", () => {
    toggleBounce(13);
  });
  marker13.addListener("click", toggleBounce);

  //contenido del marcador
  marker13.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker13.open({
      anchor: marker13,
      map,
      shouldFocus: false,
    });
  });

  //marcador 14
  const marker14 = new google.maps.Marker({
    position: { lat: 12.137129954088918, lng: -86.2205446240353 },
    map,
    title: "Oficina de deporte",
    animation: google.maps.Animation.DROP,
  });
  marker14.addListener("click", () => {
    toggleBounce(14);
  });
  marker14.addListener("click", toggleBounce);

  //contenido del marcador
  marker14.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker14.open({
      anchor: marker14,
      map,
      shouldFocus: false,
    });
  });

  //marcador 15
  const marker15 = new google.maps.Marker({
    position: { lat: 12.136877777312183, lng: -86.2199532911432 },
    map,
    title: "Comedor de UNEN",
    animation: google.maps.Animation.DROP,
  });
  marker15.addListener("click", () => {
    toggleBounce(15);
  });
  marker15.addListener("click", toggleBounce);

  //contenido del marcador
  marker15.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker15.open({
      anchor: marker15,
      map,
      shouldFocus: false,
    });
  });

  const marker16 = new google.maps.Marker({
    position: { lat: 12.136443616617814, lng: -86.2200571104438 },
    map,
    title: "Porton Trasero",
    animation: google.maps.Animation.DROP,
  });
  marker16.addListener("click", () => {
    toggleBounce(16);
  });
  marker16.addListener("click", toggleBounce);

  //contenido del marcador
  marker16.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker16.open({
      anchor: marker16,
      map,
      shouldFocus: false,
    });
  });

  //marker17
  //Portón Principal
  const marker17 = new google.maps.Marker({
    position: { lat: 12.138212472229535, lng: -86.21942456815732 },
    map,
    title: "Portón Principal",
    animation: google.maps.Animation.DROP,
  });
  marker17.addListener("click", () => {
    toggleBounce(17);
  });
  marker17.addListener("click", toggleBounce);

  //contenido del marcador
  marker17.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker17.open({
      anchor: marker17,
      map,
      shouldFocus: false,
    });
  });

  //marker18
  const marker18 = new google.maps.Marker({
    position: { lat: 12.138251150316133, lng: -86.22024733574511 },
    map,
    title: "Portón intermedio",
    animation: google.maps.Animation.DROP,
  });
  marker18.addListener("click", () => {
    toggleBounce(18);
  });
  marker18.addListener("click", toggleBounce);

  //contenido del marcador
  marker18.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker18.open({
      anchor: marker18,
      map,
      shouldFocus: false,
    });
  });

  //marker19
  //monumento mano
  const marker19 = new google.maps.Marker({
    position: { lat: 12.138043137296231, lng: -86.21944197761064 },
    map,
    title: "Monumento La Mano",
    animation: google.maps.Animation.DROP,
  });
  marker19.addListener("click", () => {
    toggleBounce(19);
  });
  marker19.addListener("click", toggleBounce);

  //contenido del marcador
  marker19.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker19.open({
      anchor: marker19,
      map,
      shouldFocus: false,
    });
  });

  //marcador20
  const marker20 = new google.maps.Marker({
    position: { lat: 12.137859276956279, lng: -86.21977643296381 },
    map,
    title: "Admisión",
    animation: google.maps.Animation.DROP,
  });
  marker20.addListener("click", () => {
    toggleBounce(20);
  });
  marker20.addListener("click", toggleBounce);

  //contenido del marcador
  marker20.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker20.open({
      anchor: marker20,
      map,
      shouldFocus: false,
    });
  });

  //marcador21
  //kiosco universitario
  //12.13762196350635, -86.21948809550649
  const marker21 = new google.maps.Marker({
    position: { lat: 12.13762196350635, lng: -86.21948809550649 },
    map,
    title: "kiosco universitario",
    animation: google.maps.Animation.DROP,
  });
  marker21.addListener("click", () => {
    toggleBounce(21);
  });
  marker21.addListener("click", toggleBounce);

  //contenido del marcador
  marker21.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker21.open({
      anchor: marker21,
      map,
      shouldFocus: false,
    });
  });
  //marcador22
  //comedor institucional
  //12.137578696390818, -86.21945456789518
  const marker22 = new google.maps.Marker({
    position: { lat: 12.137578696390818, lng: -86.21945456789518 },
    map,
    title: "comedor institucional",
    animation: google.maps.Animation.DROP,
  });
  marker22.addListener("click", () => {
    toggleBounce(22);
  });
  marker22.addListener("click", toggleBounce);

  //contenido del marcador
  marker22.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker22.open({
      anchor: marker22,
      map,
      shouldFocus: false,
    });
  });
  //marcador23
  //Biblioteca Tecnológica
  //12.137487422982572, -86.22000051469043
  const marker23 = new google.maps.Marker({
    position: { lat: 12.137487422982572, lng: -86.22000051469043 },
    map,
    title: "Biblioteca Tecnológica",
    animation: google.maps.Animation.DROP,
  });
  marker23.addListener("click", () => {
    toggleBounce(23);
  });
  marker23.addListener("click", toggleBounce);

  //contenido del marcador
  marker23.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker23.open({
      anchor: marker23,
      map,
      shouldFocus: false,
    });
  });

  //marcador24
  //Auditorio Rubén Darío
  //12.137265063335526, -86.21942412272742
  const marker24 = new google.maps.Marker({
    position: { lat: 12.137265063335526, lng: -86.21942412272742 },
    map,
    title: "Auditorio Rubén Darío",
    animation: google.maps.Animation.DROP,
  });
  marker24.addListener("click", () => {
    toggleBounce(24);
  });
  marker24.addListener("click", toggleBounce);

  //contenido del marcador
  marker24.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker24.open({
      anchor: marker24,
      map,
      shouldFocus: false,
    });
  });

  //marcador25
  //Division de adquisiciones
  //12.137259550728167, -86.21922000361077
  const marker25 = new google.maps.Marker({
    position: { lat: 12.137259550728167, lng: -86.21922000361077 },
    map,
    title: "Division de adquisiciones",
    animation: google.maps.Animation.DROP,
  });
  marker25.addListener("click", () => {
    toggleBounce(25);
  });
  marker25.addListener("click", toggleBounce);

  //contenido del marcador
  marker25.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker25.open({
      anchor: marker25,
      map,
      shouldFocus: false,
    });
  });

  //marcador26
  //Cartera y Cobro
  //12.13706219930822, -86.21970943839936
  const marker26 = new google.maps.Marker({
    position: { lat: 12.13706219930822, lng: -86.21970943839936 },
    map,
    title: "Cartera y Cobro",
    animation: google.maps.Animation.DROP,
  });
  marker26.addListener("click", () => {
    toggleBounce(26);
  });
  marker26.addListener("click", toggleBounce);

  //contenido del marcador
  marker26.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker26.open({
      anchor: marker26,
      map,
      shouldFocus: false,
    });
  });

  //marcador27
  //Porton Sur Este
  //12.136693956598394, -86.21917263895169
  const marker27 = new google.maps.Marker({
    position: { lat: 12.136693956598394, lng: -86.21917263895169 },
    map,
    title: "Porton Sur Este",
    animation: google.maps.Animation.DROP,
  });
  marker27.addListener("click", () => {
    toggleBounce(27);
  });
  marker27.addListener("click", toggleBounce);

  //contenido del marcador
  marker27.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker27.open({
      anchor: marker27,
      map,
      shouldFocus: false,
    });
  });

  //marcador28
  //Departamento de becas
  //12.137191122394393, -86.2210370533959
  const marker28 = new google.maps.Marker({
    position: { lat: 12.137191122394393, lng: -86.2210370533959 },
    map,
    title: "Departamento de becas",
    animation: google.maps.Animation.DROP,
  });
  marker28.addListener("click", () => {
    toggleBounce(28);
  });
  marker28.addListener("click", toggleBounce);

  //contenido del marcador
  marker28.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker28.open({
      anchor: marker28,
      map,
      shouldFocus: false,
    });
  });

  //marcador29
  //Departamento de Investigación y Extensión
  //12.136843697370182, -86.21927887342518
  const marker29 = new google.maps.Marker({
    position: { lat: 12.136797807875432, lng: -86.21928759059816 },
    map,
    title: "Departamento de Investigación y Extensión",
    animation: google.maps.Animation.DROP,
  });
  marker29.addListener("click", () => {
    toggleBounce(29);
  });
  marker29.addListener("click", toggleBounce);

  //contenido del marcador
  marker29.addListener("click", () => {
    for (let i = 1; i < infomarker.length; i++) {
      eval("infomarker" + i + ".close();");
    }
    infomarker29.open({
      anchor: marker29,
      map,
      shouldFocus: false,
    });
  });

  //-Todos los marcadores push
  for (let i = 1; i < 30; i++) {
    eval("todosmarcadores.push(marker" + i + ")");
  }

  //cafetines!
  cafetines.push(marker1);
  cafetines.push(marker2);
  cafetines.push(marker3);
  cafetines.push(marker4);
  cafetines.push(marker10);

  //-------------------------------------

  //circle svg para los textos()
  const svgcircle = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillOpacity: 0.0,
    strokeOpacity: 0,
    strokeWeight: 30,
    anchor: new google.maps.Point(10, 0),
  };
  //==EDIFICIOS==
  //edificio i
  const edificioiMarker = new google.maps.Marker({
    position: { lat: 12.137359000484103, lng: -86.22063713586793 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO I",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  // Define the LatLng coordinates for the polygon's path.
  const edificiounp = [
    { lat: 12.13752609455547, lng: -86.22080132765765 },
    { lat: 12.13746709392041, lng: -86.22040369021417 },
    { lat: 12.137197657520872, lng: -86.22044258224068 },
    { lat: 12.137261247157971, lng: -86.2208429018929 },
  ];

  // Construct the polygon.
  const edificioipoly = new google.maps.Polygon({
    paths: edificiounp,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      text: "Hello World",
      fontSize: "20px",
    },
  });

  edificioipoly.setMap(map);
  //marcador y poligono arreglo
  edificios.push(edificioipoly);
  edificios.push(edificioiMarker);
  //-todosmacardaores
  todosmarcadores.push(edificioipoly);
  todosmarcadores.push(edificioiMarker);

  // EDIFICIO H
  const edificioh = [
    { lat: 12.13799114112007, lng: -86.2200916252531 },
    { lat: 12.13796229641714, lng: -86.21977847738448 },
    { lat: 12.137799061562136, lng: -86.21978920621939 },
    { lat: 12.137816106170146, lng: -86.22010369519236 },
  ];

  // EDIFICIO H
  const edificiohpoly = new google.maps.Polygon({
    paths: edificioh,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      text: "Hello World",
      fontSize: "20px",
    },
  });

  edificiohpoly.setMap(map);

  const edificiohMarker = new google.maps.Marker({
    position: { lat: 12.137905313211261, lng: -86.2199245940402 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO H",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiohpoly);
  edificios.push(edificiohMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiohpoly);
  todosmarcadores.push(edificiohMarker);

  // EDIFICIO F
  const edificiof = [
    { lat: 12.137944102706927, lng: -86.21975302105047 },
    { lat: 12.137908046821408, lng: -86.21915622960917 },
    { lat: 12.137759234296782, lng: -86.21916226457881 },
    { lat: 12.137799223573689, lng: -86.21976374988537 },
  ];

  // EDIFICIO F
  const edificiofpoly = new google.maps.Polygon({
    paths: edificiof,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      text: "Hello World",
      fontSize: "20px",
    },
  });

  edificiofpoly.setMap(map);

  const edificiofMarker = new google.maps.Marker({
    position: { lat: 12.137862068170904, lng: -86.21942169687048 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO F",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiofpoly);
  edificios.push(edificiofMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiofpoly);
  todosmarcadores.push(edificiofMarker);

  //EDIFICIO d

  const edificiod = [
    { lat: 12.137491764883515, lng: -86.21957800692938 },
    { lat: 12.137455708936766, lng: -86.21918841611209 },
    { lat: 12.137343607689358, lng: -86.21919981549918 },
    { lat: 12.137375074710935, lng: -86.21958672410774 },
  ];

  // EDIFICIO d
  const edificiodpoly = new google.maps.Polygon({
    paths: edificiod,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      text: "Hello World",
      fontSize: "20px",
    },
  });

  edificiodpoly.setMap(map);

  const edificiodMarker = new google.maps.Marker({
    position: { lat: 12.137413663577565, lng: -86.2193720760015 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO D",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiodpoly);
  edificios.push(edificiodMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiodpoly);
  todosmarcadores.push(edificiodMarker);

  //MARCADOR B
  const edificiobMarker = new google.maps.Marker({
    position: { lat: 12.137095059851992, lng: -86.21941499134594 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO B",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //EDIFICIO e
  const edificioe = [
    { lat: 12.137377407479987, lng: -86.21969153595691 },
    { lat: 12.137371790371292, lng: -86.219592220153 },
    { lat: 12.136975382686902, lng: -86.21962341024017 },
    { lat: 12.136980999803956, lng: -86.21972026366879 },
  ];

  // EDIFICIO e
  const edificioepoly = new google.maps.Polygon({
    paths: edificioe,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      text: "Hello World",
      fontSize: "20px",
    },
  });

  edificioepoly.setMap(map);

  const edificioeMarker = new google.maps.Marker({
    position: { lat: 12.137287795486234, lng: -86.21965907235814 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO E",
      color: "#000",
      fontSize: "6px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificioepoly);
  edificios.push(edificioeMarker);
  //-todosmacardaores
  todosmarcadores.push(edificioepoly);
  todosmarcadores.push(edificioeMarker);

  //EDIFICIO B
  const edificiob = [
    { lat: 12.137138982612498, lng: -86.21958128829944 },
    { lat: 12.137108826690165, lng: -86.2192111434694 },
    { lat: 12.137015081083737, lng: -86.21921919009615 },
    { lat: 12.13704851483527, lng: -86.2195900054784 },
  ];

  // EDIFICIO b
  const edificiobpoly = new google.maps.Polygon({
    paths: edificiob,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      text: "Hello World",
      fontSize: "20px",
    },
  });

  edificiobpoly.setMap(map);

  //marcador y poligono arreglo
  edificios.push(edificiobpoly);
  edificios.push(edificiobMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiobpoly);
  todosmarcadores.push(edificiobMarker);

  //EDIFICIO a
  const edificioa = [
    { lat: 12.136962635972397, lng: -86.21962889750769 },
    { lat: 12.136939035670025, lng: -86.21921650788728 },
    { lat: 12.13684463443964, lng: -86.21922120175289 },
    { lat: 12.136871512571133, lng: -86.21963493247776 },
  ];

  // EDIFICIO a
  const edificioapoly = new google.maps.Polygon({
    paths: edificioa,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      text: "Hello World",
      fontSize: "20px",
    },
  });

  edificioapoly.setMap(map);

  const edificioaMarker = new google.maps.Marker({
    position: { lat: 12.136902324084398, lng: -86.21942169686915 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO A",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });
  edificioaMarker.addListener("click", () => {
    location.href = "/edificio";
  });
  // edificioaMarker.addListener("click", (location.href = "new_url"));

  //marcador y poligono arreglo
  edificios.push(edificioapoly);
  edificios.push(edificioaMarker);
  //-todosmacardaores
  todosmarcadores.push(edificioapoly);
  todosmarcadores.push(edificioaMarker);

  //EDIFICIO G
  const edificiog = [
    { lat: 12.137341270153925, lng: -86.22007213671948 },
    { lat: 12.137328158893721, lng: -86.21974088391856 },
    { lat: 12.136969565677001, lng: -86.21975563606759 },
    { lat: 12.136983988082605, lng: -86.22008755942073 },
  ];

  // EDIFICIO a
  const edificiogpoly = new google.maps.Polygon({
    paths: edificiog,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      text: "Hello World",
      fontSize: "20px",
    },
  });

  edificiogpoly.setMap(map);

  const edificiogMarker = new google.maps.Marker({
    position: { lat: 12.137142634491365, lng: -86.21992461522962 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO G",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiogpoly);
  edificios.push(edificiogMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiogpoly);
  todosmarcadores.push(edificiogMarker);

  //EDIFICIO a
  const edificioj = [
    { lat: 12.136942197361423, lng: -86.22036525755377 },
    { lat: 12.136870085314293, lng: -86.2203826919117 },
    { lat: 12.136949408565053, lng: -86.22074948398074 },
    { lat: 12.137015620516612, lng: -86.22072199133936 },
  ];

  // EDIFICIO j
  const edificiojpoly = new google.maps.Polygon({
    paths: edificioj,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      fontSize: "20px",
    },
  });

  edificiojpoly.setMap(map);

  const edificiojMarker = new google.maps.Marker({
    position: { lat: 12.136953094494631, lng: -86.22056949983914 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO J",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiojpoly);
  edificios.push(edificiojMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiojpoly);
  todosmarcadores.push(edificiojMarker);

  //EDIFICIO k
  const edificiok = [
    { lat: 12.137066722542672, lng: -86.22084073365788 },
    { lat: 12.136995778844023, lng: -86.22087741523002 },
    { lat: 12.137259620214978, lng: -86.22122793800797 },
    { lat: 12.137320587585133, lng: -86.22116155333734 },
  ];

  // EDIFICIO k
  const edificiokpoly = new google.maps.Polygon({
    paths: edificiok,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      fontSize: "20px",
    },
  });

  edificiokpoly.setMap(map);

  const edificiokMarker = new google.maps.Marker({
    position: { lat: 12.137154730083136, lng: -86.22102476068272 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO K",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiokpoly);
  edificios.push(edificiokMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiokpoly);
  todosmarcadores.push(edificiokMarker);

  // , ;
  // , ;
  // , ;
  // , ;

  //EDIFICIO k
  const edificiol = [
    { lat: 12.137359908454416, lng: -86.22113951073204 },
    { lat: 12.137719156707796, lng: -86.22140907272792 },
    { lat: 12.137671956234996, lng: -86.22147478684633 },
    { lat: 12.137316641296316, lng: -86.22120120153708 },
  ];

  // EDIFICIO k
  const edificiolpoly = new google.maps.Polygon({
    paths: edificiol,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      fontSize: "20px",
    },
  });

  edificiolpoly.setMap(map);

  const edificiolMarker = new google.maps.Marker({
    //,
    position: { lat: 12.137517243514983, lng: -86.22133128867067 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO L",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiolpoly);
  edificios.push(edificiolMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiolpoly);
  todosmarcadores.push(edificiolMarker);

  //EDIFICIO k
  const edificiom = [
    { lat: 12.137758761971373, lng: -86.22135561099432 },
    { lat: 12.137878729788312, lng: -86.22139316191893 },
    { lat: 12.138014431019755, lng: -86.22135561099412 },
    { lat: 12.138041964594512, lng: -86.22141461959025 },
    { lat: 12.137879385349995, lng: -86.22147832205196 },
    { lat: 12.137732539495465, lng: -86.22143339505266 },
  ];

  // EDIFICIO k
  const edificiompoly = new google.maps.Polygon({
    paths: edificiom,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      fontSize: "20px",
    },
  });

  edificiompoly.setMap(map);

  const edificiomMarker = new google.maps.Marker({
    position: { lat: 12.137902330007453, lng: -86.22143406560488 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO M",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiompoly);
  edificios.push(edificiomMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiompoly);
  todosmarcadores.push(edificiomMarker);

  //EDIFICIO C
  const edificioc = [
    { lat: 12.137322440806818, lng: -86.21959280668332 },
    { lat: 12.137297529410114, lng: -86.21919516921179 },
    { lat: 12.137174939081904, lng: -86.21920589804743 },
    { lat: 12.137203128306748, lng: -86.21960286496676 },
  ];

  // EDIFICIO k
  const edificiocpoly = new google.maps.Polygon({
    paths: edificioc,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    label: {
      color: "#FF0000",
      fontWeight: "bold",
      fontSize: "20px",
    },
  });

  edificiocpoly.setMap(map);

  const edificiocMarker = new google.maps.Marker({
    position: { lat: 12.137210339503328, lng: -86.21938761770139 },
    map,
    icon: svgcircle,
    label: {
      text: "EDIFICIO C",
      color: "#000",
      fontSize: "10px",
      fontWeight: "400",
    },
  });

  //marcador y poligono arreglo
  edificios.push(edificiocpoly);
  edificios.push(edificiocMarker);
  //-todosmacardaores
  todosmarcadores.push(edificiocpoly);
  todosmarcadores.push(edificiocMarker);

  //Push area administrativa
  administrativas.push(marker11);
  administrativas.push(marker20);
  administrativas.push(marker25);
  administrativas.push(marker26);
  administrativas.push(marker28);
  administrativas.push(marker29);

  //animation
  function toggleBounce(x) {
    //animacion de los
    if (isNaN(x) == false) {
      for (let i = 1; i < 29; i++) {
        eval("marker" + i + ".setAnimation(null);");
      }

      eval(
        "if (marker" +
          x +
          ".getAnimation() !== null) {" +
          "marker" +
          x +
          ".setAnimation(null);" +
          "} else {" +
          "marker" +
          x +
          ".setAnimation(google.maps.Animation.BOUNCE);" +
          "}"
      );
    }
    x = 0;
  }
  console.log(edificios);
  // add event listeners for the buttons
  document.getElementById("edificio").addEventListener("click", todosocultar2);
  function setMapOnEdifico(map) {
    for (let i = 0; i < todosmarcadores.length; i++) {
      todosmarcadores[i].setMap(map);
    }
  }
  function setedificios(map) {
    for (let i = 0; i < edificios.length; i++) {
      edificios[i].setMap(map);
    }
  }
  // Removes the markers from the map, but keeps them in the array.
  function todosocultar2() {
    setMapOnEdifico(null);
    todosedificio();
  }
  function todosedificio() {
    setedificios(map);
  }

  // Todas
  document.getElementById("todos").addEventListener("click", todosshow);
  function setMapOnTodos(map) {
    for (let i = 0; i < todosmarcadores.length; i++) {
      todosmarcadores[i].setMap(map);
    }
  }
  // Removes the markers from the map, but keeps them in the array.
  function todosshow() {
    setMapOnTodos(map);
  }

  // Cafetines
  document.getElementById("cafetines").addEventListener("click", todosocultar);

  function setMapOnCafetines(map) {
    for (let i = 0; i < cafetines.length; i++) {
      todosmarcadores[i].setMap(map);
    }
  }
  // Removes the markers from the map, but keeps them in the array.
  function todosocultar() {
    setMapOnTodos(null);
    cafetinesshow();
  }
  function cafetinesshow() {
    setMapOnCafetines(map);
  }

  //administrativo
  document
    .getElementById("administrativo")
    .addEventListener("click", todosocultar3);

  function setMapOnAdministrativa(map) {
    for (let i = 0; i < administrativas.length; i++) {
      administrativas[i].setMap(map);
    }
  }
  // Removes the markers from the map, but keeps them in the array.
  function todosocultar3() {
    setMapOnTodos(null);
    administrativoshow();
  }
  function administrativoshow() {
    setMapOnAdministrativa(map);
  }
}
