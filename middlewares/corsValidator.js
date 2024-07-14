const allowedCors = [
  'http://moviesearch.nomoredomains.monster',
  'https://moviesearch.nomoredomains.monster',
  'https://api.moviesearch.nomoredomains.monster',
  'http://api.moviesearch.nomoredomains.monster',
  'http://localhost:3002',
  'https://localhost:3002',
  'http://localhost:3003',
  'https://localhost:3003',
  'http://80.76.60.187:3002',
  'https://80.76.60.187:3002',
  'http://80.76.60.187:3003',
  'https://80.76.60.187:3003',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.status(200).send();
    return;
  }
  next();
};
