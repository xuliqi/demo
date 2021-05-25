
import service from '../service/service'
const { getCodeService } = service

const initState = { count: 1 }

export default {
    namespace: "testModel",
    state: initState,
    subscriptions: {},
    effects: {
        * countIncrease({ payload }, { call, put }) {
            console.log(payload)
            yield put({ type: 'countAdd', payload });
        },

        * getcode({ payload }, { call, put }) {
            const res = yield call(getCodeService, payload)
            console.log("model层的res =>", res)
            return res
        },
    },
    reducers: {
        countAdd(state, { payload }) {
            return { ...state, count: state.count + payload };
        },
    }
}