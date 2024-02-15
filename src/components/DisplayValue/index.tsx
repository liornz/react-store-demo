import counterStore, { StoreState, useStore } from "../../store";
import { useSyncExternalStore } from "react";

type Props = {
  item: keyof StoreState;
};

export default function DisplayValue({ item }: Props) {
  const value = useStore(
    counterStore.subscribe,
    () => counterStore.getState()[item]
  );
  // const value = useSyncExternalStore(
  //   counterStore.subscribe,
  //   () => counterStore.getState()[item]
  // );
  return (
    <div>
      {item}: {value}
    </div>
  );
}
