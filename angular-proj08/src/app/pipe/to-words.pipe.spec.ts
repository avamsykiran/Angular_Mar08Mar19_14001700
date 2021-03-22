import { ToWordsPipe } from './to-words.pipe';

describe('ToWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new ToWordsPipe();
    expect(pipe).toBeTruthy();
  });
  it('should transform 1024 into ONE ZERO TWO FOUR', () => {
    const pipe = new ToWordsPipe();
    expect(pipe.transform(1024)).toBe("ONE ZERO TWO FOUR ");
  });
});
