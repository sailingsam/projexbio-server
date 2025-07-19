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

export {};
