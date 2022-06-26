import { NextApiRequest, NextApiResponse } from 'next';

type Data = Object

const dummy = {

}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.send(dummy);
}

export default handler;
