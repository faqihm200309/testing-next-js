// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "@/utils/db/services";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    await signUp(req.body, (result: Data) => {
      if (result.status) {
        res
          .status(200)
          .json({ status: result.status, message: result.message });
      } else {
        res
          .status(400)
          .json({ status: result.status, message: result.message });
      }
    });
  } else {
    res.status(405).json({ status: false, message: "method not allowed" });
  }
}
