import axios from 'axios'

const chunk = require('chunk');

const state = {
    loader: {
        isLoading: false,
        fullPage: true
    },
    blocks: [],
    blockInfo: Object,
    transactions: [],
    transactionInfo: Object
}

const getters = {
    getLoader: state => state.loader,

    blocksList: state => state.blocks,

    chunkedBlocks: (state) => {
        return chunk(state.blocks.slice(0, 6), 2)
    },

    getBlockInfo: state => state.blockInfo,

    getTransactions: state => state.transactions,

    getTransactionInfo: state => state.transactionInfo
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
        setTimeout(() => {
            axios.get(`http://localhost:4444/blocks/hash/${hashPayload}`)
            .then(response => {
                console.log(response.data.result.transactions);
                commit('setTransactions', response.data.result.transactions)
            })
        }, 1000);
    },
    fetchTransactionInfoByHash({ commit }, hashPayload) {
        return axios.get(`http://localhost:4444/transactions/hash/${hashPayload}`)
        .then(response => {
            console.log(response.data.result);
            commit('setTransactionInfo', response.data.result)
        })
    }
}

const mutations = {
    setLoaderState(state, propState) {
        state.loader.isLoading = propState
    },
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
    },
    setTransactionInfo (state, transaction) {
        state.transactionInfo = transaction
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}