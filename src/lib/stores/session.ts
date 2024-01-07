import { writable } from "svelte/store"

export const authSession = (data = { session: false }) => {
  const { subscribe, set, update } = writable(data);

  return {
    subscribe,
    set,
    update,
  }
}