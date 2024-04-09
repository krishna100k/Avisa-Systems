import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import {z} from "zod"

const dataSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    company: z.string(),
    email: z.string().email(),
    phone: z.number(),
    message: z.string()
})

type ContactData = z.infer<typeof dataSchema>



export const POST = async (req: NextRequest) => {
    const {firstname, lastname, company, email, phone, message}: ContactData  = dataSchema.parse(await req.json());

    try{

        const userArgs = {
            to: email,
            name: firstname,
            subject: "Mail recieved!",
            body: `<h1>Hello I am ${firstname}!</h1>`
        }


        const companyArgs = {
            to: process.env.SMTP_EMAIL as string,
            name: firstname,
            subject: "Order Recieved",
            body: `<h1>${message}</h1>`
        }
        const userMail = await sendMail(userArgs);
        const companyMail = await sendMail(companyArgs);
        return NextResponse.json({userMail, companyMail}, {status: 200}) 

    }catch(err){
        return NextResponse.json(err, {status: 400});
    }
}



export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    return NextResponse.json(error, {status: 400});
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    return sendResult;
  } catch (error) {
    return NextResponse.json(error, {status: 400});
  }
}

