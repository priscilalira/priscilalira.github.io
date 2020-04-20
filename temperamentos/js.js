$(function(){

	$('.conteudoEditor a.foto').hover(function(){
		$(this).find('span').stop(false,true).fadeToggle('slow');
	});

    $('.esquerda .abas').each(function() {
        var content = $(this).next(),
                tab = $('li', this);
        $('ul', content).eq(0).show();
        tab.eq(0).addClass('ativo');
        tab.click(function() {
            var index = $(this).index()
            $(this).addClass('ativo').siblings().removeClass()
            $('ul', content).hide().eq(index).fadeIn()
        })
    });

    $('.enqueteIndex .btAbrir, .formEnquete .fechar, .formEnquete .btFechar').click(function() {
        $('#formEnquete').toggleClass('enqueteModal');
        $('body').toggleClass('enqueteAtivo');
    });

    var controller = $.superscrollorama({
        playoutAnimations: false,
        triggerAtCenter: false,
        reverse: true
    });

    var isiDevice = /ipad|iphone|ipod|android|windows phone/i.test(navigator.userAgent.toLowerCase());
    if (isiDevice)
    {//JS PARA APLICAR APENAS EM MOBILE
        $('#geral').addClass('movel');

        $(".galeriaPastoral a, .galeriaFoto a, .galeriaVideo a, .vn_editor").boxer({
            fixed : true,
            mobile : true
        });

        $('.menu > li > a').click(function() {
            $('+ ul', this).stop(false, false).slideToggle();
        });

    }
    else {//JS PARA APLICAR APENAS NO SITE
        $('#geral').addClass('pc');

        $(".galeriaPastoral a, .galeriaFoto a, .galeriaVideo a, .vn_editor").boxer({
            fixed : true
        });

        $('.menu > li').hover(function() {
            $('> ul', this).stop(false, false).slideToggle()
        });

        $(".formBiblia select").dropdown({
            customClass : 'bibliaDrop'
        });

        var controller = $.superscrollorama({
            playoutAnimations: false,
            triggerAtCenter: false,
            reverse: true
        });
        controller.addTween(
            '.casados',
            (new TimelineLite())
            .append([
              TweenMax.fromTo($('.fundo'), 2.5,
                {css:{top: '-100%'}, immediateRender:true},
                {css:{top: '-20%'}})
            ]),
            1500, // scroll duration of tween
            -900 // scroll duration of tween (0 means autoplay)
        );
        controller.addTween(
            '.devocionais',
            (new TimelineLite())
            .append([
              TweenMax.fromTo($('.fundo2'), 2.5,
                {css:{top: '-100%'}, immediateRender:true},
                {css:{top: '-20%'}})
            ]),
            1500, // scroll duration of tween
            -900 // scroll duration of tween (0 means autoplay)
        );

    }

    $('.menuOculto, #menu .fechar, #menu .fundo').click(function() {
        $('#menu').stop(false, false).toggleClass('menuAtivo');
    });

    $("#listaEvento" ).load( "ajaxEventos.php", function(){
        var $tamCont = $('.conteudoInterna').height();
        var $tamGaleria = ($('#listaEvento').height() + 30);

        if($tamCont < $tamGaleria) {
            $('.conteudoInterna').css('min-height', $tamGaleria);
        };

        var $nav = $('.galeriaDireita');
        var $window = $(window);
        var baixo = 0;
        var scrollAtual = 0;
        var $tamDiv = $('.galeriaDireita').height();
        $window.scroll(function() {
            scrollAtual = $window.scrollTop();
            if (scrollAtual > 343) {
                $nav.addClass("Fixo");
            } else {
                $nav.removeClass("Fixo");
            }
            baixo = ($(document).height() - (2199 + $tamDiv));
            if (scrollAtual > baixo) {
                $nav.addClass('fixoBaixo');
            } else {
                $nav.css({
                    "top": "0px"
                }).removeClass('fixoBaixo');
            }
        }
        );
    });

    $("#listaEvento").on( "click", ".paginacao a", function (e){
        e.preventDefault();
        var pagina = $(this).attr("data-page");

        $("#listaEvento").load("ajaxEventos.php",{"pagina":pagina}, function(){

        });
    });

    var $tamCont1 = $('.conteudoInterna').height();
    var $tamGaleria1 = ($('.blogDireita').height() + 30);

    if($tamCont1 < $tamGaleria1) {
        $('.conteudoInterna').css('min-height', $tamGaleria1);
    };

    jQuery("document").ready(function($) {
        var $nav = $('.blogDireita');
        var $window = $(window);
        var baixo = 0;
        var scrollAtual = 0;
        var $tamDiv = $('.blogDireita').height();
        $window.scroll(function() {
            scrollAtual = $window.scrollTop();
            if (scrollAtual > 343) {
                $nav.addClass("Fixo");
            } else {
                $nav.removeClass("Fixo");
            }
            baixo = ($(document).height() - (2199 + $tamDiv));
            if (scrollAtual > baixo) {
                $nav.addClass('fixoBaixo');
            } else {
                $nav.css({
                    "top": "0px"
                }).removeClass('fixoBaixo');
            }
        }
        );
    }
    );

    var $width1 = $('body').width();

    if ($width1 > 699) {

        var $tamForm1 = $('.grupo1-1').height();
        var $tamForm2 = $('.grupo2-1').height();
        if ($tamForm1 > $tamForm2) {
            $('.grupo2-1').css('height', $tamForm1);
        } else {
            $('.grupo1-1').css('height', $tamForm2);
        };

        var $tamForm3 = $('.grupo1-2').height();
        var $tamForm4 = $('.grupo2-2').height();
        if ($tamForm3 > $tamForm4) {
            $('.grupo2-2').css('height', $tamForm3);
        } else {
            $('.grupo1-2').css('height', $tamForm4);
        };

        var $tamForm5 = $('.grupo1-3').height();
        var $tamForm6 = $('.grupo2-3').height();
        if ($tamForm5 > $tamForm6) {
            $('.grupo2-3').css('height', $tamForm5);
        } else {
            $('.grupo1-3').css('height', $tamForm6);
        };

        var $tamForm7 = $('.grupo1-4').height();
        var $tamForm8 = $('.grupo2-4').height();
        if ($tamForm7 > $tamForm8) {
            $('.grupo2-4').css('height', $tamForm7);
        } else {
            $('.grupo1-4').css('height', $tamForm8);
        };
    };

    if ($width1 < 599) {
        $('.antigo ul, .novo ul').hide();

        $('.antigo h2, .novo h2').click(function() {
            console.log('teste');
            $('~ ul', this).slideToggle();
        });
    };

    $('.ministerios .tituloA').click(function() {
        $(this).toggleClass('ativo');
        $('+ div', this).slideToggle();
    });

    function gerarGaleria(galeria,anterior,proximo,visible){
        galeria.cycle({
            'fx': 'carousel',
            'prev' : anterior,
            'next' : proximo,
            'speed' : 1000,
            'slides' : ' > a ',
            'carouselVisible' : visible,
            'timeout' : 0,
            'allowWrap' : false,
            'carouselFluid' : true
        });
    }

    if (($width1 < 900) && ($width1 > 699)) {

        gerarGaleria($('.galeriaPastoral1'),'#prev2','#next2',3);
        gerarGaleria($('.galeriaPastoral2'),'#prev2','#next2',2);
        gerarGaleria($('.galeriaPastoral3'),'#prev2','#next2',3);

        gerarGaleria($('.galeriaFoto1'),'#prev2','#next2',2);
        gerarGaleria($('.galeriaFoto2'),'#prev2','#next2',2);

        gerarGaleria($('.galeriaVideo1'),'#prev3','#next3',2);
        gerarGaleria($('.galeriaVideo2'),'#prev3','#next3',2);


    } else if (($width1 < 700) && ($width1 > 499)) {

        gerarGaleria($('.galeriaPastoral1'),'#prev2','#next2',2);
        gerarGaleria($('.galeriaPastoral2'),'#prev2','#next2',1);
        gerarGaleria($('.galeriaPastoral3'),'#prev2','#next2',2);

        gerarGaleria($('.galeriaFoto1'),'#prev2','#next2',2);
        gerarGaleria($('.galeriaFoto2'),'#prev2','#next2',2);

        gerarGaleria($('.galeriaVideo1'),'#prev3','#next3',2);
        gerarGaleria($('.galeriaVideo2'),'#prev3','#next3',2);


    } else if ($width1 < 500) {

        gerarGaleria($('.galeriaPastoral1'),'#prev2','#next2',1);
        gerarGaleria($('.galeriaPastoral2'),'#prev2','#next2',1);
        gerarGaleria($('.galeriaPastoral3'),'#prev2','#next2',1);

        gerarGaleria($('.galeriaFoto1'),'#prev2','#next2',1);
        gerarGaleria($('.galeriaFoto2'),'#prev2','#next2',1);

        gerarGaleria($('.galeriaVideo1'),'#prev3','#next3',1);
        gerarGaleria($('.galeriaVideo2'),'#prev3','#next3',1);

    } else {

        gerarGaleria($('.galeriaPastoral1'),'#prev2','#next2',4);
        gerarGaleria($('.galeriaPastoral2'),'#prev2','#next2',2);
        gerarGaleria($('.galeriaPastoral3'),'#prev2','#next2',3);

        gerarGaleria($('.galeriaFoto1'),'#prev2','#next2', 3);
        gerarGaleria($('.galeriaFoto2'),'#prev2','#next2',2);

        gerarGaleria($('.galeriaVideo1'),'#prev3','#next3',3);
        gerarGaleria($('.galeriaVideo2'),'#prev3','#next3',2);

    };

    $('.graficos li>div>span').each(function() {
        var barra = $(this),
                porcentagem = $('>span', barra),
                largura = $(porcentagem).attr('title');
        barra.css({
            'width': largura + '%'
        }, 2000);
        porcentagem.css({
            'left': largura / 1.12 + '%'
        }, 2000);
    });

    $('.fotoMiniatura img').click(function () {
        var src = $(this).attr('data-image');
        var alt = $(this).attr('alt');
        $('.fotoMaior img').attr('src', src).attr('alt', alt);
    });

    $('#newsletter').validate({
        onkeyup: false,
        rules: {
            nome: "required",
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            nome: "Informar o Nome!",
            email: {
                required: "Informar um E-mail v\u00e1lido!",
                email: "Informar um E-mail v\u00e1lido!"
            },
        }
    });

    $.fn.precarregamentoImagens = function(){
        var evento = 'imagensCarregadas';
        var $this = this;
        var $imgs = $(this).find('img');
        var total = $imgs.length;
        var timeoutSecurity;
        function getImagensCarregadas(){
            $imgs.each(function(index,image){
                if(!image.src){
                    image.src = image.longDesc;
                }
                if(image.src && image.complete){
                   total--;
                }else{
                    console.log('imagem nao carregada ainda',image);
                    image.onload = function(){
                        total--;
                    }
                    image.onerror = function(){
                        total--;
                    }
                    image.onabort = function(){
                        total--;
                    }
                }
            });
            getCountImagesCarregadas();
        }
        function getCountImagesCarregadas(){
            if(total <= 0 && total !== false){
                total = false;
                try{ clearTimeout(timeoutSecurity); }catch(e){}
                timeoutSecurity = undefined;
                $this.trigger(evento);
            }else{
                setTimeout(getImagensCarregadas,1000);
            }
        }
        $(window).load(function(){
            getImagensCarregadas();
            timeoutSecurity = setTimeout(function(){
                if(total !== false){
                    total = 0;
                }
                getCountImagesCarregadas();
            },20000);
        });
        return this;
    }
    var $banner = $('.banner ul ');
    $banner.after('<div class="navCenter"><div id="nav" class="nav">').on('imagensCarregadas',function(){
        $banner.cycle({
            'fx': 'fade',
            'slides' : ' > li ',
            'pager':  '#nav',
            'next' : '#next',
            'prev' : '#prev',
            'pagerActiveClass' : 'activeSlide',
            'pagerTemplate' : '<a href="#" class=""></a>'
        });
    }).precarregamentoImagens();

     jQuery("document").ready(function($) {

        var nav = $('#pesquisa');

        $(window).scroll(function() {
            if ($(this).scrollTop() > 180) {
                nav.addClass("Fixo");
            } else {
                nav.removeClass("Fixo");
            }
        });
    });
    
    
});