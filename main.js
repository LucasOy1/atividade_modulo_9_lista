$(document).ready(function(){
    $('header button').on('click', function(e){
        e.preventDefault();

        const adicionaTarefa = $('#input-tarefa').val();
        const colocaTarefa = $('<li id="linha"></li>').text(adicionaTarefa);

        $('#adiciona-tarefa').append(colocaTarefa);

        $('#adiciona-tarefa li').on('click', function(){
            $(this).addClass('linha');
        });
    });
});
