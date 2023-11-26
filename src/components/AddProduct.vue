<template>
  <div class="border-t-2 mt-3">
    <div class="flex mt-5 mb-3">
      <div @click="decrementCounter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15"
          />
        </svg>
      </div>
      <p class="bg-slate-200 w-11 text-center mx-4">{{ counter }}</p>
      <div @click="incrementCounter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>
    </div>
  </div>
  <button class="bg-yellow-400 font-semibold rounded h-8">Add to Basket</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
  },
};
</script>
