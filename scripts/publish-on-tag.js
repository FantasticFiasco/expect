// @ts-check

const { createRelease, uploadAsset } = require('./github');
const { fatal, log, YELLOW } = require('./log');
const { login, logout, pack, publish } = require('./npm');
const { GIT_TAG, GITHUB_TOKEN, NPM_TOKEN, REPO } = require('./github-actions');

/**
 * A tagged commit in this repo is created using the following format:
 *
 *   v<version>
 *
 * where <version> is the semantic version of the package.
 *
 * The following tag would satisfy the format:
 *
 *   v1.2.3-alpha
 */
const parseGitTag = () => {
    if (!GIT_TAG) {
        log(YELLOW, 'Skipping a deployment to GitHub Releases because this is not a tagged commit');
        return null;
    }

    if (!GIT_TAG.startsWith('v')) {
        log(YELLOW, 'Skipping a deployment to GitHub Releases because the tag does conform to v<version>');
        return null;
    }

    return GIT_TAG;
};

const parseRepo = () => {
    const [owner, repo] = REPO.split('/');

    return {
        owner,
        repo,
    };
};

const main = async () => {
    const tag = parseGitTag();
    if (!tag) {
        return;
    }

    const version = tag;
    const { owner, repo } = parseRepo();

    // Create npm package
    const { packageFileName } = await pack();

    // Publish to npm
    await login(NPM_TOKEN);
    await publish(packageFileName);
    await logout();

    // Create GitHub release
    const { releaseId } = await createRelease(GITHUB_TOKEN, owner, repo, GIT_TAG, version);
    await uploadAsset(GITHUB_TOKEN, owner, repo, releaseId, packageFileName);
};

main().catch((err) => {
    fatal(err);
});
