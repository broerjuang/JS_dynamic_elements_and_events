$(document).ready(() => {
  const api = `http://localhost:3000/api`,

// ----------------------------------------------------------------
// Energize!
// ----------------------------------------------------------------

// get all todos
  showAll()


})


// $(document).ready(() => {
//   showAll()
// })
//
// // showing all todos data from database
//
let showAll = () => {
  $.ajax({
    url         : 'http://localhost:3000/api/todos',
    type        : 'POST',
    dataType    : 'JSON',
    contentType : 'application.x-www-form-urlencoded',
    success     : (todo_lists) => {
      let todo_datum =''
      for(var i = 0; i < todo_lists.length; i += 1) {
        todo_datum += `
        <form action="post">
            <div class="row">
              <div class='detail ten columns'>
                <input type="checkbox" name="vehicle" value="Bike"><span>
                  ${todo_lists[i].content}
                </span><br>
              </div>
              <div class="two columns delete">
                x
              </div>
            </div>
        </form>`
      }
      $('.todo_detail').append(todo_datum)
    }
  })
}


// create new todo list
