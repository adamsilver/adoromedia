$.namespace("SF.TreasureRail");

SF.TreasureRail.SizeOverlay = new (function(){

      var anchor, input;
      $(init);

      function init() {
            anchor = $(".sizeAction a");
            $(anchor).bind("click", function(){
                  anchor_onClick();
                  return false;
            });
      }

      function anchor_onClick() {

            var url = $(anchor).attr("href");
            if (url == null) return;

            var actionContainer = $(anchor).parents("p").get(0);
            var overlayLoader = new Salmon.UI.LoadingHtml(actionContainer);
            overlayLoader.show();

            $.ajax({
                  url: url,
                  contentType: "appliction/ajax",
                  success: function(data){
                        Adoro.Dialogue.setHTML(data);
                        Adoro.Dialogue.showDialogue({
                              animateOverlay: true,
                              showOverlay: true,
                              overlayOpacity: ".4",
                              closeOnOverlayClick: false
                        });

                        overlayLoader.hide();
                        SF.SizeSelector.init();
                        SF.ImageRollovers.init();
                        $("#ChooseSize").bind("submit", form_onSubmit);
                        $("#ChooseSize .actions input").bind("click", setInput);
                  }
            });
      }
     
      function form_onSubmit() {
 
            var url = "/webapp/wcs/stores/servlet/TreasureRailChooseSize";
            var data = getData(this);

            $.ajax({
                  url: url,
                  type: "post",
                  data: data,
                  dataType: "json",
                  contentType: "application/x-www-form-urlencoded",
                  success: function(response) {
                        if(response.pageHtml) {
                              Adoro.Dialogue.setHTML(response.pageHtml);
                              Adoro.Dialogue.showDialogue();
                        } else if (response.redirectUrl) {
                              location.href=response.redirectUrl;
                        }
                  }
            });

            return false;
      };

      function setInput() {
        input = $(this).attr("name");
      }

      function getData(theForm) {
        var data = $(theForm).serialize();
        if(input == "saveForSession") {
        	data += "&saveForSession.x=1";
        }
        return data;
      }    
});
 