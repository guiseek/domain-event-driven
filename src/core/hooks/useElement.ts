function useElement() {
  return <T extends keyof HTMLElementTagNameMap>(
    element: HTMLElementTagNameMap[T]
  ) => {
    return {
      setAttr(key: keyof HTMLElementTagNameMap[T], value: string) {
        element.setAttribute(String(key), value)
      },
      attr: element.attributes,

      setData(key: keyof HTMLElementTagNameMap[T], value: string) {
        element.dataset[String(key)] = value
      },
      data: element.dataset,

      setStyle(key: keyof CSSStyleDeclaration, value: string) {
        element.style.setProperty(String(key), value)
      },
      style: Object.entries(element.style),

      setClass(className: string) {
        element.className = className
      },
      class: element.classList,

      setText(value: string) {
        element.textContent = value
      },
      text: element.textContent,

      setHtml(value: string) {
        element.innerHTML = value
      },
      html: element.innerHTML,
    }
  }
}

export default useElement()
