// Polyfill for File global in Node.js environments
// This is needed for AWS SDK v3 when using undici

if (typeof global !== "undefined" && typeof global.File === "undefined") {
  // Simple File constructor polyfill for Node.js
  class FilePolyfill {
    constructor(
      public readonly stream: any,
      public readonly name: string,
      public readonly options: { type?: string; lastModified?: number } = {}
    ) {}

    get type(): string {
      return this.options.type || "";
    }

    get lastModified(): number {
      return this.options.lastModified || Date.now();
    }

    get size(): number {
      return this.stream?.length || 0;
    }
  }

  // Assign to global
  (global as any).File = FilePolyfill;
}
