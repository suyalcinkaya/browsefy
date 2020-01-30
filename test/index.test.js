import browsefy from '../src';

test('should be defined', () => {
  expect(browsefy).toBeDefined();
})


test('should analyze browser correctly', () => {
  const dummyAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36";
  const result = browsefy({ userAgent: dummyAgent });
  expect(result.browser).toEqual('Chrome');
  expect(result.os).toEqual('macOS');
  expect(result.platform).toEqual('desktop');
  expect(result.model).toEqual('');
})

test('should analyze browser correctly', () => {
  const dummyAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/600.1.4";
  const result = browsefy({ userAgent: dummyAgent });
  expect(result.browser).toEqual('Firefox');
  expect(result.os).toEqual('iOS');
  expect(result.platform).toEqual('mobile');
  expect(result.model).toEqual('iPhone');
})