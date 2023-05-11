'use strict';

/**
 * sdf service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sdf.sdf');
