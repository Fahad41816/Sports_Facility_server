const HandleDuplicateError = err => {
  const match = err.message.match(/"([^"]*)"/)

  const extractMessage = match && match[1]

  const ErrorSources = [
    {
      path: '',
      message: `${extractMessage} is Allready Exists!`,
    },
  ]

  return {
    statusCode: 500,
    ErrorSources,
    message: 'Duplicate Value',
  }
}

export default HandleDuplicateError
