    $("header").on("click", "div", function() {
        console.log("sss");
        $("iframe").attr("src", $(this).attr("data-url"));
    });


    
    $(function() {
        $.ajax({
            type: "GET",
            url: 'string.xml',
            dataType: "xml",
            success: function(xml) {
                console.log("yes")
                $(xml).find('site').each(function() {
                    var dataUrl = $(this).find("data-url").text();
                    var imagePreviewSrc = $(this).find("image-preview-src").text();
                    var title = $(this).find("title").text();
                    $("header").append('<div class="item" data-url="' + dataUrl + '"><div class="preview"><img class="image-preview" src="' + imagePreviewSrc + '"></div><h2>' + title + '</h2></div>')
                });
            },
            error: function(xml) {
                console.log("error")
            }
        });
    });