import { atomWithStorage } from "jotai/utils";

export const user = atomWithStorage("user", {
    data: null,
    lgogedIn: false
})