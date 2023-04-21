import { ref, watch } from 'vue'
import { isClient } from '@vueuse/core'

/**
 * fetch data from source link
 * @param source
 */
export function useFetchData<T>(source: string) {
  let data: T[] = []

  watch(() => source, async () => {
    if (!isClient)
      return
    data = (await fetch(source).then(res => res.json()) as T[]) || []
  }, { immediate: true })

  return data
}

/**
 * return random data
 * @param source
 * @param random
 */

export function useRandomData<T>(source: T[], random = false) {
  const data = ref<T[]>()

  data.value = random ? Array.from(source).sort(() => Math.random() - 0.5) : source
  return data
}
