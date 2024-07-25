import { DictionaryType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GeneralState {
  dictionary: DictionaryType | null;
  selectedLang: string;
}

const initialState: GeneralState = {
  dictionary: null,
  selectedLang: "en",
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setTranslations(state, action: PayloadAction<DictionaryType>) {
      state.dictionary = action.payload;
    },
    setSelectedLanguage(state, action: PayloadAction<string>) {
      state.selectedLang = action.payload;
    },
  },
});

export const { setTranslations, setSelectedLanguage } = generalSlice.actions;

export default generalSlice;
