/* Author: Jiminy - Alex Jacobsen

*/

(function ($) {

  $(document).ready(function(){


    // Home pages slider
    $('#page-homepage .view-id-home_page_slider .field-content').cycle({
        speed:    400,
        timeout:  8000,
        random: true,
        //prev:  '#cprev',
        //next:  '#cnext',
        //pager:  '#cpager',
        pause:    1,
        fx: 'fade'
    });

    // Register button on Workshop pages
    $(".node-type-vlp-workshop-course .red-register").click( function() {
        $.scrollTo('.views-form', 400);
    });

    $('#block-block-4 .block-title').click( function() {
    
      if($('#block-block-4').height() == '180') {
      
        $('#block-block-4').animate({
          height: '24'
        }, {queue: false, complete: function (){
          $('#block-block-4').removeClass('on');
        }
        });
     
      } else {
      
        $('#block-block-4').animate({
          height: '180'
        });
        
        $('#block-block-4').addClass('on');
      
      }
    

    });
  
    $('.view-display-id-cognition_services > .view-content a').click( function() {
    
      //If the footer isn't visible yet, then show it. This never needs to be hidden again.
      if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
        $('.view-display-id-cognition_services > .view-footer').show();
        $('.view-display-id-cognition_services').addClass('on');
      }
      
      //Get service tab we are working with
      var xclass = $(this).attr('class');
      var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-' + xclass + '_breakdown';
    
      $('.view-display-id-cognition_services > .view-footer > div').hide();
      $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
      var yclass = xclass.replace("_","-");

      $('.region-sidebar-first .block-menu-block ul li a').each( function() {
      
        var xattr = $(this).attr('href');
        
        if (xattr.indexOf(yclass) >= 0) {
        
          $(this).parent().addClass('active-trail');
        
        } else if(yclass == 'teaching-learning') {
        
          $('.region-sidebar-first .block-menu-block ul li.menu-mlid-996').addClass('active-trail');
        
        }

      });
      
      $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
      $(this).parent().addClass('on');
      $(fclass).show();
      
/*
      if($(footerObject).css('display') == 'none') {
        $('.view-display-id-cognition_services > .view-footer').show();
        

      } else {
        
        $(footerObject).hide();

      }
*/
      return false;
      
    });
  
    //Homepage services hover function
    jQuery('.view-display-id-cognition_services_intro > .view-content a').mouseenter( function() {
    
      jQuery('.view-display-id-cognition_services_intro > .view-footer').show();
      jQuery('.view-display-id-cognition_services_intro > .view-footer').html('');
      jQuery('.view-display-id-cognition_services_intro > .view-footer').html('<span class="' + jQuery(this).attr('class') + '">' + jQuery(this).parent().parent().next('.views-field-field-partner-tag-line').children().html() + '</span>');

    });
    
    
      jQuery('.view-display-id-cognition_services_intro > .view-footer').show();
      jQuery('.view-display-id-cognition_services_intro > .view-footer').html('');
      jQuery('.view-display-id-cognition_services_intro > .view-footer').html('<span class="systems-thinking">' + jQuery('.view-display-id-cognition_services_intro > .view-content a:eq(0)').parent().parent().next('.views-field-field-partner-tag-line').children().html() + '</span>');

    
    //START UGLY CODE TO WORK WIT HASHTAGS ON  SERVICES PAGE, COULD IMPLEMENT PLUGIN BUT LITTLE USAGE
    
    if($('body').attr('id') === 'page-services-teaching-and-learning-visible-learning-plus') {
      
      $('.view-display-id-cogserv_teaching_vlp_meet_staff2 .view-content').prepend('<div id="highlight"></div>');
      var content = $('#page-services-teaching-and-learning-visible-learning-plus .field-name-cogserv-vlp-meet-staff-real .view-content .views-field-title:eq(0)').parent().html();
      $('#page-services-teaching-and-learning-visible-learning-plus .field-name-cogserv-vlp-meet-staff-real .view-content .views-field-title:eq(0)').addClass('active');
      $('#page-services-teaching-and-learning-visible-learning-plus #highlight').html(content);
    }
    
    $('#page-services-teaching-and-learning-visible-learning-plus .field-name-cogserv-vlp-meet-staff-real .view-content .views-field-title').click( function() {
      $('#page-services-teaching-and-learning-visible-learning-plus .field-name-cogserv-vlp-meet-staff-real .view-content .views-field-title').removeClass('active');
      $(this).addClass('active');
      var content = $(this).parent().html();
      $('#page-services-teaching-and-learning-visible-learning-plus #highlight').html(content);
    });
      
    
    //START UGLY CODE TO WORK WIT HASHTAGS ON SERVICES PAGE, COULD IMPLEMENT PLUGIN BUT LITTLE USAGE
    
    if($('body').attr('id') === 'page-services') {
      
      if(location.hash === '#evaluation') {

        if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
          $('.view-display-id-cognition_services > .view-footer').show();
          $('.view-display-id-cognition_services').addClass('on');
        }
      
        var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-evaluation_breakdown';
      
        $('.view-display-id-cognition_services > .view-footer > div').hide();
        $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
        $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
        $('.region-sidebar-first .block-menu-block ul li.menu-mlid-997').addClass('active-trail');
        $('.view-display-id-cognition_services > .view-content .views-row.evaluation').addClass('on');
        
        $(fclass).show();
      
      }
      
      if(location.hash === '#systems-thinking') {

        if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
          $('.view-display-id-cognition_services > .view-footer').show();
          $('.view-display-id-cognition_services').addClass('on');
        }
      
        var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-systems_thinking_breakdown';
      
        $('.view-display-id-cognition_services > .view-footer > div').hide();
        $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
        $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
        $('.region-sidebar-first .block-menu-block ul li.menu-mlid-998').addClass('active-trail');
        $('.view-display-id-cognition_services > .view-content .views-row.systems-thinking').addClass('on');
        
        $(fclass).show();
      
      }
      
      if(location.hash === '#schooling') {

        if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
          $('.view-display-id-cognition_services > .view-footer').show();
          $('.view-display-id-cognition_services').addClass('on');
        }
      
        var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-schooling_breakdown';
      
        $('.view-display-id-cognition_services > .view-footer > div').hide();
        $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
        $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
        $('.region-sidebar-first .block-menu-block ul li.menu-mlid-865').addClass('active-trail');
        $('.view-display-id-cognition_services > .view-content .views-row.schooling').addClass('on');
        
        $(fclass).show();
      
      }
      
      if(location.hash === '#teaching-and-learning') {

        if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
          $('.view-display-id-cognition_services > .view-footer').show();
          $('.view-display-id-cognition_services').addClass('on');
        }
      
        var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-teaching_learning_breakdown';
      
        $('.view-display-id-cognition_services > .view-footer > div').hide();
        $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
        $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
        $('.region-sidebar-first .block-menu-block ul li.menu-mlid-996').addClass('active-trail');
        $('.view-display-id-cognition_services > .view-content .views-row.teaching-learning').addClass('on');
        
        $(fclass).show();
      
      }
      
    }
    
    $('body#page-services li.menu-mlid-998 > a').click( function() {
    
        if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
          $('.view-display-id-cognition_services > .view-footer').show();
          $('.view-display-id-cognition_services').addClass('on');
        }
      
        var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-systems_thinking_breakdown';
      
        $('.view-display-id-cognition_services > .view-footer > div').hide();
        $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
        $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
        $('.region-sidebar-first .block-menu-block ul li.menu-mlid-998').addClass('active-trail');
        $('.view-display-id-cognition_services > .view-content .views-row.systems-thinking').addClass('on');
        
        $(fclass).show();
        
        return false;
        
    });
    
    $('body#page-services li.menu-mlid-865 > a').click( function() {

        if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
          $('.view-display-id-cognition_services > .view-footer').show();
          $('.view-display-id-cognition_services').addClass('on');
        }
      
        var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-schooling_breakdown';
      
        $('.view-display-id-cognition_services > .view-footer > div').hide();
        $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
        $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
        $('.region-sidebar-first .block-menu-block ul li.menu-mlid-865').addClass('active-trail');
        $('.view-display-id-cognition_services > .view-content .views-row.schooling').addClass('on');
        
        $(fclass).show();
      
        return false;
      
    });
    
    $('body#page-services li.menu-mlid-996 > a').click( function() {

        if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
          $('.view-display-id-cognition_services > .view-footer').show();
          $('.view-display-id-cognition_services').addClass('on');
        }
      
        var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-teaching_learning_breakdown';
      
        $('.view-display-id-cognition_services > .view-footer > div').hide();
        $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
        $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
        $('.region-sidebar-first .block-menu-block ul li.menu-mlid-996').addClass('active-trail');
        $('.view-display-id-cognition_services > .view-content .views-row.teaching-learning').addClass('on');
        
        $(fclass).show();
      
        return false;
      
    });
    
    $('body#page-services li.menu-mlid-997 > a').click( function() {

        if($('.view-display-id-cognition_services > .view-footer').css('display') == 'none') {
          $('.view-display-id-cognition_services > .view-footer').show();
          $('.view-display-id-cognition_services').addClass('on');
        }
      
        var fclass = '.view-display-id-cognition_services > .view-footer > .view-display-id-evaluation_breakdown';
      
        $('.view-display-id-cognition_services > .view-footer > div').hide();
        $('.view-display-id-cognition_services > .view-content > div').removeClass('on');
        $('.region-sidebar-first .block-menu-block ul li').removeClass('active-trail');
        $('.region-sidebar-first .block-menu-block ul li.menu-mlid-997').addClass('active-trail');
        $('.view-display-id-cognition_services > .view-content .views-row.evaluation').addClass('on');
        
        $(fclass).show();
      
        return false;
      
    });
    
    // END FUGYLY CODE
    
    
    //Expand and collapse box, need to get auto height before expanding.
    $('.view-display-id-cognition_trust_and_beneficaries .views-field-nothing .rm').click( function() {
      
      //Set parent object
      var actionObj = $(this).parent().parent().prev();
      var curHeight = actionObj.height();
      actionObj.css('height', 'auto');
      var autoHeight = actionObj.height();

      actionObj.height(curHeight);
      
      if($(this).hasClass('rl')) {
      
      $(this).removeClass('rl');
      $(this).text('Read more');
      
      actionObj.animate({height: 100}, 1000);
      
      } else {

      $(this).addClass('rl');
      $(this).text('Hide');
      
      actionObj.animate({height: autoHeight}, 1000);
      
      }

      return false;

    });
    
    //Cognition Career Enhance - Expand and collapse box, need to get auto height before expanding.
    $('#page-careers #block-views-f65c5fc5cb3a4a59e8b7fd65d0dfcad2 .views-field-nothing').click( function() {
      
      //Set parent object
      var actionObj = $('#page-careers #block-views-f65c5fc5cb3a4a59e8b7fd65d0dfcad2');
      var curHeight = actionObj.height();
      actionObj.css('height', 'auto');
      var autoHeight = actionObj.height();
      actionObj.height(curHeight);
      
      if($(this).hasClass('rl')) {
      
      $(this).removeClass('rl');
      $(this).text('Read more');
      
      actionObj.animate({height: 126}, 1000);
      
      } else {

      $(this).addClass('rl');
      $(this).text('Hide');
      autoHeight = autoHeight + 10;
      actionObj.animate({height: autoHeight}, 1000);
      
      }

      return false;

    });
    
    //About Us CET
    jQuery('#page-about-cognition-education-trust .field-name-cet-trustees .views-field-body .field-content div').click( function() {
      
      //console.log(jQuery(this).parent().parent());
      jQuery(this).parent().parent().hide();
      jQuery(this).parent().parent().next().show();

    });
    
    //About Us CET
    jQuery('#page-about-cognition-education-trust .field-name-cet-trustees .views-field-body-1 .field-content div').click( function() {
      
      //console.log(jQuery(this).parent().parent());
      jQuery(this).parent().parent().hide();
      jQuery(this).parent().parent().prev().show();

    });
    
    //About Us The Board
    jQuery('#page-about-cognition-education-board .field-name-cognition-people-the-board .views-field-body .field-content div').click( function() {
      
      //console.log(jQuery(this).parent().parent());
      jQuery(this).parent().parent().hide();
      jQuery(this).parent().parent().next().show();

    });
    
    //About Us The Board
    jQuery('#page-about-cognition-education-board .field-name-cognition-people-the-board .views-field-body-1 .field-content div').click( function() {
      
      //console.log(jQuery(this).parent().parent());
      jQuery(this).parent().parent().hide();
      jQuery(this).parent().parent().prev().show();

    });
    
    //Events
    jQuery('#page-events #block-views-d6e8eb56b02713b26a5f9ded384b8234 .views-field-body .field-content div').click( function() {
      
      //console.log(jQuery(this).parent().parent());
      jQuery(this).parent().parent().hide();
      jQuery(this).parent().parent().next().show();

    });
    
    //Events
    jQuery('#page-events #block-views-d6e8eb56b02713b26a5f9ded384b8234 .views-field-body-1 .field-content div').click( function() {
      
      //console.log(jQuery(this).parent().parent());
      jQuery(this).parent().parent().hide();
      jQuery(this).parent().parent().prev().show();

    });
    
    /*
    //News
    jQuery('#page-news #block-views-3f6b3f90118c552d6129f5f4268ba69c .views-field-body .field-content div').click( function() {
      
      //console.log(jQuery(this).parent().parent());
      jQuery(this).parent().parent().hide();
      jQuery(this).parent().parent().next().show();

    });

    //News
    jQuery('#page-news #block-views-3f6b3f90118c552d6129f5f4268ba69c .views-field-body-1 .field-content div').click( function() {
      
      //console.log(jQuery(this).parent().parent());
      jQuery(this).parent().parent().hide();
      jQuery(this).parent().parent().prev().show();

    });
    */
    
    $('#block-views-3257dd87a14cf9bb2240de5a365bc482 .block-title').click( function() {

      $(this).toggleClass('on');
      
      $('.view-display-id-cognition_our_purpose').slideToggle();

    });

    $('#block-views-3257dd87a14cf9bb2240de5a365bc482 .views-field-nothing').click( function() {

      $('.view-display-id-cognition_our_purpose').slideUp();

    });
    
    $('.field-name-cogserv-govern-schoolsupport .block-title').addClass('on');
    $('.view-display-id-cogserv_governance_school_support').slideToggle();

    $('.field-name-cogserv-govern-schoolsupport .block-title').click( function() {

      $(this).toggleClass('on');
      
      $('.view-display-id-cogserv_governance_school_support').slideToggle();

    });

    $('.field-name-cogserv-govern-schoolsupport .views-field-nothing').click( function() {

      $('.view-display-id-cogserv_governance_school_support').slideUp();

    });
    
    $("#page-about .relation .title").tooltip({position:['center', 'left'], offset:[0, -20]});

    
    $('.field-name-cogserv-leadership-approach .field-name-field-title').click( function() {

      $('.view-display-id-cognition_our_purpose').slideUp();

    });
    
    //Our Approach - Services > Schooling > Leadership page
    $('.field-name-cogserv-leadership-approach .field-name-field-title').click( function() {

      $('.field-name-cogserv-leadership-approach .views-row').removeClass('on');
      $('.field-name-cogserv-leadership-approach .field-name-field-title').removeClass('on');
      $(this).addClass('on');
      $(this).parent().parent().parent().parent().addClass('on');
    
      var contents = $(this).next().html();
    
      $('.field-name-cogserv-leadership-approach .view-header').html(contents);

    });    

    $('.field-name-cogserv-leadership-approach .field-name-field-title:eq(0)').addClass('on');
    $('.field-name-cogserv-leadership-approach .views-row:eq(0)').addClass('on');
    $('.field-name-cogserv-leadership-approach .view-header').html($('.field-name-cogserv-leadership-approach .field-name-field-title:eq(0)').next().html());
    $('.field-name-cogserv-leadership-approach .view-header').show();
      
    
    //Our Approach - About page
    $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .field-name-field-title').click( function() {

      $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .views-row').removeClass('on');
      $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .field-name-field-title').removeClass('on');
      $(this).addClass('on');
      $(this).parent().parent().parent().parent().addClass('on');
    
      var contents = $(this).next().html();
    
      $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .view-header').html(contents);
    
      $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .view-header').show();
      
    });    

    $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .field-name-field-title:eq(0)').addClass('on');
    $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .views-row:eq(0)').addClass('on');
    $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .view-header').html($('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .field-name-field-title:eq(0)').next().html());
    $('#block-views-18cadd1d17a0ce56a9f5ea6ad88f914f .view-header').show();
    
    
    //Added tabfoot element which will be populated with content
    $('#page-services-schooling-governance .group-tabs').append('<div id="tabfoot"></div>');
    $('#page-services-schooling-governance .group-tabs .block-title:eq(0)').addClass('on');
    $('#page-services-schooling-governance #tabfoot').html($('#page-services-schooling-governance .group-tabs .block-title:eq(0)').next().html());
    
    $('#page-services-schooling-governance .group-tabs .block-title').click( function() {


      $('#page-services-schooling-governance .group-tabs .block-title').removeClass('on');
      $(this).addClass('on');

      $('#tabfoot').html($(this).next().html());
      
    });
    
    
    $('#page-services-teaching-and-learning-assessment .group-tabs .block-title').click( function() {

      $('#page-services-teaching-and-learning-assessment .group-tabs .block-title').removeClass('on');
      $(this).addClass('on');

      $('#tabfoot').html($(this).next().html());
      
    });
    
    if($('body').attr('id') === 'page-services') {
      
      
      
    }
    
    $('.view-id-universal_cognition_random .field-name-field-title, #block-views-fcc658430f9e91832aab9e483747d55e .field-name-field-title').click( function() {

      if($(this).parent().parent().hasClass('on')) {
      } else {
        $('.view-id-universal_cognition_random .field-name-field-body').hide( 800 );
        $('.view-id-universal_cognition_random li').removeClass('on');
        $(this).parent().parent().addClass('on');
        $(this).next().slideDown();
      }
    
    });
    
    
    $('.view-display-id-cognition_faq_pages .views-field-nothing.rm').live("click", function() {
      
      $(this).removeClass('rm');
      $(this).addClass('rl');
      $('span', this).html('Read less');
      $(this).prev().slideDown();

    });
    
    
    $('.view-display-id-cognition_faq_pages .views-field-nothing.rl').live("click", function() {
    
      $(this).removeClass('rl');
      $(this).addClass('rm');
      $('span', this).html('Read more');
      $(this).prev().slideUp();

    });
    
// Staff page
    
    jQuery('body.page-node-316 .group_people #staffcontrols > div').click( function() {
    
      var curtab = jQuery(this).attr('id');
      
      jQuery('body.page-node-316 .group_people #staffcontrols > div').removeClass('on');
      jQuery(this).addClass('on');

      getTab(curtab);
    
    });
    
    jQuery('body.page-node-316 .group_people .view-id-cognition_staff .view-content .views-field-title').click( function() {
    
      jQuery(this).parent().siblings().children('.views-field-title').removeClass('on');
      jQuery(this).addClass('on');
    
      var person = jQuery(this).parent().html();
      
      var hash = jQuery(this).nextAll('.views-field-php').children('span').text();

      location.hash = hash;
      
      jQuery(this).parent().parent().prev('.view-header').html(person);
      //jQuery('body.page-node-316 .group_people .view-id-cognition_staff .view-header').html(person);
      
      return false;

    });
    
    if(jQuery('body').attr('id') === 'page-careers-current-vacancies') {

      var cssLink = document.createElement("link") 
      cssLink.href = window.location.origin + "/sites/all/themes/cognition/css/global.css"; 
      cssLink.rel = "stylesheet"; 
      cssLink.type = "text/css"; 
      frames[0].document.head.appendChild(cssLink);

      var cssLink2 = document.createElement("link") 
      cssLink2.href = window.location.origin + "/sites/all/themes/cognition/css/career_iframe.css"; 
      cssLink2.rel = "stylesheet"; 
      cssLink2.type = "text/css"; 
      frames[0].document.head.appendChild(cssLink2);

    }
      
    if(jQuery('body').attr('id') === 'page-about-people') {
      
      if(location.hash == "") {
      
        //console.log('empty hash');
      
        getTab('executive-team');
      
      } else {
      
        var selectedperson = location.hash;
        
        selectedperson = selectedperson.slice(1);
        
        selectedperson = "." + selectedperson;

        selectedpersondata = jQuery(selectedperson).html();
        jQuery(selectedperson).children('.views-field-title').addClass('on');
      
        jQuery('body.page-node-316 .group_people > div.special').hide();
        jQuery(selectedperson).parent().prev('.view-header').html(selectedpersondata);
        jQuery(selectedperson).parent().parent().parent().parent().parent().show();
        //jQuery(selectedperson).parent().parent().parent().parent().parent().parent().addClass('xxx');

        if(jQuery(selectedperson).parent().parent().parent().parent().parent().hasClass('field-name-cognition-people-executive')) {
        
          jQuery('#executive-team').addClass('on');
        
        } else if (jQuery(selectedperson).parent().parent().parent().parent().parent().hasClass('field-name-cognition-people-management')) {
        
          jQuery('#senior-managers').addClass('on');
        
        } else if (jQuery(selectedperson).parent().parent().parent().parent().parent().hasClass('field-name-cognition-people-ceo')) {
        
          jQuery('#principal-consultants').addClass('on');
        
        } else if (jQuery(selectedperson).parent().parent().parent().parent().parent().hasClass('field-name-cognition-people-the-team')) {
        
          jQuery('#consultancy').addClass('on');
        
        }


      }
    
    }
    
    function getTab(tab) {
    
      var thetab = '';
      var ph = '#' + tab;
      jQuery('body.page-node-316 .group_people > div.special').removeClass('on');
      jQuery(ph).addClass('on');
      
      switch(tab)
      {
      case 'executive-team':
        thetab = jQuery('body.page-node-316 .group_people > div:eq(1)');
        jQuery('body.page-node-316 .group_people > div:eq(1)').addClass('on');
        break;
      case 'senior-managers':
        thetab = jQuery('body.page-node-316 .group_people > div:eq(2)');
        jQuery('body.page-node-316 .group_people > div:eq(2)').addClass('on');
        break;
      case 'principal-consultants':
        thetab = jQuery('body.page-node-316 .group_people > div:eq(3)');
        jQuery('body.page-node-316 .group_people > div:eq(3)').addClass('on');
        break;
      case 'consultancy':
        thetab = jQuery('body.page-node-316 .group_people > div:eq(4)');
        jQuery('body.page-node-316 .group_people > div:eq(4)').addClass('on');
        break;
      }

      //Check if this tab has any active data, if not, set first set as active.
      if(jQuery(thetab).find('.view-content .on').length == 0) {
        //console.log('yes');
        jQuery(thetab).find('.view-content').find('.views-field-title:eq(0)').addClass('on');
        var newcon = jQuery(thetab).find('.view-content').find('.views-row:eq(0)').html();
        //console.log(newcon);
        jQuery(thetab).find('.view-header').html(newcon);
      
      }
      
      jQuery('body.page-node-316 .group_people > div.special').hide();
      
      jQuery(thetab).show();
    
    }
    
    //End Staff Page

    /* Portfolio Page - Meet the staff view */
    $(".field-name-vlp-meet-staff .view-vlp-staff .meet-staff-link:first").addClass("pink-copy");
    $(".field-name-vlp-meet-staff .view-vlp-staff .view-footer .view-content .views-row:first").css("display", "block");
    $(".field-name-vlp-meet-staff .view-vlp-staff .meet-staff-link").click( function() {
            // Remove the black class from these elements and add to this one.
            $(".field-name-vlp-meet-staff .view-vlp-staff .meet-staff-link").removeClass("pink-copy");
            $(this).addClass("pink-copy");
            // Get the nid and make the full class name of the matching staff panel
            temp = "staff-panel-"+$(this).attr("data-staff-id");
            // Hide all the service panels and show this one
            $(".field-name-vlp-meet-staff .view-vlp-staff .view-footer .view-content .views-row").css("display", "none");
            $(".field-name-vlp-meet-staff .view-vlp-staff .view-footer .view-content ."+temp).css("display", "block");
    });
    
    /* Cognition Workshops View */

    jQuery('.view-id-cognition_workshop_types > .view-content > .views-row').click( function() {

      if (!$(this).hasClass("active")) {

        jQuery('.view-id-cognition_workshop_types > .view-content > .views-row').removeClass('active');

        jQuery(this).addClass('active');

        jQuery('.showflow').hide();

        showview = jQuery(this).children('.views-field-view').children().children('.view').clone();

        showview.css('display', 'block');

        showviewflow = jQuery(this).nextAll('.showflow:eq(0)');

        showviewflow.html('<div class="showflow-background"></div>');

        showviewflow.append(showview);

        showviewflow.slideDown(1000);

      }

      return false;

    });
        
    /*  Services T&L Assessment page. */
    
    if(jQuery('body').attr('id') === 'page-services-teaching-and-learning-assessment') {
      

      //Added tabfoot element which will be populated with content
      if($('#tabfoot').length === 0) {
        $('#page-services-teaching-and-learning-assessment .group-tabs').append('<div id="tabfoot"></div>');
      }              
      
      $('#page-services-teaching-and-learning-assessment .group-tabs .block-title').removeClass('on');
      $('#page-services-teaching-and-learning-assessment .group-tabs .block-title:eq(0)').addClass('on');

      $('#tabfoot').html($('#page-services-teaching-and-learning-assessment .group-tabs .block-title:eq(0)').next().html());
      
      
    }
    
     
    //This code targets the Account information form on the checkout pages.
    if(jQuery('body').hasClass('section-checkout')) {

      if(jQuery('#commerce-checkout-form-checkout').height() > 0) {
      
        jQuery('#commerce-checkout-form-checkout #edit-account-login').prepend('<div class="messages status" style="width: 400px;"><h2 class="element-invisible">Status message</h2>If you already have an account with us, simply enter the registered email address below for the opportunity to login.</div>');
      
      }

    }



  });

})(jQuery);
