import { MailtrapClient } from "mailtrap";
import { config } from "dotenv";

config();

export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Miguel testando",
};