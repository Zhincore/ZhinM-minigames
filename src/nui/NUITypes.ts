export {};

type NUINative = "quit" | "openUrl" | "setConvar" | "setArchivedConvar" | "getConvars";

declare global {
  function GetParentResourceName(): string;
  function invokeNative(native: NUINative, arg: string): void;
}
