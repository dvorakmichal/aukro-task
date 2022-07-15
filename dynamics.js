$(document).ready(
    function() {
        function openingFooterMenu(identificator) {
            var btn = "#" + identificator + "-btn";
            var menu = "#" + identificator + "-menu";

            $(btn).click(
                function() {
                    var status = $(menu).css("display");

                    if (status == "none") {
                        $(menu).show();
                    } else {
                        $(menu).hide();
                    }
                }
            );
        }
        openingFooterMenu("about");
        openingFooterMenu("buyers");
        openingFooterMenu("sellers");
        openingFooterMenu("care");

    }
);