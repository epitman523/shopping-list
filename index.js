//Entering items:
//1. Prevent default submission
//2. Get value of #shopping-list-entry and store as var
//3. Append value to .shopping-list upon submission

//Checking function
//4. Add event listener to .shopping-item-toggle
//5. On click, toggle class .shopping-item__checked

//Remove function
//6. Add click event listener to .shopping-item-delete
//7. On click remove li from list
function shoppingList() {
  $("#js-shopping-list-form").on("submit", function (event) {
    event.preventDefault();
    const newItem = $("#shopping-list-entry").val();
    $(".shopping-list").append(
      '<li><span class="shopping-item">' +
      newItem +
      '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    );
  });
  $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
    $(this).parents('li').find('.shopping-item').toggleClass("shopping-item__checked");
  });

}
$(shoppingList());
