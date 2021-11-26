import { useContext } from "react";
import StoreContext from "common/StoreContext";

/**
 * @template {{}} T
 * @param {(state: import("common/StoreContext").StoreState) => T} selector
 */
function useStore(selector = (state) => state) {
  const [state, dispatch] = useContext(StoreContext);
  const selected = selector(state);
  return /** @type {[typeof selected, typeof dispatch]} */ ([
    selected,
    dispatch,
  ]);
}

export default useStore;
