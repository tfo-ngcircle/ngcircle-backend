"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async find(ctx) {
    let entity = await strapi.services.career.find(ctx.query, [
      "jobs.location",
    ]);
    return sanitizeEntity(entity, { model: strapi.models.career });
  },
};
