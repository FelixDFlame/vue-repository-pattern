export const getErrorMessage = (err: any) => {
  return err.response && err.response.data && err.response.data.message || err.message
}