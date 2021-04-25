import { StatusCodes } from 'http-status-codes';

const healthCheck = async (_, res) => {
  res.sendStatus(StatusCodes.OK);
};

export default healthCheck;
