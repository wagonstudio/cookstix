/* SCROLL LENIS */
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      const lenis = new Lenis({
        smooth: true,
        smoothWheel: true,
        syncTouch: false,
        syncTouchLerp: 0.1,
        duration: 1.9,
        lerp: 0.08
      })
      
      lenis.on('scroll', (e) => {
        // console.log(e)
      })
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
    }, 1000); 
  });
/* END SCROLL LENIS */

/* SPLITTING */
  document.addEventListener('DOMContentLoaded', function() {
	  Splitting();
  });
/* END SPLITTING */

/* ACTION BTN */
  $(document).ready(function () {
      $('button._btn_menu._1').click(function () {
          $('._supermenu').toggleClass('on');
          $(this).toggleClass('on');
      });
  });
/* END ACTION BTN */

/* GLOBAL ANIMATION */
  $(document).ready(function() {
	setTimeout(function() {
		$('section._i').addClass('move_1');
		$('body').addClass('move_1');
		setTimeout(function() {
			$('section._i').addClass('move_2');
    		$('body').addClass('move_2');
			setTimeout(function() {
				$('section._i').addClass('move_3');
        		$('body').addClass('move_3');
				setTimeout(function() {
					$('section._i').addClass('move_4');
            		$('body').addClass('move_4');
					setTimeout(function() {
						$('section._i').addClass('move_5');
                		$('body').addClass('move_5');
					}, 500);
				}, 500);
			}, 500);
		}, 500);
	}, 500);
  });
/* END GLOBAL ANIMATION */
/* SCROLLMAGIC */
  document.addEventListener('DOMContentLoaded', function () {
    let controller = new ScrollMagic.Controller({
      refreshInterval: 0,
    });  
    let height_i = $("main>section._i").height();
    let height_ii = $("main>section._ii").height();
    let height_iii = $("main>section._iii").height();
    let height_iv = $("main>section._iv").height();
    let height_v = $("main>section._v").height();
    let height_vi = $("main>section._vi").height();
    let height_vii = $("main>section._vii").height();
    let height_viii = $("main>section._viii").height();
    let height_ix = $("main>section._ix").height();
    let height_x = $("main>section._x").height();

    var scene_header_1 = new ScrollMagic.Scene({triggerElement: "#trigger_header" })
      .setClassToggle("#shopify-section-head", "down")
      .triggerHook(0.4)
      //.addIndicators()
      .addTo(controller);

    
    /*
        var anim_ii_2 = TweenMax.to("._marquee._1 ._track ._content", 0.5, {x: "-10%", ease: Power1.easeInOut});
        var scene_ii_2 = new ScrollMagic.Scene({triggerElement: "#trigger_header", duration: (height_i * 3) })
          .setTween(anim_ii_2)
          .triggerHook(0.9)
          //.addIndicators()
          .addTo(controller);
        
        var anim_ii_3 = TweenMax.to("._marquee._2 ._track ._content", 0.5, {x: "-10%", ease: Power1.easeInOut});
        var scene_ii_3 = new ScrollMagic.Scene({triggerElement: "._marquee._2", duration: (height_i * 3) })
          .setTween(anim_ii_3)
          .triggerHook(0.9)
          //.addIndicators()
          .addTo(controller);
        
        var anim_ii_4 = TweenMax.to("._marquee._3 ._track ._content", 0.5, {x: "-10%", ease: Power1.easeInOut});
        var scene_ii_4 = new ScrollMagic.Scene({triggerElement: "._marquee._3", duration: (height_i * 3) })
          .setTween(anim_ii_4)
          .triggerHook(0.9)
          //.addIndicators()
          .addTo(controller);
    */
    
  });
/* END SCROLLMAGIC */


/* SCROLL */
   var scrollPos = 0;
  // adding scroll event
   window.addEventListener('scroll', function(){
    // detects new state and compares it with the new one
     if ((document.body.getBoundingClientRect()).top > scrollPos)
       $("#shopify-section-head").addClass("up");
     else
       $("#shopify-section-head").removeClass("up");
    // saves the new position for iteration.
     scrollPos = (document.body.getBoundingClientRect()).top;
   });
/* END SCROLL */
/* SPLITTING */
  document.addEventListener('DOMContentLoaded', function() {
    Splitting();
  
    // Obtener el año actual
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('._current-year');
    if (yearElement) {
      yearElement.textContent = currentYear;
    }
  });
  $(document).ready(function() {
    $('.splitting.words').each(function() {
        $(this).find('span.char').each(function(index) {
            var delay = (index * 0.025).toFixed(2); 
            $(this).css('transition-delay', delay + 's');
        });
    });
  
    $('.splitting.words').each(function() {
        $(this).find('.word').each(function(index) {
            var delay = (index * 0.025).toFixed(2); 
            $(this).css('transition-delay', delay + 's');
        });
    });
  });
/* END SPLITTING */
/* MODAL TIMEOUT */
  document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el modal ya se mostró en esta sesión
    if (sessionStorage.getItem('modalShown')) return;
  
    setTimeout(function () {
      const klaviyoForm = document.querySelector('.klaviyo-form-VBrgcN');
      const modalElement = document.getElementById('modal-klaviyo');
  
      if (klaviyoForm && klaviyoForm.innerHTML.trim() !== '') {
        // Si el formulario está renderizado correctamente, muestra el modal
        if (modalElement) {
          const modalInstance = new bootstrap.Modal(modalElement);
          modalInstance.show();
  
          // Marcar que el modal ya se mostró en esta sesión
          sessionStorage.setItem('modalShown', 'true');
        }
      } else {
        // Si el formulario no se renderiza, reemplazarlo con el mensaje
        if (klaviyoForm) {
        }
      }
    }, 5000); // 5000ms = 5s
  });



/* END MODAL TIMEOUT */

/* ACTIVE CART */
  document.addEventListener('DOMContentLoaded', function () {
      const btn = document.querySelector('.btnactivemenu');
      const drawer = document.querySelector('.drawer');

      btn.addEventListener('click', function () {
          drawer.classList.toggle('active');
      });
  });
/* END END ACTIVE CART */
/* CART */
$(document).ready(function () {

  // ============================
  // 🚀 Initialization
  // ============================

  CartJS.getCart({
    success: function(data) {
      updateCartCount();
    }
  });

  // ============================
  // 🛒 Add Product to Cart
  // ============================

  $('body').off('click', '.btn-add-cart').on('click', '.btn-add-cart', function (e) {
    e.preventDefault();
    e.stopPropagation(); // ✅ Evita eventos duplicados

    var $btn = $(this);
    var $form = $btn.closest('form');
    var variantId = $form.find('input[name="id"]').val();

    if ($btn.hasClass('add-to-cart')) {
      CartJS.addItem(variantId, 1, {}, {
        "success": function(data) {
          showToast('✅ Product added to cart');
          updateCartDrawer(true); // Open drawer after adding
          updateCartCount();
        },
        "error": function(jqXHR) {
          var errorMsg = '🚫 Error adding product';
          if (jqXHR && jqXHR.responseText) {
            try {
              var response = JSON.parse(jqXHR.responseText);
              errorMsg = response.description || errorMsg;
            } catch (e) {
              console.error("Error parsing response:", e);
            }
          }
          showToast(errorMsg, 'danger');
        }
      });
    } else {
      $btn.attr('data-bs-toggle', 'modal');
    }
  });

  // ============================
  // 🟢 Update Cart Item Count
  // ============================

  function updateCartCount() {
    var itemCount = CartJS.cart.item_count;

    // if (itemCount > 0) {
    //   $('#CartCount').addClass('site-header__cart-bubble--visible');
    //   $('._cart_count_span').text(itemCount);
    // } else {
    //   $('#CartCount').removeClass('site-header__cart-bubble--visible');
    //   $('._cart_count_span').text(0);
    // }
  }

  // ============================
  // 🛠️ Update Cart Drawer
  // ============================

  function updateCartDrawer(openDrawer = false) {
    $.get('/cart', function(data) {
      var cartItems = $(data).find('#CartDrawer-CartItems').html();
      $('#CartDrawer-CartItems').html(cartItems);

      const cartDrawer = document.querySelector('cart-drawer');
      const drawer = document.querySelector('.drawer');
      const cartTotalPrice = $(data).find('.totals__total-value').first().text().trim();

      // Verificar si el carrito tiene productos
      if (CartJS.cart.item_count > 0) {
        $('.drawer__inner-empty').hide();
        $('cart-drawer-items').removeClass('is-empty');
        $('.cart__footer').show();
        drawer.classList.remove('is-empty');
      } else {
        $('.drawer__inner-empty').show();
        $('cart-drawer-items').addClass('is-empty');
        $('.cart__footer').hide();
        drawer.classList.add('is-empty');
      }

      // ✅ Actualizar el precio sin duplicarlo
      $('.totals__total-value').each(function() {
        $(this).empty().text(cartTotalPrice);
      });

      // Abrir el drawer si es necesario
      if (openDrawer) {
        $(drawer).addClass('active');
        $('#CartDrawer-Overlay').addClass('active');
      }

      // ✅ Mantener ícono original del carrito
      const itemCount = CartJS.cart.item_count;
      $('.mega-nav-count .count-items').text(itemCount);
    });
  }

  // ============================
  // ➖➕ Update Product Quantity
  // ============================

  // $('body').off('click', '.quantity__button').on('click', '.quantity__button', function (e) {
  //   e.preventDefault();
  //   e.stopPropagation(); // ✅ Evita propagación

  //   var $btn = $(this);
  //   var $input = $btn.siblings('input.quantity__input');
  //   var currentQty = parseInt($input.val());
  //   var variantId = $input.data('quantity-variant-id');

  //   // ✅ Evitar múltiples clics simultáneos
  //   if ($btn.data('updating')) return;
  //   $btn.data('updating', true);

  //   var increment = parseInt($input.attr('step')) || 1;
  //   var maxQty = parseInt($input.attr('max')) || 9999;

  //   if ($btn.attr('name') === 'plus') {
  //     if (currentQty + increment <= maxQty) {
  //       currentQty += increment;
  //     } else {
  //       showToast(🚫 You can only add up to ${maxQty} of this item., 'danger');
  //       $btn.data('updating', false);
  //       return;
  //     }
  //   } else if ($btn.attr('name') === 'minus' && currentQty - increment >= 1) {
  //     currentQty -= increment;
  //   } else {
  //     showToast('🚫 Quantity cannot be less than 1.', 'danger');
  //     $btn.data('updating', false);
  //     return;
  //   }

  //   CartJS.updateItem(variantId, currentQty, {
  //     "success": function(data) {
  //       showToast('✅ Quantity updated');
  //       updateCartDrawer();
  //       updateCartCount();
  //       $btn.data('updating', false); // ✅ Liberar el bloqueo tras actualizar
  //     },
  //     "error": function(jqXHR) {
  //       var errorMsg = '🚫 Error updating quantity';

  //       if (jqXHR && jqXHR.responseText) {
  //         try {
  //           var response = JSON.parse(jqXHR.responseText);
  //           errorMsg = response.description || errorMsg;
  //         } catch (e) {
  //           console.error("Error parsing response", e);
  //         }
  //       }

  //       showToast(errorMsg, 'danger');
  //       $btn.data('updating', false); // ✅ Liberar en caso de error
  //     }
  //   });
  // });

  // ============================
  // 🗑️ Remove Product from Cart
  // ============================

  $('body').off('click', '.cart-remove-button').on('click', '.cart-remove-button', function (e) {
    e.preventDefault();

    var variantId = $(this).data('variant-id');

    CartJS.removeItem(variantId, {
      "success": function(data) {
        showToast('🗑️ Product removed from cart');
        updateCartDrawer();
        updateCartCount();
      },
      "error": function(jqXHR) {
        var errorMsg = '🚫 Error removing product';

        if (jqXHR && jqXHR.responseText) {
          try {
            var response = JSON.parse(jqXHR.responseText);
            errorMsg = response.description || errorMsg;
          } catch (e) {
            console.error("Error parsing response", e);
          }
        }

        showToast(errorMsg, 'danger');
      }
    });
  });

  // ============================
  // 🟡 Open Cart Drawer on Click
  // ============================

  $('body').on('click', 'form .add-to-cart', function (e) {
    e.preventDefault();
    $('cart-drawer').addClass('active');
    $('#CartDrawer-Overlay').addClass('active');
  });

  // ============================
  // ❌ Close Cart Drawer
  // ============================

  $('#CartDrawer-Overlay').on('click', function () {
    $('cart-drawer').removeClass('active');
    $(this).removeClass('active');
  });

  // ============================
  // 🔔 Show Bootstrap Toasts
  // ============================

  function showToast(message, type = 'success') {
    $('#cartToastMessage').text(message);
    $('#cartToast').removeClass('bg-success bg-danger').addClass('bg-' + type);
    var toast = new bootstrap.Toast(document.getElementById('cartToast'));
    toast.show();
  }

});


(function() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/svg+xml';
  link.rel = 'icon';
  link.href = 'https://cdn.shopify.com/s/files/1/0901/1216/4158/files/chicken.svg?v=1736975863&' + new Date().getTime();
  document.head.appendChild(link);
})();
