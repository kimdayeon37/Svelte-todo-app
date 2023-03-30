<script>
    import { todos } from '~/store'
    import CreateTodo from "./components/CreateTodo";
    import Todo from "./components/Todo";

    const storageTodos = localStorage.getItem('todos')
    if(storageTodos) {
        $todos = JSON.parse(storageTodos) // 문자데이터를 배열데이터로 다시 변환해주고 todos데이터에 할당
    }
</script>

<div class="container">
    <CreateTodo />

    <div class="todos">
        {#each $todos as todo (todo.id)}
        <Todo {todo} />

        {/each}
    </div>
</div>

<style lang="scss">
.todos {
    padding: 20px 0;
}
</style>