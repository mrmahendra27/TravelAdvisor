import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  console.log(type, sw, ne)
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': 'c39f83f806msh347d3cda5cf1499p199b9fjsn01e525e2a0cc'
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
