declare module 'nodemailer' {
  // Minimal declaration to suppress TS errors temporarily
  interface Transporter {
    sendMail(mailOptions: any): Promise<any>;
  }
  function createTransporter(options: any): Transporter;
  const nodemailer: {
    createTransporter: typeof createTransporter;
  };
  export default nodemailer;
}
