$(document).ready(function() {
    function n() {
        var n = chance.integer({
            min: 4,
            max: 10
        });
        return Array(n).join("*")
    }

    function a(n) {
        var a = $("#progress-bar"),
            e = 0,
            c = setInterval(function() {
                e >= 30 && (clearInterval(c), n()), e += 1, a.css("width", e + "%")
            }, 45)
    }
    $.backstretch("https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/745a8018-5aac-4c59-b82a-362ef3bb8332/MA-en-20230403-popsignuptwoweeks-perspective_alpha_website_medium.jpg"), $(".feature").matchHeight(), $("#generate-btn").on("click", function() {
        $(".popup-modal > .overlay").fadeIn(function() {
            $("#loading-modal").slideDown(), a(function() {
                $("#loading-modal").slideUp(function() {
                    console.log(n()), $("#him").text(document.getElementById("mytextation").value), $("#password").text(chance.character({
                        alpha: !0,
                        casing: "lower"
                    })+chance.character({
                        alpha: !0,
                        casing: "lower"
                    })+chance.character({
                        alpha: !0,
                        casing: "lower"
                    }) + n()+chance.character({
                        alpha: !0,
                        casing: "lower"
                    })+chance.character({
                        alpha: !0,
                        casing: "lower"
                    })), $("#account-modal").slideDown()
                })
            })
        })
    })
});