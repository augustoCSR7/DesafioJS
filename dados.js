const formul = document.querySelector("#send")
const saveButton = document.getElementById("savebutton")


formul.addEventListener("click", function(e)
{
    e.preventDefault();

    // variáveis recebem os dados inseridos no form do html

    const name = document.querySelector("#nome");
    const matricula = document.querySelector("#matricula");
    const idade = document.querySelector("#idade");
    const endereço = document.querySelector("#endereço");
    const turno = document.querySelector("#turno")

    const nomeValue = name.value;
    const matriculaValue = matricula.value;
    const idadeValue = idade.value;
    const endereçoValue = endereço.value;
    const turnoValue = turno.value;

    // criação de classe literal para armazenar os valores das entradas no form e para retorná-los

    var cadastrado = {
         
        nome: nomeValue,
        matricula: matriculaValue,
        idade: idadeValue,
        endereço: endereçoValue,
        turno: turnoValue,

        get nome(){
            return nomeValue;
        },

        get matricula(){
            return matriculaValue;
        },

        get idade(){

            return idadeValue;
        },

        get endereço(){
            return endereçoValue;
        },

        get turno(){
            return turnoValue;
        }

    }


// teste de verificação dos getters no console
console.log(cadastrado.nome);
console.log(cadastrado.matricula);
console.log(cadastrado.idade);
console.log(cadastrado.endereço);
console.log(cadastrado.turno);
});

saveButton.addEventListener("click", function()
{
    var textToSave = document.getElementById("nome").value + " " +
                    document.getElementById("matricula").value + " " +
                    document.getElementById("idade").value + " " +
                    document.getElementById("endereço").value + " " +
                    document.getElementById("turno").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "Cadastro";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
    window.alert("Parabés, você foi matriculado, aqui está seu comprovante com os seus dados:");
});

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}