import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./Slice"
 export const store = configureStore({
    reducer: {
        counter:myreducer
    },
});

