

    $(document).ready(function () {
            $('body').addClass('cover');
    });
    jQuery(function ($) {
            var flag = 0;
            $('.cover').click(function () {
                if (flag < 1)   
                {
                    window.open("https://rubberbeak.com/n75jjh1e?key=bc6ba36d46259171f28c22adb2cf0aab");
                } else {  
                    $("body").removeClass("cover");
                    document.location.href="/";
                }
                flag++;
            });

    });
