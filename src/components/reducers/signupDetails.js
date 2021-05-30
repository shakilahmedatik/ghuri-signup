//signup Reducer Function
export const signupDetailsReducer = (
  state = {
    service: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    businessName: '',
    businessUrl: '',
    cityName: '',
    area: '',
    address: '',
    gender: '',
    date: new Date(),
  },
  action
) => {
  switch (action.type) {
    case 'SIGNUP_DETAILS':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
