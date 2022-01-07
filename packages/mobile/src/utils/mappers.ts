import { bloodGroups } from "./constants";
import { distance } from "./helpers";

export const reuquestsMapper = (requests, latitude, longitude) => {
  console.log('requests', requests)
  if (requests) {
    return requests.map((r) => {
      const {name, group, lat, lng, description} = r;
      console.log('fuck', distance(latitude, longitude, lat, lng, 'K'));
      return {
        name,
        group: bloodGroups.find((b) => b.value === group)?.id,
        distance: distance(latitude, longitude, lat, lng, 'K'),
        description,
        lat,
        lng,
      };
    });
  }
};