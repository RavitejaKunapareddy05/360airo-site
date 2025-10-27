declare module 'nodemailer' {
  export interface Transporter {}
  export function createTransporter(config: any): any;
}