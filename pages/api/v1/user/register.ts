import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../../../lib/prisma" 
type Data={
    user: any

}
export default async function handler(
    req: NextApiRequest
    , res: NextApiResponse<Data>
    ) 
   {
//     const newUser = await prisma.user.create(
// {data: 
//     {
//     email:'ADDphanavncan@gmail.com',
//  name: 'vana can',
// password:'123456'

// }

// }

//     )

const getUser= await prisma.user.findMany();

    //res.status(200).json({user:newUser})
    res.status(200).json({data: getUser})
  }
  