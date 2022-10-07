export function statusCodeGenerator(err: any): number {
  const referenceErr = err.toString().toLowerCase();
  if (referenceErr.includes("missing")) {
    return 400;
  } else if (
    referenceErr.includes("not found") ||
    referenceErr.includes("there are no")
  ) {
    return 404;
  } else {
    return 500;
  }
}
