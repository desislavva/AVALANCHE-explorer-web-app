import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

import Home from '../src/pages/Home.vue';
import Main from '../src/pages/Main.vue';
import Pchain from '../src/pages/P-chain.vue';
import CChain from '../src/pages/C-chain.vue';
import XChain from '../src/pages/X-chain.vue';
import Address from '../src/pages/Address.vue';
import Block from '../src/pages/Block.vue';
import Transaction from '../src/pages/Transaction.vue';

import NetworkActivity from '../src/components/NetworkActivity.vue';
import Search from '../src/components/SearchBar.vue';
import Table from '../src/components/TransactionsTable.vue';

import Header from '../src/components/TheHeader.vue';
import Footer from '../src/components/TheFooter.vue';

import Pagination from '../src/components/Pagination.vue';
import BlockDetails from '../src/components/BlockDetails.vue';
import AddressDetails from '../src/components/AddressDetails.vue';
import TransactionDetails from '../src/components/TransactionDetails.vue';
import TransactionsTable from '../src/components/TransactionsTable.vue';
import Assets from '../src/components/AssetsTable.vue';
import BlocksTable from '../src/components/BlocksTable.vue';

import UnacceptedTransactionsTable from '../src/components/UnacceptedTransactionsTable.vue';

import Vuex from 'vuex';

import router from '../src/router/index.js';
const localVue = createLocalVue();
localVue.use(Vuex)

const store = new Vuex.Store({
   
    state: {
        loader: {
            isLoading: false,
            fullPage: true,
            color: '#ff0000'
        },
        blockInfo: {
            number: 25,
            size: 1024,
            parentHash: 'hash',
            gasUsed: 50,
            gasLimit: 100
        },
        addressDetail: {
            balance: 100000000,
            asset: 'P',
            assetID: 1
        },
        transactionInfo:{
              hash:'0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
              from: 'adr1',
              to: 'adr2',
              blockHash: 'hhhhhhhhh',
              value: 100
        },
        transactions:[
           {
                hash:'0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
                from: 'adr1',
                to: 'adr2',
                blockHash: 'hhhhhhhhh',
                value: 100,
                id:1
          },
          {
            hash:'0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
            from: 'adr1',
            to: 'adr2',
            blockHash: 'hhhhhhhhh',
            value: 100,
            id:2
          }
        ],
        blocks:[[
            {
                hash:'0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
                from: 'adr1',
                to: 'adr2',
                blockHash: 'hhhhhhhhh',
                value: 100,
                id:1,
                number: 104
          },{
            hash:'0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
            from: 'adr1',
            to: 'adr2',
            blockHash: 'hhhhhhhhh',
            value: 100,
            id:2,
            number: 103
      }
        ],[
            {
                hash:'0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
                from: 'adr1',
                to: 'adr2',
                blockHash: 'hhhhhhhhh',
                value: 100,
                id:1,
                number: 102
          },{
            hash:'0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
            from: 'adr1',
            to: 'adr2',
            blockHash: 'hhhhhhhhh',
            value: 100,
            id:2,
            number: 101
      }
        ]],
        addressDetails:[
            {
                balance: 100000000,
                asset: 'P',
                assetID: 1,
                name:'P chain',
                symbol: 'X'
            },
            {
                balance: 200000000,
                asset: 'X',
                assetID: 2,
                name:'X chain',
                symbol: 'X'
            }
        ],
        loader: {
            isLoading: false,
            fullPage: true,
            color: '#ff0000'
        },
        networkActivity:[
            '123546789','1234567','6568798','132456'
        ]
    
    }
    ,  
    getters: {
        getBlockInfo: (state) => state.blockInfo,
        getAddressDetails: (state) => state.addressDetails,
        getTransactionInfo: (state) => state.transactionInfo,
        getTransactions: (state) => state.transactions,
        getChunkedTransactions: (state) => state.transactions,
        getAddressTransactions: (state) => state.transactions,
        getRecentTransactions: (state) => state.transactions,
        blocksList: (state) => state.blocks,
        chunkedBlocks: (state) =>state.blocks,
        getUnacceptedTransactions: state => state.transactions,
        getLoader: state => state.loader,
        getNetworkActivity: state => state.networkActivity,
        getBlockInfoByNumber: state => state.blockInfo
    },
    actions:{
        fetchBlocks(){},
        fetchUnacceptedTransactions(){},
        fetchAddressDetails(){},
        fetchNetworkActivity(){},
        fetchTransactionInfoByHash(){},
        fetchBlockByHash({ commit }, hashPayload) {
            if(hashPayload===0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb){
                commit('setBlockInfo', null);
            }
        },
        fetchBlockByNumber(){}
    },
    mutations:{
        setLoaderState(state, propState) {
            state.loader.isLoading = propState
        },
        setBlockInfo (state, blockInfo) {
            state.blockInfo = blockInfo
        },
        clearBlockInfo (state) {
            state.blockInfo = {}
        }
    }
  })

  afterEach(() => {
    jest.useRealTimers();
   
  });

jest.mock("vue-loading-overlay/dist/vue-loading.css", () => jest.fn());

describe('Home', () => {
    it('has data', () => {
        expect(typeof Home.data).toBe('function');
    });
});

describe('Pchain', () => {
    it('should pass placeholder text value', () => {
        const wrapper = mount(Pchain);

        wrapper.setData({ searchBarPlaceholderText: 'txhash' });

        expect(wrapper.vm.searchBarPlaceholderText).toMatch('txhash');
    });
});

describe('CChain', () => {
    it('should pass placeholder text value', () => {
        const wrapper = shallowMount(CChain);

        wrapper.setData({ searchBarPlaceholderText: 'txhash' });

        expect(wrapper.vm.searchBarPlaceholderText).toMatch('txhash');
    });
});

describe('CChain: contains blocksTable child component', () => {
    it('should pass placeholder text value', () => {
        const wrapper = shallowMount(CChain);

        expect(wrapper.findComponent(BlocksTable).exists()).toBe(true);
    });
});

describe('CChain: contains transactionsTable child component', () => {
    it('should pass placeholder text value', () => {
        const wrapper = shallowMount(CChain);

        expect(wrapper.findComponent(TransactionsTable).exists()).toBe(true);
    });
});

describe('CChain: contains UnacceptedTransactionsTable child component', () => {
    it('should pass placeholder text value', () => {
        const wrapper = shallowMount(CChain);

        expect(wrapper.findComponent(UnacceptedTransactionsTable).exists()).toBe(true);
    });
});

describe('XChain', () => {
    it('should pass placeholder text value', () => {
        const wrapper = shallowMount(XChain);

        wrapper.setData({ searchBarPlaceholderText: 'txhash' });

        expect(wrapper.vm.searchBarPlaceholderText).toMatch('txhash');
    });
});

describe('XChain: contains transactionsTable child component', () => {
    it('should pass placeholder text value', () => {
        const wrapper = shallowMount(XChain);

        expect(wrapper.findComponent(TransactionsTable).exists()).toBe(true);
    });
});

describe('Address page: test', () => {
    it ('Should test', () => {
        jest.useFakeTimers();
        router.push({name: 'Address', params: {addressHash: 'X-avax1g8g57pnafnzsqwceyg2thkn90sq0uet62exszs'}});

        const wrapper = shallowMount(Address, {
           router,
             store, localVue 
        });
        jest.advanceTimersByTime(2000);

       
        wrapper.destroy();
    });
});

describe('Is Home component a vue instance & mounted', () => {
        it('Should be a Vue instance and mounted', () => {
            const wrapper = shallowMount(Home);

            expect(wrapper.vm).toBeTruthy();
            expect(wrapper.vm.isMounted).toBe(true);
        });
});

// Since NetworkActivity is dependant on a mounted() lifehook, it will not be mounted on the first render
describe('Does network component exist as a child component for Home', () => {
    it('Should NOT exist as a child component', () => {
        const wrapper = shallowMount(Home);

        expect(wrapper.findComponent(NetworkActivity).exists()).toBe(false);
    });
});

describe('Does search component exist as a child component for Home', () => {
    it('Should exist as a child component', () => {
        const wrapper = shallowMount(Home);

        expect(wrapper.findComponent(Search).exists()).toBe(true);
    });
});

describe('Does tx table exist as a child component for Home', () => {
    it('Should exist as a child component', () => {
        const wrapper = shallowMount(Home);

        expect(wrapper.findComponent(Table).exists()).toBe(true);
    });
});

describe('Does main page contain Header component', () => {
    it('Should have a Header component', () => {
        const wrapper = shallowMount(Main, {
            localVue,
            router
        });

        expect(wrapper.findComponent(Header).exists()).toBe(true);
    });
});

describe('Does main page contain Footer component', () => {
    it('Should have a Footer component', () => {
        const wrapper = shallowMount(Main, {
            localVue,
            router
        });

        expect(wrapper.findComponent(Footer).exists()).toBe(true);
    });
});

describe('Does the Block component work?', () => {
    it('Should display info.', () => {

        
        const wrapper = shallowMount(BlockDetails, {
            
             store, localVue 
        });

        const div = wrapper.find('div');
        expect(div.text()).toContain('25');
        
    });
});

describe('Test Block page', () => {
    it('Should display info.', () => {
        router.push({name: 'Block', params: {hash: '0xsa61d5adw3a15w42a',pageNumber: 2}});
        
        const wrapper = shallowMount(Block, {
            
             store, localVue ,router
        });

        const div = wrapper.find('div');
        expect(div.text()).toContain('Block Transactions');
        
    });
});

describe('Test Transaction page', () => {
    it('Should display info.', () => {
        router.push({name: 'Transaction', params: {transactionHash: '0xsa61d5adw3a15w42a'}});
        
        const wrapper = shallowMount(Transaction, {
            
             store, localVue ,router
        });

        const div = wrapper.find('div');
        expect(wrapper.findComponent(TransactionDetails).exists()).toBe(true);
      
        
    });
});

describe('Test Home page', () => {
    it('Should display info.', () => {
        jest.useFakeTimers();
        
        const wrapper = shallowMount(Home, {
            
             store, localVue ,router
        });
        jest.advanceTimersByTime(2000);
        const div = wrapper.find('div');
       
       expect(div.text()).toContain('Recent Transactions');
       wrapper.destroy();
    });
});

describe('Does the AddressDetails component work?', () => {
    it('Should display info for P-chain.', async () => {

        
        const wrapper = shallowMount(AddressDetails, {
            propsData: {
                addressHash: 'P-avax1g8g57pnafnzsqwceyg2thkn90sq0uet62exszs'
            },
             store, localVue 
            
        });
        const div = wrapper.find('div');
        expect(div.text()).toContain('P-avax1g8g57pnafnzsqwceyg2thkn90sq0uet62exszs');
       
       await wrapper.setProps({ addressHash: '0xavax1g8g57pnafnzsqwceyg2thkn90sq0uet62exszs' });
       
       await wrapper.setProps({ addressHash: 'X-avax1g8g57pnafnzsqwceyg2thkn90sq0uet62exszs' });
  
        
    });
});

describe('Does the TransactionDetails component work?', () => {
    it('Should display info.', () => {

        
        const wrapper = shallowMount(TransactionDetails, {
            propsData: {
                transactionHash: '0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb'
            },
             store, localVue 
        });
        const div = wrapper.find('div');
        expect(div.text()).toContain('adr1');
       


    
        
    });
});

describe('Does the TransactionsTable component work?', () => {
    it('Should display info.', () => {

       
          

          router.push({name: 'Block', params: {hash: 'aaaaaa',pageNumber: 1}});

        const wrapper = shallowMount(TransactionsTable, {
            propsData: {
                
                hash: '0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
                RouteType: 'C',
                addressHashType: '',
                parentComponent: ''

            },
             store, localVue ,
            router
            
        });

        const table = wrapper.find('table');
        expect(table.text()).toContain('C');
        wrapper.destroy();
    });
});



describe('Does the Pagination component work?', () => {
    it('Should display pages.', async () => {

       
          

          router.push({name: 'Block', params: {hash: 'aaaaaa',pageNumber: 2}});

        const wrapper = shallowMount(Pagination, {
            propsData: {
                
                totalRecords:100,
                pages: 10

            },
             store, localVue ,
            router
            
        });
        await wrapper.find('button').trigger('click');
        const span = wrapper.find('span');
        expect(span.text()).toContain('1');
        await wrapper.find('button').trigger('click');
        expect(span.text()).toContain('0');
        await wrapper.findAll('button').at(1).trigger('click');
        expect(span.text()).toContain('1');
        
        
    });
});


describe('Does the BlocksTable component work?', () => {
    it('Should display info.', async () => {
        jest.useFakeTimers();
        const wrapper = shallowMount(BlocksTable, {
            
             store, localVue ,
            router
            
        });
        jest.advanceTimersByTime(2000);
        const table = wrapper.find('table');
        expect(table.text()).toContain('0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb');
        wrapper.destroy();
        
    });
});

describe('Does the UnacceptedTransactionsTable component work?', () => {
    it('Should display info.', async () => {
        jest.useFakeTimers();
        const wrapper = shallowMount(UnacceptedTransactionsTable, {
            
             store, localVue ,
            router
            
        });
        jest.advanceTimersByTime(2000);
        const table = wrapper.find('table');
        expect(table.text()).toContain('0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb');
        wrapper.destroy();
        
    });
});


describe('Does the AssetsTable component work?', () => {
    it('Should display info.',  () => {
        
        const wrapper = shallowMount(Assets, {
            
             store, localVue ,
            router
            
        });
        
        const table = wrapper.find('table');
        expect(table.text()).toContain('X chain');
        
        
    });
});

describe('Does the NetworkActivity component work?', () => {
    it('Should display info.',  () => {
        jest.useFakeTimers();
        const wrapper = shallowMount(NetworkActivity, {
            
             store, localVue ,
            router
            
        });
        jest.advanceTimersByTime(2000);
        const h1 = wrapper.find('h1');
        expect(h1.text()).toContain('12354678');
        wrapper.destroy();
        
    });
});

describe('Does the Search component work?', () => {
    it('Should push router.', async () => {
        
        const wrapper = shallowMount(Search, {
            
             store, localVue ,
            router
            
        });
        
        const search = wrapper.find('input');
        await search.setValue('65164687');
        await search.trigger('keyup.enter');
        expect(wrapper.vm.$route.name).toBe('Block');


        await search.setValue('0x6516468732423');
        await search.trigger('keyup.enter');
        expect(wrapper.vm.$route.name).toBe('Address');

        await search.setValue('P-6516468732423');
        await search.trigger('keyup.enter');
        expect(wrapper.vm.$route.name).toBe('Address');

        await search.setValue('0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb');
        await search.trigger('keyup.enter');
        expect(wrapper.vm.$route.name).toBe('Address');




       
        
        
    });
});


