(function($){
    $.fn.simpleTabs = function(){
        var ul = this.find("ul:first");
        var lis = this.find("ul:first li");
        var divs = new Array();

        $(ul).addClass("tabs-navigation");
        $(lis).addClass("tabs-nav-tab");
        
        
        for(var i = 0; i < lis.length; i++){
            var id = $(lis[i]).find("i").attr("data-link");
            $(id).addClass("tabs-content");
            
            if (i == 0) {
                $(lis[i]).addClass("tabs-tab-active");
            }
            else {
                $(lis[i]).addClass("tabs-tab-inactive");
                $(id).hide();
            }
            divs.push($(id)[0]);
        }

        $(lis).click(function(){
            $(lis).removeClass("tabs-tab-active").addClass("tabs-tab-inactive");
            $(this).removeClass("tabs-tab-inactive").addClass("tabs-tab-active");
            var id = $(this).find("i").attr("data-link");
            $(divs).hide();
            $(id).show();
            return false;
        });
    }
})(jQuery);