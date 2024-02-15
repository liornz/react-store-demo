import type { StoreState } from "../../store";
import store from "../../store";

type Props = {
  item: keyof StoreState;
};

export default function IncrementValue({ item }: Props) {
  return (
    <button
      onClick={() => {
        const state = store.getState();
        store.setState({ ...state, [item]: state[item] + 1 });
      }}
    >
      Increment {item[0].toUpperCase() + item.slice(1)}
    </button>
  );
}
