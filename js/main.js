const output = document.getElementById("output"),
    select = document.getElementById("select"),
    basicUrl = document.getElementById("basic-url"),
    floatingTextareaIn = document.getElementById("floatingTextareaIn"),
    submit = document.getElementById("submit");


// fetch('https://anapioficeandfire.com/api/characters/583')
//   .then(response => response.json())
//   .then(data => getDataFromFields(floatingTextareaIn,basicUrl,select));// викликати getDataFormField 

//   function pasteResult (data, place){
//       place.append(data.url);
//       console.log(data.url);

//   }
  function getDataFromFields (inputArea, url,select){
      let info = {}; 
      info.inputArea = inputArea.value;
      info.url = url.value;
      info.select = select.value;
      console.log(info);
    //   pasteResult(info,output);
  }
  submit.addEventListener('click', function (event){
      event.preventDefault();
    getDataFromFields(floatingTextareaIn,basicUrl,select)
  });
//   getDataFromFields(floatingTextareaIn,basicUrl,select)
  // getDataFormFields - отримує всі данні з полів і записує їх в поле info
  // викликає функцію pasteResult з двома параметрами: info i output

  // YGxKWtIDXX0O8yiF8h2dizYmCheof5mspsDcneXO
