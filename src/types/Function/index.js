import { resolve } from '@serverless/utils'

const Function = {
  async define(context) {
    const compute = resolve(this.compute)
    return { fn: await compute.defineFunction(this, context) }
  }
}

export default Function
