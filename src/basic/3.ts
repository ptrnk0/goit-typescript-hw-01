// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

type stringOrNumber = string | number;

let stringValue: stringOrNumber = "abc";
let numberValue: stringOrNumber = 2;

type enableOrDisable = "enable" | "disable";

let disableValue: enableOrDisable = "disable";
let enableValue: enableOrDisable = "enable";
