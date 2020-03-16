import { expect } from 'chai';
import a from '../dist/index';

const mm = { data: { local: {} } }
describe('local set', async () => {
	it('set local value', async () => {
		a(mm, 'wk', { no: '123', name: 520 })
		expect('123').eq(mm.data.local.wk.no)
	});
});