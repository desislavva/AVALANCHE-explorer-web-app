import { mount, shallowMount, createLocalVue } from '@vue/test-utils';

import Home from '../src/pages/Home.vue';
import Main from '../src/pages/Main.vue';
import Pchain from '../src/pages/P-chain.vue';

import NetworkActivity from '../src/components/NetworkActivity.vue';
import Search from '../src/components/SearchBar.vue';
import Table from '../src/components/TransactionsTable.vue';

import Header from '../src/components/TheHeader.vue';
import Footer from '../src/components/TheFooter.vue';

import router from '../src/router/index.js';
const localVue = createLocalVue();


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
