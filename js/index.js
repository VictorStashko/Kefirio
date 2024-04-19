const output = document.getElementById("output"),
    select = document.getElementById("select"),
    basicUrl = document.getElementById("basic-url"),
    floatingTextareaIn = document.getElementById("floatingTextareaIn"),
    reqStatus = document.querySelector("#status"),
    submit = document.getElementById("submit");
    

    // Call function getDataFromFields if event is click
    submit.addEventListener('click', function (event){
        event.preventDefault();
      getDataFromFields(floatingTextareaIn,basicUrl,select)
    });    

//block textarea if method is GET
select.addEventListener('change', function(){
  if (select.value === "Get"){
    floatingTextareaIn.setAttribute("readonly","readonly");
  } else  {
    if(floatingTextareaIn.hasAttribute("readonly")){
      floatingTextareaIn.removeAttribute("readonly");
    }
  }
});

  function getDataFromFields (inputArea, url,select){
    let info = {}; 
    info.inputArea = inputArea.value;
    info.url = url.value;
    info.select = select.value;
    console.log(info);
   chooseRequest(info);
}

function clearFields(){
  output.value ="";
  reqStatus.value ="";
}

 function chooseRequest(info){
   console.log('start function');
   if(info.select === "GET"){
     console.log("get function");
     getInfo(info);
   } else if (info.select === "POST") {
     postInfo(info);
   } else if (info.select === "PATCH") {
     patchInfo(info);
   } else if (info.select === "DELETE") {
     deleteUser(info);
   }
 }

function getInfo(info){
    if(info.url === ''){
        alert("Вкажіть адресу запиту!");
    }else {
    axios.get(info.url, {
    })
    .then(function (response) {
        output.append(JSON.stringify(response.data,null,'\t'));
        console.log(response);
        reqStatus.append('status: '+response.status +'\n' + 'statusText: '+ response.statusText);

    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
}}

function postInfo(info){
  if(info.url === ''){
    alert("Вкажіть адресу запиту!");
}else { 
  const jsonObj = JSON.parse(info.inputArea);
    axios({
      method: "POST",
      data: jsonObj,
      url: info.url
  })
      .then(function (response) {
        swal("Успіх",response.data , "success");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}}

function patchInfo(info) {
  console.log("patch");
  if(info.url === ''){
    alert("Вкажіть адресу запиту!");
}else { 
  const jsonObj = JSON.parse(info.inputArea);
    axios({
      method: "PATCH",
      data: jsonObj,
      url: info.url
  })
      .then(function (response) {
        swal("Успіх",response.data , "success");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}}

function deleteUser(info) {
  console.log("delete");
  if(info.url === ''){
    alert("Вкажіть адресу запиту!");
}else { 

    axios({
      method: "DELETE",
      
      url: info.url
  })
      .then(function (response) {
        swal("Успіх",response.data , "success");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}}

