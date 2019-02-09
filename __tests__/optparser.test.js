import optparser from '../src/optparser';

test('return empty string', () => {
  const parser = {
    usage: () => parser,
    parse: () => parser,
    args: [],
  };
  const ip = optparser.getIP(parser.args, parser);
  expect(ip).toEqual('');
});

test('return IP', () => {
  const parser = {
    usage: () => parser,
    parse: () => parser,
    args: ['127.0.0.1'],
  };
  const ip = optparser.getIP(parser.args, parser);
  expect(ip).toEqual('127.0.0.1');
});

test('return first argument', () => {
  const parser = {
    usage: () => parser,
    parse: () => parser,
    args: ['127.0.0.1', 'fake_argument'],
  };
  const ip = optparser.getIP(parser.args, parser);
  expect(ip).toEqual('127.0.0.1');
});
