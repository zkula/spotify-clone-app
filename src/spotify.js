// // https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

//Spotify login button will direct to this link
export const authEndpoint = "https://accounts.spotify.com/authorize";

//Spotify will redirect back to our app after auth
const redirectUri = "http://localhost:3000/";

const clientId = "fde50b6cefa247c48a4ef6ef8fe3bac0";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// Back-ticks allow you to use JS and Strings - called String Interpolation
//Put '?' to add parameters to the url
//'%20' is the ascii code for a space fyi
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
