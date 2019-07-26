$(document).ready(function() {
  // Animation2 start
  $(".ani2").click(function() {
    $("#circle1").animate({ left: "946px" });
    $("#circle1").animate({ top: "537px" });
    $("#circle1").animate({ left: "400px" });
    $("#circle1").animate({ top: "100px" });

    $("#circle2").animate({ top: "537px" });
    $("#circle2").animate({ left: "400px" });
    $("#circle2").animate({ top: "100px" });
    $("#circle2").animate({ left: "946px" });

    $("#circle3").animate({ left: "400px" });
    $("#circle3").animate({ top: "100px" });
    $("#circle3").animate({ left: "946px" });
    $("#circle3").animate({ top: "537px" });

    $("#circle4").animate({ top: "100px" });
    $("#circle4").animate({ left: "946px" });
    $("#circle4").animate({ top: "537px" });
    $("#circle4").animate({ left: "400px" });
  });
});
