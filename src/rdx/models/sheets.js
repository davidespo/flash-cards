import { readListsData } from "../../ui/services/sheets";

const sheetModel = (id, title, spreadsheetId, sheetName) => ({
  id,
  title,
  spreadsheetId,
  sheetName,
});

const SHEETS = [
  sheetModel(
    0,
    "Globe Sight Words",
    "1ePibAnYJuyS4mKtBFTqi_O-_rXjiKjeHonBPTASBkgo",
    "globe"
  ),
  sheetModel(
    1,
    "Hank's Lists",
    "1ePibAnYJuyS4mKtBFTqi_O-_rXjiKjeHonBPTASBkgo",
    "words"
  ),
  sheetModel(
    2,
    "Oneida's Lists",
    "1ePibAnYJuyS4mKtBFTqi_O-_rXjiKjeHonBPTASBkgo",
    "basic"
  ),
];

export const sheets = {
  state: {
    loading: false,
    active: SHEETS[0],
    all: SHEETS,
    data: null,
    error: null,
  },
  reducers: {
    setLoading(state, loading) {
      return {
        ...state,
        loading,
      };
    },
    setActive(__, active) {
      return {
        active,
        all: SHEETS,
        data: null,
        error: null,
      };
    },
    setData(state, payload) {
      const { data, error } = payload;
      return {
        ...state,
        loading: false,
        data,
        error,
      };
    },
  },
  effects: (dispatch) => ({
    async selectActiveSheet(newActiveSheet) {
      const { spreadsheetId, sheetName } = newActiveSheet;
      dispatch.sheets.setActive(newActiveSheet);
      dispatch.sheets.setLoading(true);
      let data = null,
        error = null;
      try {
        data = await readListsData(spreadsheetId, sheetName);
      } catch (err) {
        error = err.message;
      }
      dispatch.sheets.setData({ data, error });
    },
    async refreshActiveSheet(__, rootState) {
      const activeSheet = rootState.sheets.active;
      const { spreadsheetId, sheetName } = activeSheet;
      dispatch.sheets.setLoading(true);
      let data = null,
        error = null;
      try {
        data = await readListsData(spreadsheetId, sheetName);
      } catch (err) {
        error = err.message;
      }
      dispatch.sheets.setData({ data, error });
    },
  }),
};
