(function($,elementor){"use strict";var chattyElementorFrontend={init:function(){elementor.hooks.addAction('frontend/element_ready/chatty-blog.default',chattyElementorFrontend.initBlog);},initBlog:function($scope){$scope.on('click.chattyElementorFrontend','.posts-load-more-btn',{scope:$scope},chattyElementorFrontend.handleBlogLoadMore);},handleBlogLoadMore:function(event){var $button=$(this),$buttonText=$('.posts-load-more-btn__text',$button),$postsWrapper=$('.posts-list',event.data.scope),buttonTexts=chatty.load_more_args.button_texts,currentPage=parseInt($postsWrapper.data('page'),10),maxPage=parseInt($postsWrapper.data('max-page'),10),data={'action':'chatty_get_blog_listing_posts','chattyPage':currentPage,'chattyPerPage':$postsWrapper.data('per-page'),'chattyWidgetSettings':$postsWrapper.data('settings'),'nonce':chatty.load_more_args.blog_ajax_nonce};if($button.hasClass('processing')){return!1;}
$button.addClass('processing');$postsWrapper.addClass('processing');$buttonText.text(buttonTexts.loading);$.ajax({url:chatty.ajaxurl,data:data,type:'POST',dataType:'json',error:function(){$button.removeClass('processing');$postsWrapper.removeClass('processing');$buttonText.text(buttonTexts.default);},success:function(response){$postsWrapper.append(response.data.posts);if(response.data.has_media&&undefined!==window.wp.mediaelement){window.wp.mediaelement.initialize();}
var popupInitalize=false;if(response.data.has_gallery_post){CherryJsCore.theme_script.post_formats_initalize('slider');CherryJsCore.theme_script.post_formats_initalize('popup');popupInitalize=true;}
if(response.data.has_image_post&&!popupInitalize){CherryJsCore.theme_script.post_formats_initalize('popup');}
$button.removeClass('processing');$postsWrapper.removeClass('processing');$buttonText.text(buttonTexts.default);currentPage++;$postsWrapper.data('page',currentPage);if(currentPage===maxPage){$button.attr('disabled','disabled');$buttonText.text(buttonTexts.none);}}});}};$(window).on('elementor/frontend/init',chattyElementorFrontend.init);}(jQuery,window.elementorFrontend));