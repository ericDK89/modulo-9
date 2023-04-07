$(document).ready(() => {
  $("header button").click(() => {
    $("section").slideDown();
  });

  $("section button[type='reset']").click(() => {
    $("section").slideUp();
  });

  $("form").on("submit", (e) => {
    e.preventDefault();

    const imgUrl = $("#add-img-input").val();

    const newLine = $("<li></li>");

    $(`
    <img src="${imgUrl}" />
    <div class="link-div">
      <a
        href="${imgUrl}"
        title="Ver imagem em tamanho real"
        target="_blank"
        >Ver imagem em tamanho real</a
      >
    </div>
    `).appendTo(newLine);

    $(newLine).appendTo("ul");

    $("#add-img-input").val("");
  });
});
