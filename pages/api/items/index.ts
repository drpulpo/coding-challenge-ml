// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const { q } = req.query
    const responseFromML = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=​${q}`);

    if (!responseFromML.ok) {
        throw new Error('Error al obtener datos');
    }
    const json = await responseFromML.json();

    res.status(200).json(json);
}
