"use strict";
const { sanitizeEntity } = require("strapi-utils");
const { child } = require("strapi-utils/lib/logger");
const { UserInputError } = require("apollo-server-koa");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  createProfile: async (ctx) => {
    // throw new Error('Email is already in use')
    // return new UserInputError("toto");
    console.log("begin create profile");
    console.log("state", ctx.state.user.id);

    console.log("pipos", ctx.request.body);
    const data = { ...ctx.request.body, user: ctx.state.user.id };
    // const validData = await strapi.entityValidator.validateEntity(
    //   strapi.models.profile,
    //   data
    // );
    // if (validData) {
    //   return await strapi.query("profile").create(validData);
    // }
    try {
      const entity = await strapi.services.profile.create(data);
      console.log("entity", entity);
      return sanitizeEntity(entity, { model: strapi.models.profile });
    } catch (e) {
      console.log(e);
    }
  },
  profiles: async (ctx) => {
    console.log("pipos", ctx.query);
    // const params =
    // console.log("state", ctx.state.user.id);
    const data = { ...ctx.request.body, user: ctx.state.user.id };
    // const validData = await strapi.entityValidator.validateEntity(
    //   strapi.models.profile,
    //   data
    // );
    // if (validData) {
    //   return await strapi.query("profile").create(validData);
    // }
    try {
      const entities = await strapi.services.profile.find({
        // user: ctx.state.user.id,
        ...ctx.query,
      });
      console.log("entity", entities);
      return entities.map((entity) =>
        sanitizeEntity({ ...entity, test: 3 }, { model: strapi.models.profile })
      );
    } catch (e) {
      console.log(e);
    }
  },
};
