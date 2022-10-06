const NEWLINES_MATCH = /\r\n|\n|\r/;
const NEWLINE = "\n";
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
const RE_NEWLINES = /\\n/g;

export const parseBuffer = (src: any) => {
  const obj: any = {};
  src
    .toString()
    .split(NEWLINES_MATCH)
    .forEach((line: any) => {
      const keyValueArr = line.match(RE_INI_KEY_VAL);

      if (keyValueArr != null) {
        const key = keyValueArr[1];

        let val = keyValueArr[2] || "";
        const end = val.length - 1;
        const isDoubleQuoted = val[0] === '"' && val[end] === '"';
        const isSingleQuoted = val[0] === "'" && val[end] === "'";

        if (isDoubleQuoted || isSingleQuoted) {
          val = val.substring(1, end);

          if (isDoubleQuoted) {
            val = val.replace(RE_NEWLINES, NEWLINE);
          }
        } else {
          val = val.trim();
        }
        obj[key] = val;
      }
    });
  return obj;
};
