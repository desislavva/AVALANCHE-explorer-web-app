import { mount } from '@vue/test-utils';
import Home from '../src/pages/Home.vue';
import Pchain from '../src/pages/P-chain.vue';

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
    })
})