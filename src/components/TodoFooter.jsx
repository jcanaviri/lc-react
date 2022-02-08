import TodoClearComplete from './TodoClearComplete'
import TodoCompleteAllTodos from './TodoCompleteAllTodos'
import TodoFilters from './TodoFilters'
import TodoItemsRemaining from './TodoItemsRemaining'

export default function TodoFooter({
  remaining,
  completeAllTodos,
  clearComplete,
  todosFiltered,
  filter,
  setFilter
}) {
  

  return (
    <>
      <div className="check-all-container">
        <TodoCompleteAllTodos completeAllTodos={completeAllTodos} />
        <TodoItemsRemaining remaining={remaining} />
      </div>
      <div className="other-buttons-container">
        <TodoFilters
          todosFiltered={todosFiltered}
          filter={filter}
          setFilter={setFilter}
        />
        <TodoClearComplete clearComplete={clearComplete} />
      </div>
    </>
  )
}
