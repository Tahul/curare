import { login, logout, register } from '../../api/auth'

/**
 * Login action.
 *
 * @param {*} dispatch
 * @param { email, password } payload
 */
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
    dispatch({
      type: 'FAILED_AUTH',
      payload: {
        error: true,
      },
    })
  }
}

/**
 * Register action.
 *
 * @param {*} dispatch
 * @param { name, email, password } payload
 */
export const registerAction = async (dispatch, { name, email, password }) => {
  dispatch({
    type: 'START_AUTH',
  })

  try {
    const payload = await register({ name, email, password })

    dispatch({
      type: 'SUCCESS_AUTH',
      payload,
    })
  } catch (error) {
    dispatch({
      type: 'FAILED_AUTH',
      payload: {
        error: true,
      },
    })
  }
}

/**
 * Logout action.
 *
 * @param {*} dispatch
 */
export const logoutAction = async (dispatch) => {
  dispatch({
    type: 'START_AUTH',
  })

  try {
    await logout()
  } catch (error) {
    dispatch({
      type: 'FAILED_AUTH',
      payload: {
        error: true,
      },
    })
  } finally {
    dispatch({
      type: 'RESET_AUTH',
    })
  }
}
