// JavaScript Document
;$(function(){
	'use strict';
	var sidebar=$('#sidebar'),   //选择侧栏
	mask=$('.mask'),
	backButton=$('.top'),
	sidebar_trigger=$('#sidebar_trigger');
	
	function showSideBar(){            //sidebar被点击mask显示
		mask.fadeIn();
		sidebar.css('right',0);
		}
	
	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
		}
		
	sidebar_trigger.on('click',showSideBar) //sidebar被点击mask显示
	mask.on('click',hideSideBar)            //mask被点击sidebar隐藏
	backButton.on('click',function(){
		$('html,body').animate({
			scrollTop:0
			},800)
		}) 
		$(window).on('scroll',function(){
			if($(window).scrollTop()>$(window).height())
			backButton.fadeIn();
			else
			backButton.fadeOut();
			})
			$(window).trigger('scroll');
	})
	
	window.onload = function(){                 //banner的切换显示
        var images = document.getElementsByTagName('h1');
        var pos=0;  
        var len = images.length;  
        setInterval(function(){  
            images[pos].style.display = 'none';  
            pos = ++pos == len ? 0 : pos;  
            images[pos].style.display ='';
            //images[pos].style.width = '100%';  
            //images[pos].style.height = '600px';  
        },3000);  
    };  
	
　wow = new WOW({                          //初始化wow.js
      　　animateClass: 'animated',
      });
      wow.init();