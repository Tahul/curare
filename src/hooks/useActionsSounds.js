// Hooks
import useSound from 'use-sound'

// Assets
import errorSfx from '../assets/sounds/error.wav'
import successSfx from '../assets/sounds/success.wav'
import warningSfx from '../assets/sounds/warning.wav'
import buttonSfx from '../assets/sounds/button.wav'

const useActionsSounds = () => {
  const [playButton, stopButton] = useSound(buttonSfx, {
    volume: 0.15,
  })

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
    playButton,
    stopButton,
    playError,
    stopError,
    playSuccess,
    stopSuccess,
    playWarning,
    stopWarning,
  }
}

export default useActionsSounds
