$(document).ready(function(){
    $(".hamburguer").on('click', function(){
        $(".hamburguer span:nth-child(1)").toggleClass("off slideR");
        $(".hamburguer span:nth-child(2)").toggleClass("off fade");
        $(".hamburguer span:nth-child(3)").toggleClass("off slideL");
        $(".menu").slideToggle();
    })

    $(".testemunhos section:nth-Child(2)").on('scroll', function(){
        $(".opnioes article").removeClass("centralizar");
    });

    $(".opnioes article").on('click', function(){
        $(".opnioes article").removeClass("centralizar");
        $(this).addClass("centralizar");
    })

    $(".veja-Mais").on('click', function(){
        $("#produtos .veja-Mais ~ article").slideDown();
        $(".veja-Menos").show()
        $(this).hide();
    })
    $(".veja-Menos").on('click', function(){
        $("#produtos .veja-Mais ~ article").slideUp();
        $(".veja-Mais").show()
        $(this).hide();
    })
})


function alteraQtd(op){
    var x = parseInt($("#quantidade-produto").val());
    if(op == "+"){x = x + 1;}
    else{ 
        if (x > 0){
            x = x - 1;
        }
        else{ x = 0}
    }

    $("#quantidade-produto").val(x);
    precoFinal();
}
function precoFinal(){
    if($('.carrinho-Total').length){
        var teste = $("#preco-fixo").html();
        var teste2 = teste.substring(1);
        var aqui = $("#quantidade-produto").val();
        teste2 = "$ " + (parseFloat(teste2) * aqui);
        $(".carrinho-Total").html(teste2);
    }
}
function removeLinha(){
    $("#fomulario-carrinho tr:nth-child(3)").remove();
    $(".carrinho-Total").html("$ 0,00")
}
