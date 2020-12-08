// Hooks
import useSound from 'use-sound'

// Assets
import errorSfx from '../assets/sounds/error.wav'
import successSfx from '../assets/sounds/success.wav'
import warningSfx from '../assets/sounds/warning.wav'

const useActionsSounds = () => {
  const [playError, stopError] = useSound(errorSfx, {
    volume: 0.15,
  })

  const [playSuccess, stopSuccess] = useSound(successSfx, {
    volume: 0.15,
  })

  const [playWarning, stopWarning] = useSound(warningSfx, {
    volume: 0.15,
  })

  return {
    playError,
    stopError,
    playSuccess,
    stopSuccess,
    playWarning,
    stopWarning,
  }
}

export default useActionsSounds
