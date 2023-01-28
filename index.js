
 var miImagen = document.getElementById('foto');
 miImagen.addEventListener('mouseover', function() {
   alert('Has pasado el ratón encima de la imagen')
 })

 

const $form = document.querySelector('#form')

$form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
  event.preventDefault()
}