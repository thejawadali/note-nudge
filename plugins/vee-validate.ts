import { defineRule } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'


export default defineNuxtPlugin(() => {
  const a: any = AllRules
  Object.keys(AllRules).forEach((ruleName) => {
    // const ruleFunction = AllRules[ruleName]
    const ruleFunction = (AllRules as Record<string, any>)[ruleName];
    if (typeof ruleFunction === 'function') {
      defineRule(ruleName, ruleFunction);
    }
  })

})