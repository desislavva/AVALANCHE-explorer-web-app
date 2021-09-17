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
    blockInfoByNumber: Object,
    transactions: [],
    transactionInfo: Object,
    addressDetail: [],
    networkActivity: [],
    unacceptedTransactions: [],
    transactionsByAddress: [],
    recentTransactions: []
}

const getters = {
    getLoader: state => state.loader,

    blocksList: state => state.blocks,

    chunkedBlocks: (state) => {
        return chunk(state.blocks.slice(0, 6), 2)
    },

    getBlockInfo: state => state.blockInfo,

    getBlockInfoByNumber: state => state.blockInfoByNumber,

    getTransactions: state => state.transactions,

    getChunkedTransactions: (state) => {
        return chunk(state.transactions, 5)
    },

    getTransactionInfo: state => state.transactionInfo,

    getAddressDetails: state => state.addressDetail,

    getNetworkActivity: state => state.networkActivity,

    getUnacceptedTransactions: state => state.unacceptedTransactions,

    getAddressTransactions: state => state.transactionsByAddress,

    getRecentTransactions: state => state.recentTransactions
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
        return axios.get(`http://localhost:4444/blocks/hash/${hashPayload}`)
            .then(response => {
                console.log(response.data.result);
                commit('setBlockInfo', response.data.result)
            })
    },
    fetchBlockByNumber({ commit }, numberPayload) {
        return axios.get(`http://localhost:4444/blocks/number/${numberPayload}`)
            .then(response => {
                console.log(response.data.result);
                commit('setBlockInfoByNumber', response.data.result)
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
    },
    fetchTransactionsByAddress ({ commit }, addressHashPayload) {
        axios.get(`http://localhost:4444/transactions/${addressHashPayload}/1/1`)
        .then(response => {
            console.log(response.data);
            commit('setAddressDetail', response.data)
        })
    },
    fetchRecentTransactions ({ commit }) {
        axios.get(`http://localhost:4444/transactions/recentxchain`)
            .then(response => {
                console.log(response.data);
                commit('setRecentTransactions', response.data)
            })
    },
    fetchRecentTransactionsFromPChain ({ commit }) {
        axios.get(`http://localhost:4444/transactions/recentpchain`)
            .then(response => {
                console.log(response.data);
                commit('setRecentTransactions', response.data)
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
    },
    clearBlockInfo (state) {
        state.blockInfo = {}
    },
    setBlockInfoByNumber (state, blockInfoByNumber) {
        state.blockInfoByNumber = blockInfoByNumber
    },
    setAddressTransactions (state, addressTransactions) {
        state.transactionsByAddress = addressTransactions
    },
    setRecentTransactions (state, transaction) {
        if (!state.recentTransactions.some(e => e.id === transaction.id)) {
            state.recentTransactions.unshift(transaction)
        }
    }
}

export default {

    state,
    getters,
    actions,
    mutations
}