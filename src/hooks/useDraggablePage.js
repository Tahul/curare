const useDraggablePage = ({ onPrevious, onNext, controls } = {}) => {
  const OFFSET = 400

  const onDrag = (event, info) => {
    if (controls) {
      const percentage =
        1 - Math.round((Math.abs(info.offset.x) / OFFSET) * 100) / 100

      controls.start({
        opacity: percentage,
      })
    }

    if (info.offset.x > OFFSET) {
      if (onPrevious) onPrevious()
    }

    if (info.offset.x < -OFFSET) {
      if (onNext) onNext()
    }
  }

  const onDragEnd = (event, info) => {
    if (controls) {
      controls.start({
        opacity: 1,
      })
    }
  }

  return { onDrag, onDragEnd }
}

export default useDraggablePage
