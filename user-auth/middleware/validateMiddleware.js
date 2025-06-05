function validate(schema) {
  return (req, res, next) => {
    console.log('body: ', req.body)
    const result = schema.safeParse(req.body);
    console.log(result);
    
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation error',
        issues: result.error
      });
    }
    req.body = result.data;
    next();
  };
}

module.exports = validate;