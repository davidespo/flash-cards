import persistPlugin from "@rematch/persist";
import { init } from "@rematch/core";
import storage from "redux-persist/lib/storage";
import * as models from "./models";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings", "user"],
  //blacklist, version
};

const store = init({
  plugins: [persistPlugin(persistConfig /*, callback */)],
  models,
});

export default store;
