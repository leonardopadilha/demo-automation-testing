const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require tests/step-defitions/**/*.step.js
`
module.exports = {
    default: `${common} tests/features/**/*.feature`,
}