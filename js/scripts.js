$(document).ready(function(){
    $(".hamburguer").on('click', function(){
        $(".hamburguer span:nth-child(1)").toggleClass("off slideR");
        $(".hamburguer span:nth-child(2)").toggleClass("off fade");
        $(".hamburguer span:nth-child(3)").toggleClass("off slideL");
        $(".menu").slideToggle();
    })

    $(".opnioes article:nth-child(1)").on('click', function(){
        $(".opnioes").addClass("left");
    })
    $(".opnioes article:nth-child(2)").on('click', function(){
        $(".opnioes").removeClass("left");
        $(".opnioes").removeClass("right");
    })
    $(".opnioes article:nth-child(3)").on('click', function(){
        $(".opnioes").addClass("right");
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


function produtoMais(){
    var x = parseInt($("#quantidade-produto").val()) + 1;
    $("#quantidade-produto").val(x);
    precoFinal();
}
function produtoMenos(){
    var x = parseInt($("#quantidade-produto").val()) - 1;
    if(x < 0) {x = 0;}
    $("#quantidade-produto").val(x);
    precoFinal();
}
function precoFinal(){
    if($('.carrinho-subTotal').length){
        var teste = $("#preco-fixo").html();
        var teste2 = teste.substring(1);
        teste2 = teste2.replace(",",".");
        var aqui = $("#quantidade-produto").val();
        teste2 = "$ " + (parseFloat(teste2) * aqui);
        $(".carrinho-subTotal").html(teste2);
    }
}
function removeLinha(){
    $("#fomulario-carrinho tr:nth-child(3)").remove();
    $(".carrinho-subTotal").html("$ 0,00")
}
