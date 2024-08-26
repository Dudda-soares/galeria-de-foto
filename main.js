$(document).ready(function(){
   $('header button').click(function(){
      $('form').slideDown();
      
   })

   $('#cancelar').click(function(){
      $('form').slideUp()
   })

   $('form').on('submit', function(e){
      e.preventDefault()

      const enderecoDaNovaImagem = $('#endereco-imagem').val()
      const novoItem = $('<li style="display: none;" ></li>')
      $(`<img src = "${enderecoDaNovaImagem}"/>`).appendTo(novoItem)
      $(`
         <div class="overlay">
            <a href ="${enderecoDaNovaImagem}" target="_blank" title="ver imagem tamanho real">
               Ver imagem em tamanho real            
            </a>
         </div>
      `).appendTo(novoItem)
         $(novoItem).appendTo('ul')
         $(novoItem).fadeIn(1000)
         $('#endereco-imagem').val('')

      
   })
})
