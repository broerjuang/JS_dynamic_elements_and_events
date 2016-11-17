$(document).ready(() => {
  showAll()
  submitNewTodo()
})


let showAll = () => {
  $.ajax({
    url         : 'http://localhost:3000/api/todos',
    type        : 'GET',
    dataType    : 'JSON',
    contentType : 'application.x-www-form-urlencoded',
    success     : (todo_lists) => {
      console.log(todo_lists);
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

let submitNewTodo = () => {
  $('#createTodo').on('click', (e) => {
    e.preventDefault()
    let data_todo = {
      content : $('#todo_text_datum').val()
    }
    $.ajax({
      url         : 'http://localhost:3000/api/todos',
      type        : 'POST',
      dataType    : 'JSON',
      contentType : 'application/x-www-form-urlencoded',
      data        : data_todo,
      success      : (new_todo) => {
        alert('new_todo')
      }
    })
  })
}
