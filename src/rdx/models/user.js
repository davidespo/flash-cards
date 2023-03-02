const DEFAULT_STATE = {
  loading: false,
  token: null,
  profile: null,
  error: null,
};

export const user = {
  state: {
    ...DEFAULT_STATE,
  },
  reducers: {
    setLoading(state, loading) {
      return { ...state, loading };
    },
    setUser(state, payload) {
      return {
        loading: false,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    async login(payload) {
      const { strategy } = payload;
      throw new Error(`login not implemented for strategy="${strategy}"`);
    },
    async logout(payload, rootState) {
      throw new Error(`logout not implemented`);
    },
  }),
};
