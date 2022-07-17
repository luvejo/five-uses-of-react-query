export const multiplyNumbers = ({ a, b }) => {
  postMessage({ type: 'result', result: a * b })
}

addEventListener('message', (event) => {
  multiplyNumbers(event.data)
})
