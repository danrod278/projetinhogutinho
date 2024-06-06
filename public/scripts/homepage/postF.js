var button = document.getElementsByTagName('button')[0]

class Imagem{
  constructor(imagemB64){
    this.imagemB64 = imagemB64
  }
}

let imageInstance = null

const image = document.getElementById('loadImages')
image.addEventListener("change", previewFile);



button.addEventListener('click', ()=>postar(imageInstance))

function previewFile({ target }) {
  const file = target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = () => {
    
    imageInstance = new Imagem(reader.result)
   
  };
}

function postar(image){
  if(image!=null){
    image=image.imagemB64
  }
  var input = document.getElementById('post-input').value
  console.log(input)
  fetch('/post', {method:"POST",
    headers: {
    'Content-Type': 'application/json'},
    body:JSON.stringify({input:input, image:image})})
    .then(response =>{
    if(!response.ok){
      console.log('Erro ao enviar os dados')
      
    }
    return response.json()
  }).then(respostaAPI =>{
    console.log(respostaAPI)
  }).catch(err=>{coonsole.log("Houve um erro ao enviar o post:" + err)})
}

