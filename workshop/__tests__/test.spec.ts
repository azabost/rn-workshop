import add from '../src/add'

describe('adding', ()=>{
    
    it('adds two values', ()=>{         
        expect(add(1,2)).toEqual(3)        
    })

})