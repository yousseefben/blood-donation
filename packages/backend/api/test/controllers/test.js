"use strict";

const Knex = require("knex");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  youssef: async (ctx) => {
    console.log("pipos", ctx.query);
    const lat = 1.39;
    const lng = 0.34;

    const X1 = +lat - 10;
    const Y1 = +lng - 10;
    const X2 = +lat + 10;
    const Y2 = +lng + 10;

    const distanceInKmSql = `(6371 * acos( cos( radians(${+lat}) ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(${+lng}) ) + sin( radians(${+lat}) ) * sin( radians( lat ) ) ) ) AS distance`;
    const distancKm = `acos(0.999453128679531 + 0.0005468713204691875) AS distance`;

    const result = await strapi
      .query("location")
      .model.query((qb) => {
        // qb.where("lat", lat);
        qb.whereBetween("lat", [X1, X2]);
        qb.whereBetween("lng", [Y1, Y2]);
        qb.column(["*", Knex.raw(distanceInKmSql)]);
        qb.having("distance", ">", 10).limit(1).offset(1);
        // qb.whereRaw(
        //   "ACOS(SIN(RADIANS(?)) * SIN(RADIANS(lat)) + COS(RADIANS(51.5007)) * COS(RADIANS(lat)) * COS(RADIANS(lng - 0.1246))) * 3959 < 10",
        //   [65]
        // );
      })
      .fetchAll();
    console.log("pipos location", result.toJSON());
  },
};
