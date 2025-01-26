import { defineStore } from 'pinia'

interface Plan {
  id: string
  name: string
  price: number
  features: string[]
  maxKeys: number
}

interface SubscriptionState {
  currentPlan: Plan | null
  usage: {
    keysGenerated: number
    keysActive: number
  }
}

export const useSubscriptionStore = defineStore('subscription', {
  state: (): SubscriptionState => ({
    currentPlan: null,
    usage: {
      keysGenerated: 0,
      keysActive: 0
    }
  }),
  
  getters: {
    remainingKeys: (state) => {
      if (!state.currentPlan) return 0
      return state.currentPlan.maxKeys - state.usage.keysGenerated
    },
    
    isAtKeyLimit: (state) => {
      if (!state.currentPlan) return true
      return state.usage.keysGenerated >= state.currentPlan.maxKeys
    }
  },
  
  actions: {
    setPlan(plan: Plan) {
      this.currentPlan = plan
    },
    
    updateUsage(keysGenerated: number, keysActive: number) {
      this.usage = {
        keysGenerated,
        keysActive
      }
    },
    
    incrementKeysGenerated() {
      this.usage.keysGenerated++
    },
    
    incrementKeysActive() {
      this.usage.keysActive++
    },
    
    decrementKeysActive() {
      if (this.usage.keysActive > 0) {
        this.usage.keysActive--
      }
    }
  }
})