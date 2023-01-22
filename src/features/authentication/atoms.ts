import { atomWithStorage } from "jotai/utils";
import { Admin } from "../../types/Admin";

export const userAtom = atomWithStorage("user", "");
