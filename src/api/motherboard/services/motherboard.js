'use strict';

/**
 * motherboard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::motherboard.motherboard');
