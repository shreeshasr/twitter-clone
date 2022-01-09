import { configureStore } from "@reduxjs/toolkit";
import tweetsReducer from "./TweetsSlice";

export const store = configureStore({
    reducer: {
        tweetsReducer : tweetsReducer
    }
})