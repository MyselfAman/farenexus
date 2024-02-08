<script setup>

import { useCartStore } from "../../stores/cartStore.js";

const store = useCartStore();




</script>


<template>
  <div>
    <section class="mx-auto w-full max-w-7xl px-4 py-4">
      <div
        class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
      >
        <div>
          <h2 class="text-lg font-semibold">
            Cart {{ store.cart.length }}
          </h2>
          <p class="mt-1 text-sm text-gray-700">
            This is a list of all products on my cart.
          </p>
        </div>
      </div>
      <div class="mt-6 flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
          >
            <div class="overflow-hidden border border-gray-200 md:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      <span>Product</span>
                    </th>
                    <th
                      scope="col"
                      class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Pricce
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                    >
                      Rating
                    </th>
                    <th scope="col" class="relative px-4 py-3.5">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <div v-for="product in store.cart" :key="product.id">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full object-cover"
                              :src="product.thumbnail"
                              :alt="product.title"
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              {{ product.title }}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900">
                          {{ product.price }}
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <span
                          class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                        >
                          {{ product.discount }}
                        </span>
                      </td>
                      <td
                        class="whitespace-nowrap px-4 py-4 text-sm text-gray-700"
                      >
                        {{ product.rating }}
                      </td>
                      <td
                        class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium"
                      >
                        <button
                          type="button"
                          class="rounded-md border border-black px-3 py-1 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          @click="() => addToCart(product)"
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
