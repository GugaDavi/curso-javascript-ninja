(function (win, doc) {
  /*
  Essa semana você terá dois desafios:
  1 - Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2 - Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */

  var $nomeAluno = doc.querySelector('[data-js="aluno"]');
  var $selectAluno = doc.querySelector('[data-js="alunos"]');
  var $faltante = doc.querySelector('[data-js="faltante"]');
  var calcular = doc.querySelector('[data-js="calcular"]');
  var $resultado = doc.querySelector('[data-js="resultado"]');

  // Notas:

  var $pB = doc.querySelector('[data-js="1bi"]');
  var $sB = doc.querySelector('[data-js="2bi"]');
  var $tB = doc.querySelector('[data-js="3bi"]');
  var $qB = doc.querySelector('[data-js="4bi"]');

  var n1 = 0;
  var n2 = 0;
  var n3 = 0;
  var n4 = 0;

  // Media:

  $faltante.value = 24;

  var media;

  // Functions:

  function insertNotas() {
    switch (this.dataset.js) {
      case '1bi':
        n1 = Number(this.value);
        break;
      case '2bi':
        n2 = Number(this.value);
        break;
      case '3bi':
        n3 = Number(this.value);
        break;
      case '4bi':
        n4 = Number(this.value);
        break;
    }
  }

  function calcMedia(event) {
    event.preventDefault();
    media = $faltante.value - (n1 + n2 + n3 + n4);
    $faltante.value = media;
    if ( $faltante.value < 0 ) {
      $faltante.value = 0;
    }
    if ( media >= 24 ) {
      $resultado.value = 'APROVADO';
    } else {
      $resultado.value = 'REPROVADO';
    }
  }

  function insertEvents(element, event, action) {
    element.addEventListener( event, action );
  }

  function changeStudy() {
    var numeroAluno = $selectAluno.value;

    switch (numeroAluno) {
      case '1':
        $nomeAluno.value = 'Matheus Vieira';
        break;
      case '2':
        $nomeAluno.value = 'Herta Milene';
        break;
      case '3':
        $nomeAluno.value = 'Gustavo Davi';
        break;
      default:
        $nomeAluno.value = '';
    }
  }

  // Events

  $selectAluno.addEventListener('change', changeStudy, false);

  insertEvents( $pB, 'blur', insertNotas );
  insertEvents( $sB, 'blur', insertNotas );
  insertEvents( $tB, 'blur', insertNotas );
  insertEvents( $qB, 'blur', insertNotas );

  insertEvents( calcular, 'click', calcMedia );

})(window, document);
