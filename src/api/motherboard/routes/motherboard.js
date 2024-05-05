'use strict';

/**
 * motherboard router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::motherboard.motherboard');
