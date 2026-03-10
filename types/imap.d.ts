declare module 'imap' {
  export default class Imap {
    constructor(config: any);
    openBox(mailbox: string, openReadOnly: boolean, callback: (err: any, box: any) => void): void;
    search(criteria: any[], callback: (err: any, results: any[]) => void): void;
    end(): void;
    error: (err: any) => void;
  }
}

declare module 'mailparser' {
  export function simpleParser(stream: any, callback: (err: any, parsed: any) => void): void;
}
