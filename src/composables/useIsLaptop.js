import { ref, onMounted, onUnmounted } from 'vue'

export function useIsLaptop() {
  const laptopBreakpoint = 1280
  const isLaptop = ref(window.innerWidth < laptopBreakpoint)

  const updateIsLaptop = () => {
    isLaptop.value = window.innerWidth < laptopBreakpoint
  }

  onMounted(() => {
    window.addEventListener('resize', updateIsLaptop)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateIsLaptop)
  })

  return { isLaptop }
}