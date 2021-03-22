import { TestBed } from '@angular/core/testing';

import { ArthService } from './arth.service';

describe('ArthService', () => {
  let service: ArthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#sum',()=>{
    it('should return 20 given 10 and 10',()=>{
      expect(service.sum(10,10)).toBe(20);
    });
    it('should return 0 given 0 and 0',()=>{
      expect(service.sum(0,0)).toBe(0);
    });
    it('should return 10 given 0 and 10',()=>{
      expect(service.sum(10,0)).toBe(10);
    });
    it('should return -20 given -10 and -10',()=>{
      expect(service.sum(-10,-10)).toBe(-20);
    });
  });

  describe('#sumAll',()=>{
    it('should return 50 given [10,10,10,10,10]',(done:DoneFn)=>{
      service.sumAll([10,10,10,10,10]).subscribe(
        (data) =>{
          expect(data).toBe(50);
          done();
        }
      );
    });
  });

});
