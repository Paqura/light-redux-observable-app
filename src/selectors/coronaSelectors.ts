import { RootState } from "../redux/store";

export const selectCorona = (state: RootState) => state.corona;
export const selectCoronaData = (state: RootState) => selectCorona(state).data;