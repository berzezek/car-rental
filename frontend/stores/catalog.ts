import type { ApiResponse, Product, ProductAdd, Category } from "~/types/apiResponse"


export const useCatalogStore = defineStore('catalogStore', {
  state: () => ({
    categories: {} as ApiResponse<Category>,
    products: {} as ApiResponse<Product>,
    product: {} as Product,
  }),
  actions: {
    async fetchProducts() {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()

        const items = await $fetch<ApiResponse<Product>>(`${apiUrl}api/v1/products/`)

        this.products = items
      } catch (error) {
        console.error('Failed to fetch products:', error)
      }
    },
    async fetchCategories() {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()

        const categories = await $fetch<ApiResponse<Category>>(`${apiUrl}api/v1/product-categories/`)

        this.categories = categories
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    },
    async fetchProduct(id: string) {
      try {
        const { public: { apiUrl } } = useRuntimeConfig()


        const item = await $fetch<Product>(`${apiUrl}api/v1/products/${id}/`)

        this.product = item
      } catch (error) {
        console.error('Failed to fetch product:', error)
      }
    },
    async createProduct(vehicle: ProductAdd) {
      try {
        const { public: { apiUrl } } = useRuntimeConfig();
        const { token } = useAuthState();

        const response = await $fetch(`${apiUrl}api/v1/products/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token.value}`,
          },
          body: JSON.stringify(vehicle),
        });

        await this.fetchProducts();

        console.log('Car created successfully:', response);
      } catch (error) {
        console.error('Failed to create product:', error);
      }
    }
  }
})
