
var firebaseConfig = {
  apiKey: "AIzaSyAqnA-19T5WQQn3M8sJ_-Up-ZrlSpsDO70",
    authDomain: "rocha-bank.firebaseapp.com",
    databaseURL: "https://rocha-bank-default-rtdb.firebaseio.com/",
    projectId: "rocha-bank",
    storageBucket: "rocha-bank.appspot.com",
    messagingSenderId: "203742887644",
    appId: "1:203742887644:web:6333509b03285f6ecffe19"
};
// =============================== Iniciar Firebase ======================================

firebase.initializeApp(firebaseConfig);

// =============================== Iniciar Variavens Da Firebase ================================
const auth = firebase.auth()
const database = firebase.database()

// ===============================  Definir Visbilidade =================================

localStorage.setItem("checkin", "false");

// ===============================  Politicas Aceitas ===================================

function validate() {
  if (document.getElementById('remember').checked) {
    localStorage.setItem("checkin", "true");
    document.getElementById("signup-btn").style = "background: #008cff;";
  } else {
    localStorage.setItem("checkin", "false");
    document.getElementById("signup-btn").style = "background: #008cff6b;";


  }
}

// =============================== Registro De Usuario ===============================

function Register420 () {


  // =============================== Variavens Nessacarias =================================

  email = localStorage.getItem("Gmail1234");
  password = localStorage.getItem("Senha1234");
  full_name = localStorage.getItem("Nome1234");
  idade1 = localStorage.getItem("Idade1234");
  sexo1 = localStorage.getItem("Opt_1");

  adm14 = localStorage.getItem("Opt_2");
  serie1 = localStorage.getItem("Serie");
  leal_inc = localStorage.getItem("Leal_INC");
  description = localStorage.getItem("Description");


  
  // =============================== Criar Usuario ===================================

  


// ===============================  Defini Horas ====================

    var data = new Date(),
    dia  = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0'+dia : dia,
    mes  = (data.getMonth()+1).toString(),
    mesF = (mes.length == 1) ? '0'+mes : mes,
    anoF = data.getFullYear();
    const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

const day = diaF+"/"+mesF+"/"+anoF+" "+[horas, minutos, segundos].join(':');

    // =============================== Declarar A Firebase =============================

    var user = auth.currentUser

    // =============================== Definir O Que E Firebase ====================================

    var database_ref = database.ref()

    // // =============================== Criar Usuario Data ==============================
 
     
    
     

    var info444 = {
      Email : email,
      Nome5 : full_name,
      Dia_Cadastro : day,
      Idade : idade1,
      Sexo : sexo1,
      Serie : serie1,
      Description : description,
      Vez : "0"
    
    }
    var info4445 = {
      Senha : password
    }
          
    var info44451 = {
      Vez : false
    }
          
                var Vendas = {
                  Vendas : "0",
                Progress : "1%"
              }
              var Ganhos = {
                Ganhos : "1",
              Progress : "100%"
            }
            var Social = {
              Social : "0",
            Progress : "1%"
            }
          var Compras = {
            Compras : "0",
          Progress : "1%"
          }
          var Leal = {
            Leal : leal_inc,
          Progress : "1%"
          }
          var Modo = {
            Modo : adm14
          }
        var Caso = {
          Caso : "Livre",
          Motivo : "",
          Data : "",
          Por : "",
          Message : ""
        }
      var Compras = {
        Compra : "0",
        Progress : "1%"
      }
    var Armaz = {
      Total : "1000",
    Sistema : "1",
    Livre : "90%",
    AutoDrive : "1",
    Backup : "1",
    Shared : "1"
    }
    var Recebimento_Armaz = {
      Total : "1,00 ",
    Server : "1,00",
    Social : "0,00",
    Dirial : "0,00",
    Project : "0,00",
    Provas : "0,00",
    Vendas : "0,00"
    }  
      var Atividades = {
      Alberto : "0",
      Erico : "0",
      Rildo : "0",
      Elena : "0",
      Alberto : "0",
    }
   
    localStorage.setItem("Last_Login", horas);
alert('Usuario Criado')
    
    database_ref.child('Alunos/' + full_name + "/Info").set(info444)
    database_ref.child('Alunos/' + full_name + "/Info/Senha").set(info4445)
    database_ref.child('Alunos/' + full_name + "/Info/Vezes").set(info44451)
    database_ref.child('Alunos/' + full_name + "/Dados/Web/Vendas").set(Vendas)
    database_ref.child('Alunos/' + full_name + "/Dados/Web/Ganhos").set(Ganhos)
    database_ref.child('Alunos/' + full_name + "/Dados/Web/Social").set(Social)
    database_ref.child('Alunos/' + full_name + "/Dados/Web/Compras").set(Compras)
    database_ref.child('Alunos/' + full_name + "/Dados/Web/Leal").set(Leal)

    database_ref.child('Alunos/' + full_name + "/Admin/Modo").set(Modo)
    database_ref.child('Alunos/' + full_name + "/Admin/Caso").set(Caso)

    database_ref.child('Alunos/' + full_name + "/Outros/Armaz").set(Armaz)
    database_ref.child('Alunos/' + full_name + "/Outros/Send_Leal").set(Recebimento_Armaz)
    database_ref.child('Alunos/' + full_name + "/Outros/Server/Atividade/9/B").set(Atividades)



  }

   // =============================== Verificar Error De Login =============================

  

  



// =============================== Opção De Login ======================================
function login () {
  email = localStorage.getItem("Email");
  password = localStorage.getItem("Senha");
  name1 = localStorage.getItem("Nome");




  auth.signInWithEmailAndPassword(email, password)
  .then(function() {

    // ============================  Definir Horas ==========================================
    var data = new Date(),
    dia  = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0'+dia : dia,
    mes  = (data.getMonth()+1).toString(),
    mesF = (mes.length == 1) ? '0'+mes : mes,
    anoF = data.getFullYear();
    const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

const day1 = diaF+"/"+mesF+"/"+anoF+" "+[horas, minutos, segundos].join(':');
    
    var user = auth.currentUser

    var database_ref = database.ref()

    // =============================== Definir Usuario Data ===============================================
    var user_data = {
      Ultimo_Conecto : day1
    }

    database_ref.child('Alunos/' + localStorage.getItem("Nome") + "/Info").update(user_data)
   
    document.getElementById('email').value = '';
    localStorage.setItem("Last_Login", horas);


    window.location.href = "Inicio.html";


// ===============================  Error De Login =============================

  })
  .catch(function(error) {
    if (localStorage.getItem("Error") == "true") {
alert("Ocorreu Um Poblema Com Seus Dados Verifique Um Adiministrador")
    }
  })

}

// ===============================  Obter Dados Da Firebase =====================================

function get() {
  

  var username = localStorage.getItem("Nome2");


                                      var Info89 = database.ref('Alunos/' + username + "/Info")
                                      Info89.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                          localStorage.setItem("Contador", data.Email);
                                          localStorage.setItem("Nome5", data.Nome5);
                                          localStorage.setItem("Dia_Cadastro", data.Dia_Cadastro);
                                          localStorage.setItem("Idade", data.Idade);
                                          localStorage.setItem("Sexo", data.Sexo);
                                          localStorage.setItem("Serie", data.Serie);
                                          localStorage.setItem("Description", data.Description);
                                          localStorage.setItem("Vez", data.Vez);
                                         

                                  
                                      })
                                      var Info891 = database.ref('Alunos/' + username + "/Info/Senha")
                                      Info891.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                      localStorage.setItem("Senha", data.Senha);
                                      })

                                    
                                      var Vez2234 = database.ref('Alunos/' + username + "/Info/Outros")
                                      Vez2234.on('value', function(snapshot) {
                                        var data = snapshot.val()
                                      localStorage.setItem("Vez22", data.Vez);
                                      })
                                      
                                    var user_ref = database.ref('Alunos/' + username + "/Dados/Web/Ganhos")
                                    user_ref.on('value', function(snapshot) {
                                      var data = snapshot.val()
                                        localStorage.setItem("Ganhos", data.Ganhos);
                                        localStorage.setItem("Progress1", data.Progress);


                                    })
                                  var Leal = database.ref('Alunos/' + username + "/Dados/Web/Leal")
                                  Leal.on('value', function(snapshot) {
                                    var data = snapshot.val()
                                      localStorage.setItem("Leal", data.Leal);
                                      localStorage.setItem("Progress2", data.Progress);
                                     
                                  })
                                  var Compra = database.ref('Alunos/' + username + "/Dados/Web/Compras")
                              Compra.on('value', function(snapshot) {
                                var data = snapshot.val()
                                  localStorage.setItem("Compras", data.Compra);
                                  localStorage.setItem("Progress3", data.Progress);
                              })
                            var user_ref = database.ref('Alunos/' + username + "/Dados/Web/Vendas")
                            user_ref.on('value', function(snapshot) {
                              var data = snapshot.val()
                                localStorage.setItem("Vendas", data.Vendas);
                                localStorage.setItem("Progress4", data.Progress);
                            })
                         var user_ref = database.ref('Alunos/' + username + "/Admin/Modo")
                         user_ref.on('value', function(snapshot) {
                           var data = snapshot.val()
                           localStorage.setItem("Modo", data.Modo);
                         })
                      var Caso = database.ref('Alunos/' + username + "/Admin/Caso")
                       Caso.on('value', function(snapshot) {
                         var data = snapshot.val()
                         localStorage.setItem("Caso2", data.Caso);
                        localStorage.setItem("Message", data.Message);
                         
                      })
                      var Arma = database.ref('Alunos/' + username + "/Outros/Armaz")
                       Arma.on('value', function(snapshot) {
                         var data = snapshot.val()
                        
                        localStorage.setItem("Sistema", data.Sistema);
                        localStorage.setItem("Backup", data.Backup);
                        localStorage.setItem("Shared", data.Shared);
                         localStorage.setItem("AutoDriver", data.AutoDrive);
                        localStorage.setItem("Livre4445", data.Livre);
                      
                      })
                
                  
  var TL = database.ref('Alunos/' + username + "/Outros/Send_Leal")
  TL.on('value', function(snapshot) {
    var data = snapshot.val()
    
    localStorage.setItem("Server_TL", data.Server);
    localStorage.setItem("Total_TL", data.Total);
    localStorage.setItem("Social_TL", data.Social);
    localStorage.setItem("Diarial_TL", data.Dirial);
    localStorage.setItem("Project_TL", data.Project);
    localStorage.setItem("Provas_TL", data.Provas);
    localStorage.setItem("Vendas_TL", data.Vendas);
   
  })
  

  if (localStorage.getItem("Caso2") == "SUS") {
    alert(localStorage.getItem("Message"))
    window.location.href = "Conectar.html";
  }

  
 if (localStorage.getItem("Nome444") == localStorage.getItem("Nome5") && localStorage.getItem("Gmail444") == localStorage.getItem("Contador") && localStorage.getItem("Metodo") == "Recu") {
  
  var database_ref = database.ref()
 alert('Senha Redefinida')
  var Atividades = {
   
    Senha : localStorage.getItem("Senha2")
   
  } 
 
   database_ref.child('Alunos/' + username + "/Info/Senha").set(Atividades)

   setTimeout(function() {
    window.location.href = "Conectar.html";
 }, 1000);

alert('ssns')
 


 } else {
 if (localStorage.getItem("Metodo") == "Recu") {
  alert('Opss, Alguma Informação Digitada Está Incorreta')
 }
  if (localStorage.getItem("Metodo") == "Vezes") {
    var database_ref = database.ref()
    
      var Vez1 = {
       
        Vez : '1'
       
      } 
     
       database_ref.child('Alunos/' + username + "/Info/Outros/Vez").set(Vez1)
    

 }
   // alert(localStorage.getItem("Nome444"))
    // alert(localStorage.getItem("Nome5"))
    
  
  if (localStorage.getItem("Metodo") == "Login") {
  setTimeout(function() {
    var data = new Date()
    const horas = data.getHours();
    const minutos = data.getMinutes();

  if (localStorage.getItem("Nome1") == localStorage.getItem("Nome5")) {

    if (localStorage.getItem("Senha1") == localStorage.getItem("Senha")) {

   

    localStorage.setItem("Last_Login", horas);


    window.location.href = "Inicio.html";
    
    } else { 
      if (localStorage.getItem("Block") == minutos) {
        alert('Acesso Negado')
      } else {
     
        window.location.href1 = "Conectar.html";

      
      alert('Senha Incorreta, Tente Novamente')
      document.getElementById("login-btn").style = 'display:auto';

     
    }
    }
  } else {
    alert('Nome Incorreto, Tente Novamente')
    document.getElementById("login-btn").style = 'display:auto';


  }
 
  
 }, 2000);
 }

 }
 

 if (localStorage.getItem("Metodo") == "Vez") {
  
  var database_ref = database.ref()
  var Vez1 = {
   
    Vez : "true"
   
  
  }
   database_ref.child('Alunos/' + username + "/Info/Outros").set(Vez1)


  }


  
 if (localStorage.getItem("Metodo") == "Error") {
  
  var database_ref = database.ref()
  var Error = {
   
    Caso : "SUS",
    Message : "Sua Conta Foi Desativada Devido A Um Poblema Com Seus Dados!"
 
  }
   database_ref.child('Alunos/' + username + "/Admin/Caso").set(Error)


  }



 }


 if (localStorage.getItem("Caso") == "Ban") {
    alert(localStorage.getItem("Message"))
    window.location.href = "Banido.html";
  }
  tent = 0
  /*

  var data1 = new Date()
  const d = new Date();
  let hour = d.getHours();
  if (localStorage.getItem("Last_Login") == hour) {
    window.location.href = "Inicio.html";
  }
  */


 function Show_pass1() {
 if (check == 'false') {
  check = 'true'
 document.getElementById("password").type = Text;
 visible_off

 }
 else {
  document.getElementById("password").type = "Password";
  check = 'false'
  document.getElementById('visible_off').style = "opacity: 1;"
  document.getElementById('visible_on').style = "opacity: 0;"


 }}
 document.getElementById('visible_off').style = "opacity: 0;"
  document.getElementById('visible_on').style = "opacity: 1;"



  function Desc() {
    localStorage.setItem("Caso", "Livre");
    localStorage.setItem("Nome", "");
    localStorage.setItem("Senha", "");
    localStorage.setItem("Last_Login", "12345678");

   
    window.location.href = "Conectar.html";
  }

