// Swtich Button (light and dark theme)

let switchMode = document.getElementById("SwitchMode");

SwitchMode.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "./css/apple.css") {
    theme.href = "./css/dark-mode.css";
  } else {
    theme.href = "./css/apple.css";
  }
};

// Scroll Animation

$(document).on("click", 'a[href^="#header"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    800
  );
});

$(document).on("click", 'a[href^="#choose"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1200
  );
});

$(document).on("click", 'a[href^="#services"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

$(document).on("click", 'a[href^="#comments"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    800
  );
});

// hidden exlusive

$(document).ready(function () {
  let hiddenRow = $(".expandable");
  $(".expand-btn").click(function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
      // Видимый ли  этот элемент
      $(".expand-btn").html("Закрыть");
    } else {
      $(".expand-btn").html("Специально для ваc");
    }
  });
});
