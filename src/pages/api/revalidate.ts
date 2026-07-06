// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.query.data);
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res
      .status(401)
      .send({
        revalidated: false,
        message: "silahkan pilih identitas yang benar terlebih dahulu",
      });
  } else {
    if (req.query.data === "product") {
      try {
        await res.revalidate("/product/static");
        return res.json({ revalidated: true });
      } catch (err) {
        res.status(500).send({ revalidated: false });
      }
    } else {
      return res.json({
        revalidated: false,
        message: "pilih data terlebih dahulu yang mau di revalidate",
      });
    }
  }
}
