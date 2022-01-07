"use strict";
const { sanitizeEntity } = require("strapi-utils");
const Knex = require("knex");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  requests: async (ctx) => {
    const params = ctx.query;
    console.log(strapi.services.firebase.test());
    const { lat, lng } = { lat: 43.54, lng: 45.34 };
    let results;
    try {
      if (!params._sort) {
        const X1 = +lat - 10;
        const Y1 = +lng - 10;
        const X2 = +lat + 10;
        const Y2 = +lng + 10;

        const distanceInKmSql = `(6371 * acos( cos( radians(${+lat}) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(${+lng}) ) + sin( radians(${+lat}) ) * sin( radians( lat ) ) ) ) AS distance`;
        const distancKm = `acos(0.999453128679531 + 0.0005468713204691875) AS distance`;

        const queryResult = await strapi
          .query("request")
          .model.query((qb) => {
            // qb.whereBetween("lat", [X1, X2]);
            // qb.whereBetween("lng", [Y1, Y2]);
            qb.column(["*", Knex.raw(distanceInKmSql)]);
            qb.orderBy("distance", "asc");
            // qb.having("distance", ">", 10).limit(1).offset(1);
            // qb.whereRaw(
            //   "ACOS(SIN(RADIANS(?)) * SIN(RADIANS(lat)) + COS(RADIANS(51.5007)) * COS(RADIANS(lat)) * COS(RADIANS(lng - 0.1246))) * 3959 < 10",
            //   [65]
            // );
          })
          .fetchAll();
        results = queryResult.toJSON();
      } else {
        results = await strapi.services.request.find({
          ...params,
        });
      }
      return results.map((entity) =>
        sanitizeEntity({ ...entity, test: 3 }, { model: strapi.models.request })
      );
    } catch (e) {
      console.log(e);
    }
  },
  createRequest: async (ctx) => {
    const data = { ...ctx.request.body, user: ctx.state.user.id };
    const validData = await strapi.entityValidator.validateEntity(
      strapi.models.request,
      data
    );
    if (validData) {
      try {
        const entity = await strapi.services.request.create(data);
        console.log("entity", entity);
        return sanitizeEntity(entity, { model: strapi.models.request });
      } catch (e) {
        console.log(e);
      }
    }
  },
};
