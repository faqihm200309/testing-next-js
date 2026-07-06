// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status:boolean,
  statusCode:number,
  data : {
    id:number;
    name:string;
    price:number;
    size:string
  }[];
}

type errorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | errorResponse>,
) {
 const data = [
  {
    id:1,
    name:"baju baru",
    price:20000,
    size:"xl"
  }, {
    id:2,
    name:"baju lama",
    price : 4000,
    size:"L"
  }
 ]
 res.status(200).json({status:true,statusCode:200,data:data})
}
