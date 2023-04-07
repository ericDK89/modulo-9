$(document).ready(() => {
  $("header button").click(() => {
    $("section").slideDown();
  });

  $("section button[type='reset']").click(() => {
    $("section").slideUp();
  });

  $("form").on("submit", (e) => {
    e.preventDefault();
  });
});
