const DEFAULT_STATE = {};

export const count = {
  state: { ...DEFAULT_STATE },
  reducers: {
    set(state, payload) {
      const { key, value } = payload;
      return {
        ...state,
        [key]: value,
      };
    },
  },
  effects: (dispatch) => ({
    async refreshRemote(payload, rootState) {
      throw new Error("not implemented");
    },
    async saveRemote(payload, rootState) {
      throw new Error("not implemented");
    },
  }),
};
