import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

import Home from '../src/pages/Home.vue';
import Main from '../src/pages/Main.vue';
import Pchain from '../src/pages/P-chain.vue';


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

import Vuex from 'vuex';

import router from '../src/router/index.js';
const localVue = createLocalVue();
localVue.use(Vuex)

const store = new Vuex.Store({
   
    state: {
       
        blockInfo:{
            number: 25,
            size: 1024,
            parentHash: 'hash',
            gasUsed: 50,
            gasLimit: 100
        },
        addressDetail: {
            balance: 100000000,
            asset: 'P'
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
                value: 100
          },
          {
            hash:'0x2bd8e867d0b96bc8298c3cc1e1e976a36f82c70dc9e961088b73b15abc0dcbcb',
            from: 'adr1',
            to: 'adr2',
            blockHash: 'hhhhhhhhh',
            value: 100
      }
        ]
    
    }
    ,  
    getters: {
        getBlockInfo: (state) => state.blockInfo,
        getAddressDetails: (state) => state.addressDetail,
        getTransactionInfo: (state) => state.transactionInfo,
        getTransactions: state => state.transactions,
        getChunkedTransactions: (state) => state.transactions,
        getAddressTransactions: state => state.transactions,
        getRecentTransactions: state => state.transactions
    }
  })



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

describe('Does the AddressDetails component work?', () => {
    it('Should display info.', () => {

        
        const wrapper = shallowMount(AddressDetails, {
            propsData: {
                addressHash: 'P-avax1g8g57pnafnzsqwceyg2thkn90sq0uet62exszs'
            },
             store, localVue 
        });

        const div = wrapper.find('div');
        expect(div.text()).toContain('1');
        
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
        
    });
});