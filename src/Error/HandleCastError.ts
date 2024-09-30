const HandleCastError = err => {
  const ErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ]

  return {
    statusCode: 500,
    message: 'invalid Id',
    ErrorSources,
  }
}

export default HandleCastError
