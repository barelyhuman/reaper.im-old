const got = require('got');
const URL = 'https://bmc-api-worker.herokuapp.com/posts/';

exports.getPostsFromBMC = async () => {
  try {
    const response = await got(URL, {
      responseType: 'json',
    });

    return {
      posts: response.body,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

exports.getSinglePostFromBMC = async (slug) => {
  try {
    const response = await got(URL + slug, {
      responseType: 'json',
    });
    return {
      post: response.body,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// if (require.main == module) {
//   // this.getSinglePostFromBMC("mailer-simple-e-mail-microservice");
// }
