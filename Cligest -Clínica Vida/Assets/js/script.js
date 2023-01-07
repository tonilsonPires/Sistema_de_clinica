let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});



/*Formatando os formulário

$(function () {
  var operation = "C"; //"C"=Crear
  var selected_index = -1; // Indice do elemento selecionado na lista
  var tblPersons = localStorage.getItem("tblPersons"); //retornar os dados armazenados
  tblPersons = JSON.parse(tblPersons); //converteer string em objeto
  if (tblPersons === null) // se não tem dados iniciar um array vazio
      tblPersons = [];

  function Create() {
    //Obter os valores inputados no html e converte-los em string
    var person = JSON.stringify({
       Nome: $("#Nome").val(),
        CPF: $("#CPF").val(),
        Telefone: $("#Telefone").val(),
        Email: $("#Email").val(),
        Latitude: $("#Lat").val(),
        Longitude: $("#Lng").val()
    }); 
    //Inserir o objeto na tabela
    tblPersons.push(person);
    //Armazenar os dados localStorage
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    alert("Os dados foram armazenados"); //Mensageme de alerta
    return true;
  }

  function Edit() {
    // Editar o item selecionado na tabela
    tblPersons[selected_index] = JSON.stringify({
        Nome: $("#Nome").val(),
        CPF: $("#CPF").val(),
        Telefone: $("#Telefone").val(),
        Email: $("#Email").val(),
        Latitude: $("#Lat").val(),
        Longitude: $("#Lng").val()
    });
    //Armazenar os itens em localStorage
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
    alert("Os dados foram editado"); //Mensagem de alerta
    return true;
  }

  function Delete() {
    //Eliminar o elemento seleccionado na tabela
    tblPersons.splice(selected_index, 1); 
    //Actualizar os dados do Local Storage
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
    alert("Persona Eliminada"); //Mensagem de alerta
  }

  function List() {
    $("#tblList").html("");
    $("#tblList").html(
            "<thead>" +
            "<tr>" +                
            "<th>Nome</th>" +
            "<th>CPF</th>" +
            "<th>Telefone</th>" +
            "<th>Email</th>" +
             "<th>Lat</th>" +
             "<th>Lng</th>" +
            "<th>Ações</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            ); //Adicionar a tabela a estrutura HTML
    for (var i in tblPersons) {
        var per = JSON.parse(tblPersons[i]);
        $("#tblList tbody").append("<tr>" +                    
                "<td>" + per.Nome + "</td>" +
                "<td>" + per.CPF + "</td>" +
                "<td>" + per.Telefone + "</td>" +
                "<td>" + per.Email + "</td>" +
                 "<td>" + per.Lat + "</td>" + 
                  "<td>" + per.Lng + "</td>" +                  
                                   
                 "<td><img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537879/edit_n51oto.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='http://res.cloudinary.com/demeloweb/image/upload/v1497537882/delete_ntuxjl.png' alt='Delete" + i + "' class='btnDelete'/></td>" +                  
                
                "</tr>"
                );
    } //carregar e inserir os itens na tabela
  }

  $("#frmPerson").bind("submit", function () {
    if (operation === "C")
        return Create();
    else
        return Edit();
  }); 
  
  List();

  $(".btnEdit").bind("click", function () {
    operation = "E"; //"E" = Editar
    //Obter o identificador do item a ser editado
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    //Converter JSON no formato adequado para os itens serem editados
    var per = JSON.parse(tblPersons[selected_index]); 
    $("#Nome").val(per.Nome);
    $("#CPF").val(per.CPF);
    $("#Telefone").val(per.Telefone);
    $("#Email").val(per.Email);
     $("#Lat").val(per.Lat);
     $("#Lng").val(per.Lng);
  
  });

  $(".btnDelete").bind("click", function () {
    //OObter o identificador do item a ser deletado
    selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
    Delete(); //eliminar o item
    List(); //Voltar aos itens listados na tabela
  });
});

 */



/*Formatando localstorage*/
let selectedRow = null

// funcao  que executa gravaçao dos dados no local storage
function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

// funcao para leitura de dados
function readFormData() {
    let formData = {};
    formData.fullName = document.getElementById("fullName").value;
    formData.empCode = document.getElementById("empCode").value;
    formData.salary = document.getElementById("salary").value;
    formData.city = document.getElementById("city").value;
    return formData; 
}

//funcao para inserir dado diferente
function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    // criaçaõ de linhas para inserção de dados
    let newRow = table.insertRow(table.length); // nova linha para tabela
    cell1 = newRow.insertCell(0); 
    cell1.innerHTML = data.fullName; //celula 1 da linha 1
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode; //celula 2 da linha 1
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary; //celula 3 da linha 1
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;   //celula 4 da linha 1
    cell5 = newRow.insertCell(4); 
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Tem certeza que deseja eliminar?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

localStorage.setItem('items', JSON.stringify(newRow));
const dataBase = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

localStorage.setItem('items', )


/*/Código para o grafico de estatística

var ctx = document.getElementsByClassName("line-chart");


//Para usar chartjs devemos ter em conta os segtes parametros: type, data e options
var chartGraph = new chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","nov","Dez"],
    datasets: [
    {
      label: "Produção da Clínica - 2022",
      data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
      borderWidth: 5,
      bordercolor: 'rgba(77.166,253,0.5)',
      backgroundcolor: 'transparent',

    },
    {
      label: "Produção da Clínica - 2022",
      data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
      borderWidth: 5,
      bordercolor: 'rgba(77.166,253,0.5)',
      backgroundcolor: 'transparent',

    },
    ]
  },
  options: {
    title: {
      display: true,
      fontSize: 20,
      text: "RELATÓRIO DE CONTROLE ANUAL"
    },
    labels: {
      fontStyle: 'bold',

    }
  }
});

**/