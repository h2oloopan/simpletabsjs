(function($) {
    $.fn.simpleTabs = function(options) {
        var isHidden = false;

        this.addClass("tabs-container");

        var ul = this.find("ul:first");
        var lis = this.find("ul:first li");
        var divs = new Array();

        $(ul).addClass("tabs-navigation");
        $(lis).addClass("tabs-nav-tab");

        var counter = 0;
        for(var i = 0; i < lis.length; i++) {
            var id = $(lis[i]).find("i").attr("data-link");
            $(id).addClass("tabs-content");

            if(i == 0) {
                $(lis[i]).addClass("tabs-tab-active");
            }
            else {
                $(lis[i]).addClass("tabs-tab-inactive");
                $(id).hide();
            }

            if(typeof $(id)[0] !== "undefined") {
                counter++;
                divs.push($(id)[0]);
            }
            else {
                //if a tab has no corresponding div, hide it
                $(lis[i]).hide();
            }
        }

        if(counter == 0) {
            //If no content is present, hide everything, safe keeper
            this.hide();
            return;
        }

        $(lis).click(function() {
            $(lis).removeClass("tabs-tab-active").addClass("tabs-tab-inactive");
            $(this).removeClass("tabs-tab-inactive").addClass("tabs-tab-active");
            var id = $(this).find("i").attr("data-link");
            $(divs).hide();

            if(!isHidden) {
                $(id).show(); //only show a tab if not in hidden mode
            }
            return false;
        });

        //Deal with extra options
        if(options != null) {
            //Set default if not present
            options.enableHideShow = options.enableHideShow == null ? false : options.enableHideShow;

            if(options.enableHideShow) {
                var li = $('<li class="tabs-nav-tab-hs"></li>').appendTo(ul);

                $('<span class="tabs-nav-hs-span">Hide</span><p class="tabs-nav-hs-img tabs-nav-hs-img-min"></p>').click(function() {
                    var li = ul.find(".tabs-nav-tab-hs");
                    var hideShowSpan = $(".tabs-nav-hs-span", li);
                    var hideShowImg = $(".tabs-nav-hs-img", li);

                    var bIsHidden = (hideShowSpan.html() == "Show");
                    if(bIsHidden) {
                        isHidden = false;
                        $(ul.find(".tabs-tab-active i").attr("data-link")).show();
                        hideShowSpan.html("Hide");
                        hideShowImg.removeClass("tabs-nav-hs-img-max").addClass("tabs-nav-hs-img-min");
                    }
                    else {
                        isHidden = true;
                        $(divs).hide();
                        hideShowSpan.html("Show");
                        hideShowImg.removeClass("tabs-nav-hs-img-min").addClass("tabs-nav-hs-img-max");
                    }
                }).appendTo(li);
            }
        }
    }
})(jQuery);