function useOutput() {
  return (output: HTMLOutputElement) => {
    const styles = output.classList

    return {
      error(message: string) {
        output.textContent = message
        styles.remove('success')
        styles.add('error')
      },
      success(message: string) {
        output.textContent = message
        styles.remove('error')
        styles.add('success')
      },
    }
  }
}

export default useOutput()
