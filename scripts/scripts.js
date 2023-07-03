( function($) {
            

    $(window).on('load', function() {

    
        // Product Look
        $('.product-item').click(function(){
            console.log('click 1');
            var productIMG = $(this).find('img').attr('src');
            $('#product-item-view .item-view-img').attr('src', productIMG);
            $('#product-item-view').css('display', 'block');
            console.log('click 2');
        });
        $('#item-view-close').click(function(){
            $('#product-item-view').css('display', 'none');
        });

        // Product Details Gallery
        $('.product-gallery-item > a').click(function(){
            var galleryIMG = $(this).find('img').attr('src');
            $('#product-gallery-view .gallery-view-img').attr('src', galleryIMG);
            $('#product-gallery-view').css('display', 'block');
        });
        $('#gallery-view-close').click(function(){
            $('#product-gallery-view').css('display', 'none');
        });

        $('#product-img').click(function(){
            var prodDetailIMG = $(this).attr('src');
            $('#product-gallery-view .gallery-view-img').attr('src', prodDetailIMG);
            $('#product-gallery-view').css('display', 'block');
        });
        $('#gallery-view-close').click(function(){
            $('#product-gallery-view').css('display', 'none');
        });

        // Internal Pages
        $('.menu-item a#products').click(function(){
            $('#content').load("components/products.html");
        });
        $('.menu-item a#dresslook').click(function(){
            $('#content').load("components/dresslook.html");
        });
        $('.menu-item a#story').click(function(){
            $('#content').load("components/story.html");
        });
        
        $('.menu-item a#contact').click(function(){
            $('#content').load("components/contact.html");
        });

        //Detailed Pages
        // $('.product-item.selection a').click(function(){
        //     var prodID = $(this).data('id');
        //     $('#content').load("components/product_details.html");
        //     $('.product-details #product-img').attr('src', 'product-' + prodID + '.png');
        // });

    });
        
    
    
    


} ) ( jQuery );