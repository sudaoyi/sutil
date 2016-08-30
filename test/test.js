var assert=require('assert');
const _=require('../index.js');
describe('sutil',()=>{
	describe('#stringFunction',()=>{
		it('return true',()=>{
			assert.equal(_.fixLength('su',5),'su   ');
		})
	})

})
