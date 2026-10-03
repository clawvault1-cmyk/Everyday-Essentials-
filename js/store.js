(function () {
  var checkout = window.EE_CHECKOUT || {};

  function safeHttpUrl(value) {
    if (typeof value !== "string") return "";
    var trimmed = value.trim();
    if (!trimmed) return "";
    try {
      var url = new URL(trimmed);
      if (url.protocol === "https:" || url.protocol === "http:") return url.href;
    } catch (error) {
      return "";
    }
    return "";
  }

  document.querySelectorAll("[data-open]").forEach(function (button) {
    button.addEventListener("click", function () {
      var dialog = document.getElementById(button.getAttribute("data-open"));
      if (dialog && typeof dialog.showModal === "function") dialog.showModal();
    });
  });

  document.querySelectorAll("dialog").forEach(function (dialog) {
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
  });

  document.querySelectorAll("[data-checkout]").forEach(function (link) {
    var href = safeHttpUrl(checkout[link.getAttribute("data-checkout")]);
    var noteId = link.getAttribute("aria-describedby");
    var note = noteId ? document.getElementById(noteId) : null;

    if (href) {
      link.href = href;
      if (note) note.hidden = true;
      link.removeAttribute("aria-describedby");
      return;
    }

    link.addEventListener("click", function (event) {
      event.preventDefault();
      if (note) note.focus();
    });
  });
})();
