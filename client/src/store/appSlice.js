import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenAccessibilitySidebar: false,
  accessibility: {
    invertColors: false,
    hideImages: false,
    textSpacing: false,
    pauseAnimation: false,
    biggerText: false,
    lineHeight: false,
  },
  isOpenRequestProposal: false,
  requestProposalInputs: {
    fName: "",
    lName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    projectDetails: "",
    quotes: [],
    calcQuotes: {},
  },
  isOpenChatbot: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsOpenAccessibilitySidebar: (state, { payload }) => {
      state.isOpenAccessibilitySidebar = payload;
    },
    setAccessibility: (state, { payload }) => {
      state.accessibility = payload;
    },
    setIsOpenRequestProposal: (state, { payload }) => {
      state.isOpenRequestProposal = payload;
    },
    setRequestProposalInputs: (state, { payload }) => {
      state.requestProposalInputs = payload;
    },
    setIsOpenChatbot: (state, { payload }) => {
      state.isOpenChatbot = payload;
    },
  },
});

export default appSlice.reducer;
export const {
  setIsOpenAccessibilitySidebar,
  setAccessibility,
  setIsOpenRequestProposal,
  setRequestProposalInputs,
  setIsOpenChatbot,
} = appSlice.actions;
