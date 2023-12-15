import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    authModal: false,
    enUz: false,
    uzEn: false,
  },
  reducers: {
    setAuthModal(state) {
      state.authModal = !state.authModal;
    },
    setEnUzModal(state) {
      state.enUz = !state.enUz;
    },
    setUzEnModal(state) {
      state.uzEn = !state.uzEn;
    },
  },
});

export const { setAuthModal, setEnUzModal, setUzEnModal } = modalSlice.actions;
export default modalSlice.reducer;
