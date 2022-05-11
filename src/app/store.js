import { configureStore } from "@reduxjs/toolkit";
import contractSlice from "./contractSlice";

export const store = configureStore({
  reducer: contractSlice,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["contract/createContract"],
        ignoredPaths: ["provider", "mainContract", "secondContract"],
      },
    }),
});
