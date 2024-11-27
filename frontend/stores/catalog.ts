import type { Vehicle } from "~/types/apiResponse"

export const useCatalogStore = defineStore('catalogStore', {
  state: () => ({
    cars: [] as Vehicle[],
    car: {} as Vehicle,
  }),
  actions: {
    async fetchCars() {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()
        
        // Указываем тип ответа API как Vehicle[]
        const vehicles = await $fetch<Vehicle[]>(`${apiUrl}api/v1/vehicles/`)

        this.cars = vehicles
      } catch (error) {
        console.error('Failed to fetch cars:', error)
      }
    },
    async fetchCar(id: string) {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()
        
        // Указываем тип ответа API как Vehicle[]
        const vehicle = await $fetch<Vehicle>(`${apiUrl}api/v1/vehicles/${id}/`)

        this.car = vehicle
      } catch (error) {
        console.error('Failed to fetch car:', error)
      }
    },
  }
})
