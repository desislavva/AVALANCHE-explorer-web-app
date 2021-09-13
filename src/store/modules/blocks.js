import axios from 'axios'

const chunk = require('chunk');

const state = {
    blocks: [],
    blockInfo: Object,
    transactions: []
}

const getters = {
    blocksList: state => state.blocks,

    chunkedBlocks: (state) => {
        return chunk(state.blocks.slice(0, 6), 2)
    },

    getBlockInfo: state => state.blockInfo,

    getTransactions: state => state.transactions
}

const actions = {
    fetchBlocks({ commit }) {
        axios.get('http://localhost:4444/blocks/number/latest/')
            .then(response => {
                console.log(response.data.result);
                commit('setStateBlocks', response.data.result)
            })
    },
    fetchBlockByHash({ commit }, hashPayload) {
        axios.get(`http://localhost:4444/blocks/hash/${hashPayload}`)
            .then(response => {
                console.log(response.data.result);
                commit('setBlockInfo', response.data.result)
            })
    },
    fetchTransactionsByBlockHash({ commit }, hashPayload) {
        axios.get(`http://localhost:4444/blocks/hash/${hashPayload}`)
            .then(response => {
                console.log(response.data.result.transactions);
                commit('setTransactions', response.data.result.transactions)
            })
    }
}

const mutations = {
    setStateBlocks (state, blocks) {
        if (!state.blocks.some(e => e.number === blocks.number)) {
            state.blocks.unshift(blocks)
        }
    },
    setBlockInfo (state, blockInfo) {
        state.blockInfo = blockInfo
    },
    setTransactions (state, transactions) {
        state.transactions = transactions
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}