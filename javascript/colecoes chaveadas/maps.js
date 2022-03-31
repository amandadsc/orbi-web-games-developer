/* MAP - permitem chaves de qualquer tipo, enquanto Objetos não
* São estruturas de dados no modelo chave e valor
* Possue a propriedade length
* .set('chave', 'valor') - adiciona um valor 
* .get("chave") - retorna o valor
* .delete("chave") - exclui valor
*/

function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value == 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Amanda', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));