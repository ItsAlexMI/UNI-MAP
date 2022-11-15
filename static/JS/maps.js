let map;
const UNI = {
  //NORTE
  //12.13352570969774, -86.2685046835467
  //SUR
  //12.127678382247053, -86.26865343065815
  //OESTE
  //12.130943179808762, -86.2748883959427
  //ESTE
  //12.131215852621285, -86.26299482482366
  north: 12.13352570969774,
  south: 12.127678382247053,
  west: -86.2748883959427,
  east: -86.26299482482366,
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.13046, lng: -86.26912 },
    restriction: {
      latLngBounds: UNI,
      strictBounds: false,
    },
    zoom: 17,
    mapId: "93d57b58f8c8f308",
  });
  //Marcador prueba
  new google.maps.Marker({
    //12.131459251823115, -86.2689132347133
    position: { lat: 12.131459251823115, lng: -86.2689132347133 },
    map,
    title: "Cancha Volleyball",
  });
  new google.maps.Marker({
    //12.129049980027052, -86.27035303016667
    position: { lat: 12.129049980027052, lng: -86.27035303016667 },
    map,
    title: "Entrada y Salida",
  });
  new google.maps.Marker({
    //12.131378463825136, -86.27114121646156
    position: { lat: 12.131378463825136, lng: -86.27114121646156 },
    map,
    title: "Entrada y Salida",
  });
  new google.maps.Marker({
    //12.132850159195991, -86.26890397952701
    position: { lat: 12.132850159195991, lng: -86.26890397952701 },
    map,
    title: "Entrada y Salida",
  });
  new google.maps.Marker({
    //12.131872206634169, -86.26977775828158
    position: { lat: 12.131872206634169, lng: -86.26977775828158 },
    map,
    title: "Edificio Rigoberto Lopez Perez (UNI)",
  });
  new google.maps.Marker({
    //12.132152615643133, -86.26989539648712
    position: { lat: 12.132152615643133, lng: -86.26989539648712 },
    map,
    title: "CS50xNI",
  });
  new google.maps.Marker({
    //12.13107907342103, -86.27013497669438
    position: { lat: 12.13107907342103, lng: -86.27013497669438 },
    map,
    title: "UNI Postgrado",
  });
  new google.maps.Marker({
    //12.128745042405784, -86.27008112891069
    position: { lat: 12.128745042405784, lng: -86.27008112891069 },
    map,
    title: "ATM Banpro",
  });
  new google.maps.Marker({
    //12.129721534781785, -86.26987832385483
    position: { lat: 12.129721534781785, lng: -86.26987832385483 },
    map,
    title: "CLUB ESCUELA DE NATACIÓN LOS TRITONES MANAGUA",
  });
  new google.maps.Marker({
    //12.130266978229875, -86.27059715584359
    position: { lat: 12.130266978229875, lng: -86.27059715584359 },
    map,
    title: "Cafetin El Güegüense",
  });
  new google.maps.Marker({
    //12.132295556570377, -86.26922819968364
    position: { lat: 12.132295556570377, lng: -86.26922819968364 },
    map,
    title: "Parqueo",
  });
  new google.maps.Marker({
    //12.13259437482282, -86.27015032294346
    position: { lat: 12.13259437482282, lng: -86.27015032294346 },
    map,
    title: "Parqueo",
  });
  new google.maps.Marker({
    //12.132564218384767, -86.27044402483666
    position: { lat: 12.132564218384767, lng: -86.27044402483666 },
    map,
    title: "Taekwondo UNI",
  });
  new google.maps.Marker({
    //12.132131884072512, -86.27089770416512
    position: { lat: 12.132131884072512, lng: -86.27089770416512 },
    map,
    title: "UNI-IES",
  });
  new google.maps.Marker({
    //12.131168534030941, -86.27081452238716
    position: { lat: 12.131168534030941, lng: -86.27081452238716 },
    map,
    title: "Biblioteca Esman Marín - UNI",
  });
  new google.maps.Marker({
    //12.13075181061184, -86.27006951148763
    position: { lat: 12.13075181061184, lng: -86.27006951148763 },
    map,
    title: "Parqueo",
  });
  new google.maps.Marker({
    //12.129579047278918, -86.26963098097372
    position: { lat: 12.129579047278918, lng: -86.26963098097372 },
    map,
    title: "Parqueo",
  });
  new google.maps.Marker({
    //12.128278268725122, -86.26963412331125
    position: { lat: 12.128278268725122, lng: -86.26963412331125 },
    map,
    title: "Parqueo",
  });
  new google.maps.Marker({
    //12.128732971459547, -86.26940374266637
    position: { lat: 12.128732971459547, lng: -86.26940374266637 },
    map,
    title: "Parqueo",
  });
  new google.maps.Marker({
     //12.131117793819909, -86.26989971779449
    position: { lat: 12.131117793819909, lng: -86.26989971779449 },
    map,
    title: "Oficinas UNEN-RUSB",
  });
  new google.maps.Marker({
     //12.131812718832354, -86.27073997593004
   position: { lat: 12.131812718832354, lng: -86.27073997593004 },
   map,
   title: "Auditorio Salomón de la Selva - UNI",
 });
  /*const svgcircle = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillOpacity: 0.0,
    strokeOpacity: 0,
    anchor: new google.maps.Point(0, 0),
  };
  new google.maps.Marker({
    //12.131459251823115, -86.2689132347133
    position: { lat: 12.131459251823115, lng: -86.2689132347133 },
    icon: svgcircle,
    map,
    title: "Cancha Volleyball",
    label: {
      text: "Cancha Volleyball",
      color: "#fff",
      fontSize: "10px",
      fontWeight: "400",
    },
  });
  new google.maps.Marker({
    //12.13107907342103, -86.27013497669438
    position: { lat: 12.13107907342103, lng: -86.27013497669438 },
    icon: svgcircle,
    map,
    title: "UNI Postgrado",
    label: {
      text: "UNI Postgrado",
      color: "#fff",
      fontSize: "10px",
      fontWeight: "400",
    },
  });*/

}
window.initMap = initMap;