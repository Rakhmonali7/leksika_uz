import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    authModal: false,
  },
  reducers: {
    setAuthModal(state) {
      state.authModal = !state.authModal;
    },
  },
});

export const { setAuthModal } = modalSlice.actions;
export default modalSlice.reducer;
