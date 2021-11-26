import { createContext } from "react";

/**
 * @type {import("react").Context<[StoreState, import("react").Dispatch<any>]>}
 */
const StoreContext = createContext(null);

export default StoreContext;

/**
 * @typedef  {{
 * theme: 'dark'| 'light' | 'media';
 * accessToken: string
 * }} StoreState
 */
