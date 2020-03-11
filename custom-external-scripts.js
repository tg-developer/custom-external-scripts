    define(

        //-------------------------------------------------------------------
        // DEPENDENCIES
        //-------------------------------------------------------------------
        ['jquery', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.0/js/swiper.js'],

        //-------------------------------------------------------------------
        // MODULE DEFINITION
        //-------------------------------------------------------------------
        function ($, Swiper) {

          "use strict";

          return {

            onLoad: function (widget) {
              console.log(widget);

              if ((widget.pageContext().page.name == 'selecaobbsegurospf') || (widget.pageContext().page.name == 'selecaobbsegurospf2') || (widget.pageContext().page.name == 'selecaobbsegurospf3') || (widget.pageContext().page.name == 'selecaobbsegurospf4') || (widget.pageContext().page.name == 'selecaobbsegurospj') || (widget.pageContext().page.name == 'selecaobbsegurospj_2') || (widget.pageContext().page.name == 'selecaobbsegurospj_3')) {

                $(function() {
                  $('.btnAbrirModal').on('click', function(e) {
                    e.preventDefault();

                    $('#open-modal').addClass('modal-open');
                  });

                  $('.modal-close').on('click', function(e) {
                    e.preventDefault();

                    $('#open-modal').removeClass('modal-open');
                  });

                  $(document).on('keydown', function(event) { 
                    if (event.key == "Escape") { 
                      $('#open-modal').removeClass('modal-open');
                    } 
                  }); 
                });


              }
              
              else if (widget.pageContext().page.name == 'use-pontos-v1') {
                  
                  $('.owl-carrossel-v1-mobilidade').owlCarousel({
                    loop:false,
                    margin:10,
                    nav:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        1000:{
                            items:1
                        }
                    }
                });
                  
              }
              
                else if (widget.pageContext().page.name == 'ganhe-pontos-bradesco-seguros') {
        
            		$('a.modal-fechar-janela-x').on('click', function(e) {
            			e.preventDefault();
            			var dataModal = $(this).attr('data-modal-fechar');
            			$("div."+dataModal).stop().fadeOut();
            		});
            
            		$('section.resgatar-pontos .links-troque-pontos .bloco-links-botoes .quadros-seguros a').on('click', function(e) {
            			e.preventDefault();
            			var dataModal = $(this).attr('data-abrir-modal');
            			$("div."+dataModal).stop().fadeIn();
            		});
                
            	}

              else if (widget.pageContext().page.name == 'ganhe-pontos-aqui-tem-pontos-livelo') {

                $(function() {
                  var swiperPontos = new Swiper('.swiper-passo-a-passo', {
                    slidesPerView: 1,               
                    pagination: {
                      el: '.swiper-pagination',
                      clickable: true,
                    },
                    navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    },
                    breakpoints: {
                      1024: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      },
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      500: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                      }
                    }
                  });
                });


              }

            }
          };
        }
        );