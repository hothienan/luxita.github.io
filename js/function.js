(function($) {
    "use strict";

    // $(function () {
    //     $(".select-custom1").styledUpDropDownList();
    //     $(".select-custom1").change(function () {
    //         console.log("You selected option " + $(this).val());
    //     });
    //
    //     $(".select-custom2").styledUpDropDownList();
    //     $(".select-custom2").change(function () {
    //         console.log("You selected option " + $(this).val());
    //     });
    // });
    //
    //
    // $.fn.styledUpDropDownList = function () {
    //     var originalElement = this;
    //     var newElement = $("<div class='styled-dropdown'></div>");
    //     var paragraphElement = $("<span></span>");
    //     var listElement = $("<ul class='styled-dropdown-list'></ul>");
    //     //set paragraph text to match first option text
    //     paragraphElement.text(originalElement.children("option:selected").text());
    //     newElement.append(paragraphElement);
    //     newElement.css("min-width", originalElement.css("width"));
    //     //hide the list of options when user clicks outside
    //     $("html").click(function(){
    //         paragraphElement.removeClass('active');
    //         listElement.hide();
    //     });
    //     paragraphElement.click(function(event){
    //         paragraphElement.addClass('active');
    //         listElement.toggle();   //show/hide the list of options
    //         event.stopPropagation();    //stop propagation to <html> click event
    //     });
    //     //build a list of options from the original select list options
    //     originalElement.children().each(function (index) {
    //         if (index === 0) return;    //skip first item (assumes it is a 'please select' type placeholder)
    //         var originalItem = $(this);
    //         var newItem = $("<li>" + originalItem.text() + "</li>");
    //         newItem.attr("id", originalItem.val());
    //         newItem.click(function(){
    //             //set the selected option on the original select element
    //             var selectedValue = $(this).attr("id");
    //             var originalOptionToSelect = originalElement.find("option[value='"+selectedValue+"']"); //option to select
    //             originalOptionToSelect.attr("selected", "selected");
    //             originalOptionToSelect.change();    //fire the change event
    //             paragraphElement.text($(this).text());
    //             paragraphElement.removeClass('active');
    //             listElement.hide();
    //         });
    //         listElement.append(newItem);
    //     });
    //     //add class for alternate row styling
    //     listElement.children("li:odd").addClass("odd");
    //     listElement.hide(); //hide options at start
    //     originalElement.hide(); //hide the original select element
    //     newElement.append(listElement);
    //     newElement.insertBefore(originalElement);
    //     return this;
    // };
  

})(jQuery);
