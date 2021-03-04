const axios = require('axios');

const API = 'https://api.github.com';
const user = process.env.AUTHTOKEN.split(':')[0];
const accessToken = process.env.AUTHTOKEN.split(':')[1];

const authAxios = () => {
  return axios.create({
    auth: {
      username: user,
      password: accessToken,
    },
  });
};

exports.getRepository = async (name) => {
  try {
    const response = await authAxios().get(API + '/repos/barelyhuman/' + name);
    console.log(response.data.stargazers_count);
  } catch (err) {
    console.error(err);
  }
};

exports.createFile = async ({ filePath, fileContent }, { repoName }) => {
  try {
    const postBranch = 'post/file';
    let branchExists = false;
    const getMaster = await authAxios().get(
      `${API}/repos/${user}/${repoName}/git/refs/heads/master`
    );
    const masterSHA = getMaster.data.object.sha;
    const isPostBranch = await new Promise((resolve, reject) => {
      return authAxios()
        .get(`${API}/repos/${user}/${repoName}/git/refs/heads/${postBranch}`)
        .then(
          (data) => {
            resolve(data);
          },
          (err) => {
            branchExists = false;
            resolve(err);
          }
        );
    });
    branchExists =
      isPostBranch && isPostBranch.data && isPostBranch.data.object
        ? true
        : false;
    if (!branchExists) {
      const createdBranch = await authAxios().post(
        `${API}/repos/${user}/${repoName}/git/refs`,
        {
          ref: `refs/heads/${postBranch}`,
          sha: masterSHA,
        }
      );

      if (!createdBranch) {
        console.log('Failed to create branch');
        return;
      }

      branchExists = createdBranch.data.object.sha;
    }

    const createdFileRes = await authAxios().put(
      `${API}/repos/${user}/${repoName}/contents/${filePath}`,
      {
        message: `chore(post): create ${filePath}`,
        content: Buffer.from(fileContent).toString('base64'),
        branch: `post/file`,
        sha: branchExists,
      }
    );

    const createPullReq = await authAxios().post(
      `${API}/repos/${user}/${repoName}/pulls`,
      {
        title: `Post addition , ${filePath}`,
        head: `${postBranch}`,
        base: 'master',
      }
    );
  } catch (err) {
    if (err.response && err.response.data) {
      console.error('Error:', err.response.data.message);
    } else {
      console.error(err);
    }
  }
};

if (require.main === module) {
  exports.createFile(
    {
      fileContent: '# Hello',
      filePath: 'posts/hello.md',
    },
    {
      repoName: 'reaper.im',
    }
  );
}
