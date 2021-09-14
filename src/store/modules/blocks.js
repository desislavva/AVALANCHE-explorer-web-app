import axios from 'axios'

const chunk = require('chunk');

const state = {
    loader: {
        isLoading: false,
        fullPage: true,
        color: '#ff0000'
    },
    blocks: [],
    blockInfo: Object,
    transactions: [],
    transactionInfo: Object,
    addressDetail: [],
    networkActivity: [],
    unacceptedTransactions: []
}

const getters = {
    getLoader: state => state.loader,

    blocksList: state => state.blocks,

    chunkedBlocks: (state) => {
        return chunk(state.blocks.slice(0, 6), 2)
    },

    getBlockInfo: state => state.blockInfo,

    getTransactions: state => state.transactions,

    getChunkedTransactions: (state) => {
        return chunk(state.transactions, 5)
    },

    getTransactionInfo: state => state.transactionInfo,

    getAddressDetails: state => state.addressDetail,

    getNetworkActivity: state => state.networkActivity,

    getUnacceptedTransactions: state => state.unacceptedTransactions
}

const actions = {
    fetchBlocks({ commit, state }) {
        axios.get('http://localhost:4444/blocks/number/latest/')
            .then(response => {
                if (state.blocks.length > 6) {
                    commit('clearBlocksArray')
                }
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
        }).catch((error) => {
            console.log(error)
        })}, 1000)
    },
    fetchTransactionInfoByHash({ commit }, hashPayload) {
        return axios.get(`http://localhost:4444/transactions/hash/${hashPayload}`)
        .then(response => {
            console.log(response.data.result);
            commit('setTransactionInfo', response.data.result)
        })
    },
    fetchAddressDetails({ commit }, hashPayload) {
        axios.get(`http://localhost:4444/address/hash/${hashPayload}`)
            .then(response => {
                console.log(response.data);
                commit('setAddressDetail', response.data)
            })
    },
    fetchNetworkActivity({ commit }) {
        axios.get(`http://localhost:4444/network`)
            .then(response => {
                console.log(response.data);
                commit('setNetworkActivity', response.data)
            })
    },
    fetchUnacceptedTransactions({ commit }) {
        axios.get(`http://localhost:4444/transactions/999/999`)
            .then(response => {
                console.log(response.data);
                commit('setUnacceptedTransactions', response.data)
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
    },
    setAddressDetail (state, addressDetail) {
        state.addressDetail = addressDetail
    },
    setNetworkActivity (state, networkActivity) {
        state.networkActivity = networkActivity
    },
    clearBlocksArray (state) {
        state.blocks.pop()
    },
    setUnacceptedTransactions (state, unacceptedTransactions) {
        state.unacceptedTransactions = unacceptedTransactions
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}