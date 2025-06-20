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
  function join(...paths: string[]): string;
  function resolve(...paths: string[]): string;
  function dirname(path: string): string;
  function basename(path: string, ext?: string): string;
  function extname(path: string): string;

  export { join, resolve, dirname, basename, extname };
}

export {};
