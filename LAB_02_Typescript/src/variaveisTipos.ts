let nome : string = "Renata";
let idade : number = 19;
let ativo :  boolean = true;

let dado : any = 10;
let vazio : null = null;
let indefinido : undefined = undefined;
//valores especificos

let situacao :  "ativo"  | "inativo" = "ativo"// //só aceita esses dois valores

//uniao de tipos
let idadeOuNulo: number | null = null;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo ${ativo}`);
