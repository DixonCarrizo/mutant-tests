import { StatusCodes } from 'http-status-codes';

const handler = (err, req, res, _next) => {
  console.error('ERROR HANDLER', {
    query: req.query,
    params: req.params,
    body: req.body,
    error: err.message,
    stack: err.stack,
  });

  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
};

export default handler;
