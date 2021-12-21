import axios from 'axios'

const chunk = require('chunk');

let storageValue
let checkValue = JSON.parse(localStorage.getItem('blocks'))

if (checkValue === null || checkValue === undefined) {
    storageValue = false
} else {
    storageValue = checkValue.BlocksModule.isWebSocketToggleOn
}

const state = {
    isWebSocketToggleOn: storageValue,
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

    getRecentTransactions: state => state.recentTransactions,

    getToggle: state => state.isWebSocketToggleOn,
}
let actions = {}

if (state.isWebSocketToggleOn) {
    actions = {
        fetchNetworkActivity({ commit }) {
            this.$socket.send(JSON.stringify({method: "getNetWorkActivity"}))
            this.$socket.onmessage = (data) => {
                console.log(JSON.parse(data.data))
                commit('setNetworkActivity', JSON.parse(data.data))
            }

        },
        fetchRecentTransactions({ commit }) {
            this.$socket.send(JSON.stringify({method: "getRecentTransactionsFromXChain"}))
            this.$socket.onmessage = (data) => {
                console.log(JSON.parse(data.data))

                let parsedData;

                parsedData = JSON.parse(data.data);
                parsedData.id = `ws${parsedData.id}`
                commit('setRecentTransactions', parsedData)
            }
        },
        fetchRecentTransactionsFromPChain ({ commit }) {
            this.$socket.send(JSON.stringify({method: "getRecentTransactionsFromPChain"}))
            this.$socket.onmessage = (data) => {
                console.log(JSON.parse(data.data))

                let parsedData;

                parsedData = JSON.parse(data.data);
                parsedData.id = `ws${parsedData.id}`
                commit('setRecentTransactions', parsedData)
            }
        },

        fetchTransactionInfoByHash({ commit }, thash) {
            this.$socket.send(JSON.stringify({method: "getTransactionByHash", params: {hash: thash}}))
            this.$socket.onmessage = (data) => {
                console.log(JSON.parse(data.data))

                let parsedData;

                parsedData = JSON.parse(data.data);
                parsedData.id = `ws${parsedData.id}`
                commit('setTransactionInfo', parsedData)
            }
        }
    }
 }
 else {
    actions = {
        fetchNetworkActivity({ commit }) {
            axios.get(`${process.env.VUE_APP_REST_API_URL}/network`)
                .then(response => {
                    console.log(response.data);
                    commit('setNetworkActivity', response.data)
                })
        },
        fetchRecentTransactions ({ commit }) {
            axios.get(`${process.env.VUE_APP_REST_API_URL}/transactions/recentxchain`)
                .then(response => {
                    console.log(response.data);
                    commit('setRecentTransactions', response.data)
                })
        },
        fetchRecentTransactionsFromPChain ({ commit }) {
            axios.get(`${process.env.VUE_APP_REST_API_URL}/transactions/recentpchain`)
                .then(response => {
                    console.log(response.data);
                    commit('setRecentTransactions', response.data)
                })
        },
        fetchTransactionInfoByHash({ commit }, hash) {
            axios.get(`${process.env.VUE_APP_REST_API_URL}/transactions/hash/${hash}`)
                .then(response => {
                    console.log(response.data.result);
                    commit('setTransactionInfo', response.data)
                })
        },
    }
}

// const actions = {

//     // fetchBlocks({ commit, state }) {
//     //     axios.get(`${process.env.VUE_APP_REST_API_URL}/blocks/number/latest/`)
//     //         .then(response => {
//     //             if (state.blocks.length > 6) {
//     //                 commit('clearBlocksArray')
//     //             }
//     //             commit('setStateBlocks', response.data.result)
//     //         })
//     // },
//     // fetchBlockByHash({ commit }, hashPayload) {
//     //     return axios.get(`${process.env.VUE_APP_REST_API_URL}/blocks/hash/${hashPayload}`)
//     //         .then(response => {
//     //             console.log(response.data.result);
//     //             commit('setBlockInfo', response.data.result)
//     //         })
//     // },
//     // fetchBlockByNumber({ commit }, numberPayload) {
//     //     return axios.get(`${process.env.VUE_APP_REST_API_URL}/blocks/number/${numberPayload}`)
//     //         .then(response => {
//     //             console.log(response.data.result);
//     //             commit('setBlockInfoByNumber', response.data.result)
//     //         })
//     // },
//     // fetchTransactionsByBlockHash({ commit }, hashPayload) {
//     //     setTimeout(() => {
//     //         axios.get(`${process.env.VUE_APP_REST_API_URL}/blocks/hash/${hashPayload}`)
//     //         .then(response => {
//     //             console.log(response.data.result.transactions);
//     //             commit('setTransactions', response.data.result.transactions)
//     //     }).catch((error) => {
//     //         console.log(error)
//     //     })}, 1000)
//     // },
//     // fetchTransactionInfoByHash({ commit }, hashPayload) {
//     //     return axios.get(`${process.env.VUE_APP_REST_API_URL}/transactions/hash/${hashPayload}`)
//     //     .then(response => {
//     //         console.log(response.data.result);
//     //         commit('setTransactionInfo', response.data.result)
//     //     })
//     // },
//     // fetchAddressDetails({ commit }, hashPayload) {
//     //     axios.get(`${process.env.VUE_APP_REST_API_URL}/address/hash/${hashPayload}`)
//     //         .then(response => {
//     //             console.log(response.data);
//     //             commit('setAddressDetail', response.data)
//     //         })
//     // },
//     fetchNetworkActivity({ commit }) {
//         axios.get(`${process.env.VUE_APP_REST_API_URL}/network`)
//             .then(response => {
//                 console.log(response.data);
//                 commit('setNetworkActivity', response.data)
//             })
//     },
//     // fetchUnacceptedTransactions({ commit }) {
//     //     axios.get(`${process.env.VUE_APP_REST_API_URL}/transactions/999/999`)
//     //         .then(response => {
//     //             console.log(response.data);
//     //             commit('setUnacceptedTransactions', response.data)
//     //         })
//     // },
//     // fetchTransactionsByAddress ({ commit }, addressHashPayload) {
//     //     axios.get(`${process.env.VUE_APP_REST_API_URL}/transactions/${addressHashPayload}/1/1`)
//     //     .then(response => {
//     //         console.log(response.data);
//     //         commit('setAddressDetail', response.data)
//     //     })
//     // },
//     // fetchRecentTransactions ({ commit }) {
//     //     axios.get(`${process.env.VUE_APP_REST_API_URL}/transactions/recentxchain`)
//     //         .then(response => {
//     //             console.log(response.data);
//     //             commit('setRecentTransactions', response.data)
//     //         })
//     // },
//     // fetchRecentTransactionsFromPChain ({ commit }) {
//     //     axios.get(`${process.env.VUE_APP_REST_API_URL}/transactions/recentpchain`)
//     //         .then(response => {
//     //             console.log(response.data);
//     //             commit('setRecentTransactions', response.data)
//     //         })
//     // }
// }

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
    },
    setToggleState(state, value) {
        state.isWebSocketToggleOn = value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}