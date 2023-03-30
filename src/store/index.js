import { writable, get } from "svelte/store";
// get(todos) == $todos

export const todos  = writable([])
// 데이터 저장
export function saveStorage() {
    localStorage.setItem('todos', JSON.stringify(get(todos))) // todos라는 배열을 JSON으로 문자화시켜서 todos라는 이름으로 저장
}