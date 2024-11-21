import type { Vehicle } from "~/types/apiResponse"

export const useCatalogStore = defineStore('catalogStore', {
  state: () => ({
    data: [] as Vehicle[],
  }),
  actions: {
    async fetch() {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()
        
        // Указываем тип ответа API как Vehicle[]
        const vehicles = await $fetch<Vehicle[]>(`${apiUrl}vehicles/`)

        this.data = vehicles
      } catch (error) {
        console.error('Failed to fetch catalog:', error)
      }
    }
  }
})
