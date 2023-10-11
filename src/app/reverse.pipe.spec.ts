import { TestBed } from '@angular/core/testing';
import { ReversePipe } from './reverse.pipe';

describe("this is the example of the test suite", () => {
  let pipe:ReversePipe
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers:[ReversePipe],
      imports:[]
    })
    pipe = TestBed.inject(ReversePipe)
    /* pipe = new ReversePipe(); */
  })

  it("first", () => {
    expect(pipe).toBeTruthy();
  });
  it("second", () => {
    const data = "hello";
    const result = pipe.transform(data)
    expect(result).toBe("olleh")
  });
  it("third", () => {
    const data = '' ;
    const result = pipe.transform(data)
    expect(result).toBe("")
  })
})
/* describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
}); */
