
var button = document.getElementsByTagName('button')[0]
var image = document.getElementsByName('images-outline')

button.addEventListener('click', ()=>{
  var input = document.getElementById('post-input').value
  var image = document.getElementsByName('images-outline')
  console.log(input)
  let sendPost = fetch('/post', {method:"POST",
    headers: {
    'Content-Type': 'application/json'},
    body:JSON.stringify({input:input})})
    .then(response =>{
    if(!response.ok){
      console.log('Erro ao enviar os dados')
      
    }
    return response.json()
  }).then(respostaAPI =>{
    console.log(respostaAPI)
  }).catch(err=>{coonsole.log("Houve um erro ao enviar o post:" + err)})
})

