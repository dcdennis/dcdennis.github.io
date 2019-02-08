function makeWords() {
  var words = [
    {
      text: "html5",
      weight: 12.3
    },
    {
      text: "css3",
      weight: 12.5
    },
    {
      text: "javascript",
      weight: 13
    },
    {
      text: "ReactJS",
      weight: 12
    },
    {
      text: "programming",
      weight: 10
    },
    {
      text: "python",
      weight: 10
    },
    {
      text: "java",
      weight: 9
    },
    {
      text: "nodejs",
      weight: 11
    },
    {
      text: "npm",
      weight: 9
    },
    {
      text: "web development",
      weight: 10
    },
    {
      text: "C",
      weight: 8.3
    },
    {
      text: "Scala",
      weight: 8.1
    },
    {
      text: "Semantic UI",
      weight: 7.8
    },
    {
      text: "hadoop",
      weight: 8.5
    },
    {
      text: "JSP",
      weight: 10
    },
    {
      text: "ASP.NET MVC 2",
      weight: 7
    },
    {
      text: "C++",
      weight: 8
    },
    {
      text: "express",
      weight: 9
    },
    {
      text: "C#",
      weight: 8.9
    },
    {
      text: "responsive design",
      weight: 10
    },
    {
      text: "Angular",
      weight: 10
    }
    /* ... */
  ];
  return words;
}

function makeWordCloud(words) {
  $(".domains").jQCloud(words, { delay: 150 });
}

function displayWordCloud() {
  var count = 1;
  $(window).on("scroll", function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 2700; // set to whatever you want it to be
    var words = makeWords();
    if (y_scroll_pos > scroll_pos_test && count <= 1) {
      makeWordCloud(words);
      count++;
    }
  });
}

function designForm() {
  $("#my-modal form").addClass("my-form");
}

$(document).ready(function() {
  Typed.new("#writing-text", {
    strings: [
      "am a Full-Stack Web Developer.",
      "love to code.",
      "solve problems.",
      "provide solutions"
    ],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 1,
    contentType: "text",
    callback: function() {
      $("#writing-text").css({ color: "#fff", "background-color": "#C8412B" });
    },
    preStringTyped: function() {},
    onStringTyped: function() {}
  });

  displayWordCloud();
});

$(function() {
  var fileName = "DEVIN DENNIS RESUME.pdf";
  $("#btnShow").click(function() {
    $("#dialog").dialog({
      modal: true,
      title: fileName,
      width: 768 /** 540 */,
      height: 768 /** 450 */,
      buttons: {
        Close: function() {
          $(this).dialog("close");
        }
      },
      open: function() {
        var object =
          '<object data="{FileName}" type="application/pdf" width="725px" height="750px">';
        object +=
          'If you are unable to view file, you can download from <a href = "{FileName}">here</a>';
        object +=
          ' or download <a target = "_blank" href = "http://get.adobe.com/reader/">Adobe PDF Reader</a> to view the file.';
        object += "</object>";
        object = object.replace(/{FileName}/g, "assets/files/" + fileName);
        $("#dialog").html(object);
      }
    });
  });
});
