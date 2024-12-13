import type { ApiResponse, Vehicle, VehicleAdd, Category } from "~/types/apiResponse"


export const useCatalogStore = defineStore('catalogStore', {
  state: () => ({
    categories: {} as ApiResponse<Category>,
    cars: {} as ApiResponse<Vehicle>,
    car: {} as Vehicle,
  }),
  actions: {
    async fetchCars() {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()

        const vehicles = await $fetch<ApiResponse<Vehicle>>(`${apiUrl}api/v1/vehicles/`)

        this.cars = vehicles
      } catch (error) {
        console.error('Failed to fetch cars:', error)
      }
    },
    async fetchCategories() {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()

        const categories = await $fetch<ApiResponse<Category>>(`${apiUrl}api/v1/vehicle-categories/`)

        this.categories = categories
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    },
    async fetchCar(id: string) {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()


        const vehicle = await $fetch<Vehicle>(`${apiUrl}api/v1/vehicles/${id}/`)

        this.car = vehicle
      } catch (error) {
        console.error('Failed to fetch car:', error)
      }
    },
    async createCar(vehicle: VehicleAdd) {
      try {
        const { public: { apiUrl } } = useRuntimeConfig();
        const { token } = useAuthState();

        const response = await $fetch(`${apiUrl}api/v1/vehicles/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token.value}`,
          },
          body: JSON.stringify(vehicle),
        });

        await this.fetchCars();

        console.log('Car created successfully:', response);
      } catch (error) {
        console.error('Failed to create car:', error);
      }
    }
  }
})
