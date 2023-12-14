import * as core from "@actions/core";
import * as github from "@actions/github";

const githubToken = core.getInput("token");
const imageName = core.getInput("image-name");
const newImageTag = core.getInput("new-image-tag");
const targetFile = core.getInput("target-file");

const octokit = github.getOctokit(githubToken);

octokit.rest.repos.createDispatchEvent({
  owner: "Arthur1",
  repo: "home-k8s",
  event_type: "dump-image-version",
  client_payload: {
    "image-name": imageName,
    "new-image-tag": newImageTag,
    "target-file": targetFile,
  },
});
