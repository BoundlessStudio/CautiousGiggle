import { defineStore } from 'pinia'

interface EphemeralKey {
  id: string
  key: string
  expiresAt: Date
  rateLimit: number
  usageCount: number
  maxUsage: number | null
}

interface KeysState {
  keys: EphemeralKey[]
  loading: boolean
  error: string | null
}

export const useKeysStore = defineStore('keys', {
  state: (): KeysState => ({
    keys: [],
    loading: false,
    error: null
  }),
  
  getters: {
    activeKeys: (state) => state.keys.filter(key => new Date(key.expiresAt) > new Date()),
    expiredKeys: (state) => state.keys.filter(key => new Date(key.expiresAt) <= new Date())
  },
  
  actions: {
    addKey(key: EphemeralKey) {
      this.keys.push(key)
    },
    
    removeKey(keyId: string) {
      this.keys = this.keys.filter(key => key.id !== keyId)
    },
    
    updateKey(keyId: string, updates: Partial<EphemeralKey>) {
      const keyIndex = this.keys.findIndex(key => key.id === keyId)
      if (keyIndex !== -1) {
        this.keys[keyIndex] = { ...this.keys[keyIndex], ...updates }
      }
    },
    
    setLoading(status: boolean) {
      this.loading = status
    },
    
    setError(error: string | null) {
      this.error = error
    }
  }
})