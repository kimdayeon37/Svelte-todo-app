<script>
    import { todos, saveStorage } from '~/store'
    import shortid from 'shortid'

    let title = ''

    function createTodo() {
        if(!title || !title.trim()) return //내용이 없을 경우, 양쪽 문자 끝에 있는 공백문자들을 제거하고 나서도 내용이 없을 경우 함수 종료
            
        
        // 새로 생성한 객체 데이터를 앞으로 넣어주고 id 생성
        $todos.unshift({
            id: shortid.generate(),
            title
        })
        // 할당연산자를 사용하여 데이터가 갱신됐을 때 반응성을 가짐
        $todos = $todos
        saveStorage()

        title = ''
        console.log($todos)
    }
</script>

<div class="create-todo">
    <input 
    bind:value={title} 
    type="text" 
    class="form-control"
    on:keyup={ e => {
        if (e.key === "Enter") createTodo()
    }} />
    <button class="btn btn-primary"
    on:click={createTodo}>
    create Todo!
    </button>
</div>

<style lang="scss">
    .create-todo {
        display: flex;
        margin-top: 50px;
        .bin {
            width: 130px;
            height: 50px;
            font-weight: 700;
            margin-left: 10px;
            flex-shrink: 0;
        }
    }
</style>