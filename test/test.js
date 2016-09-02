var assert=require('assert');
const _=require('../index.js');
describe('sutil',()=>{
	describe('#stringFunction',()=>{
		it('return true',()=>{
			assert.equal(_.fixLength('su',5),'su   ');
		})
	})

})

describe('sutil',()=>{
	describe('#objFunction',()=>{
		it('return true',()=>{
			assert.equal(_.reduce({x:1},{x:2}),{x:1});
		})
	})

})
describe('sutil',()=>{
	describe('#objFunction',()=>{
		it('return true',()=>{
			assert.equal(_.reduceRight({x:1},{x:2}),{x:2});
		})
	})

})