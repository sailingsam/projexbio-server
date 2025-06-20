declare global {
  namespace NodeJS {
    interface Process {
      cwd(): string;
      env: ProcessEnv;
    }

    interface ProcessEnv {
      [key: string]: string | undefined;
    }
  }

  var process: NodeJS.Process;
}

declare module 'path' {
  export function join(...paths: string[]): string;
  export function resolve(...paths: string[]): string;
  export function dirname(path: string): string;
  export function basename(path: string, ext?: string): string;
  export function extname(path: string): string;
}

export {};
