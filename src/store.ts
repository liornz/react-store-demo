import { useEffect, useState } from "react";

type Listener = () => void;

function createStore<State extends Record<string, unknown>>(
  initialState: State
) {
  let state = initialState;
  const listeners: Set<Listener> = new Set([]);

  function getState() {
    return state;
  }

  function setState(newState: State) {
    state = newState;
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener: Listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }

  return {
    getState,
    setState,
    subscribe,
  };
}

type StoreState = ReturnType<typeof counterStore.getState>;

const counterStore = createStore({
  value1: 0,
  value2: 0,
});

export const useStore = <T>(
  subscribe: (listener: Listener) => () => void,
  selector: () => T
) => {
  const [state, setState] = useState(selector());
  useEffect(() => subscribe(() => setState(selector())), [selector, subscribe]);
  return state;
};

export default counterStore;
export type { StoreState };
