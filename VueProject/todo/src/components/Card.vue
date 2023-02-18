<template>
    <li class="Card">
        <span>
            <input class="checkbox" type="checkbox" :value="done" @click="toggleTodo" :checked="done">
        </span>
        <span :class="{'done': done}" class="title">{{todo.title}}</span>
        <span v-if="done" @click="deleteTodo()" class="material-icons desc">
            close
        </span>
    </li>
</template>

<script>
    import {
        computed
    } from 'vue'
    export default {
        name: 'Card',
        props: {
            todo: {
                type: Object,
                required: true,
            }
        },
        setup(props, context) { // props로 넘긴 데이터느 computed로 래핑하여 받아야함.
            const done = computed(() => props.todo.done)
            return {
                done,
                toggleTodo: () => {
                    const value = {
                        ...props.todo,
                        done: !props.todo.done // 할일을 했는지 안했는지 파악하기 위해 토글 이벤트 구현
                    }
                    context.emit('change', value);
                },
                deleteTodo: () => {
                    context.emit('delete', props.todo.id);
                },
            }
        }
    }
</script>

<style scoped>
</style>