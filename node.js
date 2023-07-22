console.log("Hola Mundo");

let nombre ="Lety";
let saludo = (nombre) => {
    console.log('Hola' + nombre);
}

console.log(saludo(nombre));

/*----------------------*/

console.log('Inicio de programa'); 

setTimeout ( ()=> {
    console.log('Primer timeout');
},3000);

setTimeout ( ()=> {
    console.log('Segundo timeout');
},0);

setTimeout ( ()=> {
    console.log('Tercer timeout');
},0);

console.log('Fin de programa');

/* ------------------- */

var nombre0 ='Angela';

let nombre2 = 'Itzel';

const nombre3 ='Abril';

if(true){
    let nombre2 = 'Angela';
    nombre0='Estela';
    nombre2='Selene';
    console.log(nombre2);

}

console.log(nombre2);

/* ---------- */


const empresa ={
    nombre:'pepsi',
    direccion:'calle',
    rl:'calle'
}

const {nombreOBJ, direccion, rol} = empresa;
console.log(nombreOBJ);
console.log(rol);

const imprimeEmpresa = ({nombreOBJ, rol}) =>{
    console.log({nombreOBJ,rol});
}

imprimeEmpresa(empresa);


const carros =['mazda','bmw','porche'] ;
const c1 = carros [0];
const [e1,e2,e3] = carros;

console.log(e1);

const perperfil = ({nombreOBJ, salario}) =>{
    console.log({nombreOBJ,salario});
}

console.log(e1);

const perfil = {
    nombre:'Alejandro',
    apellido:'Mendoza', 
    correo:'correo@gmail.com', 
    salario:'9999.99'}


const imprimePerfil = ({nombreOBJ,salario}) =>{
    console.log({nombreOBJ,salario});
}

console.log(perfil);