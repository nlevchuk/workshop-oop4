import commander from 'commander';

const optparser = {
  getIP: (options, parser = commander) => {
    parser
      .usage('[IP]')
      .parse(options);
    const [ip] = parser.args;
    return ip || '';
  },
};

export default optparser;
