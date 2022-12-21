const { createPatinaNextPlugin } = require('@upstart/patina-design-system/plugins/nextjs')
const withPatina = createPatinaNextPlugin({
    /** Patina config */
})

module.exports = (phase, { defaultConfig }) => {
    /** Other setup */

    return withPatina({
        /** Next config */
    })
}