import { login, register } from '../../api/auth'

export const loginAction = async (dispatch, { email, password }) => {
  dispatch({
    type: 'START_AUTH',
  })

  try {
    const payload = await login({ email, password })

    dispatch({
      type: 'SUCCESS_AUTH',
      payload,
    })
  } catch (error) {
    console.log(error)

    dispatch({
      type: 'FAILED_AUTH',
      payload: {
        error: true,
      },
    })
  }
}

export const registerAction = async (dispatch, { email, password }) => {
  dispatch({
    type: 'START_AUTH',
  })

  try {
    const payload = await register({ email, password })

    dispatch({
      type: 'SUCCESS_AUTH',
      payload,
    })
  } catch (error) {
    console.log(error)

    dispatch({
      type: 'FAILED_AUTH',
      payload: {
        error: true,
      },
    })
  }
}
