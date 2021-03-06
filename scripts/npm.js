// @ts-check

const { rm, writeFile } = require('fs').promises;
const { info } = require('./log');
const { exec } = require('./process');

const CONFIG_FILENAME = '.npmrc';

/**
 * @param {string} accessToken
 */
const login = async (accessToken) => {
    info('npm: login');

    const data = `//registry.npmjs.org/:_authToken=${accessToken}`;
    await writeFile(CONFIG_FILENAME, data);
};

const logout = async () => {
    info('npm: logout');

    await rm(CONFIG_FILENAME);
};

/**
 * @returns {Promise<{packageFileName: string}>}
 */
const pack = async () => {
    info('npm: pack');

    const stdout = await exec('yarn pack');

    const match = /"(\/.*\.tgz)"/.exec(stdout);
    if (match === null || match.length !== 2) {
        throw new Error(`stdout from pack does not contain the artifact filename: ${stdout}`);
    }

    return {
        packageFileName: match[1],
    };
};

/**
 * @param {string} tarball
 */
const publish = async (tarball) => {
    info(`npm: publish ${tarball}`);

    await exec(`npm publish ${tarball} --access public`);
};

module.exports = {
    login,
    logout,
    pack,
    publish,
};
