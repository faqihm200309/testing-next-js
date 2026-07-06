import { retrieveData, retrieveDataById } from "@/utils/db/services";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
 if(req.query.product![1]){
  const data = await retrieveDataById("products", req.query.product![1])
  res.status(200).json({statusCode : 200, data})
 } else {
  const data = await retrieveData("products")
  res.status(200).json({statusCode:200, data})
 }
}
