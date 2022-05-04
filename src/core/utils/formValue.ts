export function formValue<R>(form: HTMLFormElement) {
  const data = new FormData(form)
  return Object.fromEntries(data.entries()) as unknown as R
}