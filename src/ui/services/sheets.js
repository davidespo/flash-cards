import axios from "axios";
import store from "../../rdx/store";

export const readListsData = async (spreadsheetId, sheetName) => {
  if (!spreadsheetId || !sheetName) {
    const state = store.getState();
    spreadsheetId = state.sheets.active.spreadsheetId;
    sheetName = state.sheets.active.sheetName;
  }
  const res = await axios({
    url: "https://us-central1-sheets-stack.cloudfunctions.net/api/listdb/read",
    params: {
      spreadsheetId,
      sheetName,
    },
  });
  res.data.forEach((item, i) => (item._i = i));
  return res.data;
};

const CACHE = {
  meta: {},
};

export const cachedReadListData = (spreadsheetId, sheetName) => {
  if (!CACHE.promise) {
    CACHE.promise = readListsData(spreadsheetId, sheetName);
  }
  return CACHE.promise;
};

export const readSheetMeta = async (spreadsheetId = DEFAULT_SPREADSHEET_ID) => {
  if (!spreadsheetId) {
    const state = store.getState();
    spreadsheetId = state.sheets.active.spreadsheetId;
  }

  const res = await axios({
    url: "https://us-central1-sheets-stack.cloudfunctions.net/api/listdb/meta",
    params: {
      spreadsheetId,
    },
  });
  return res.data;
};

export const cachedReadSheetMeta = (spreadsheetId) => {
  if (!CACHE.meta[spreadsheetId]) {
    CACHE.meta[spreadsheetId] = readSheetMeta(spreadsheetId);
  }
  return CACHE.meta[spreadsheetId];
};
