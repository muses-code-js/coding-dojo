# Contributing guidelines to the Coding Dojo repo

## Proposing a new Kata
If you have any new kata's that you would like to share, you could do the following.
1. Clone the repository;
2. Create a new branch for your new Kata;
3. Add the Kata to the folder `/katas/` (e.g. `/katas/my-new-kata/`).
4. Open a Pull Request :)

Once the Pull Request has been approved, you can find your katas in the repository.

## Updating an Kata

**DON'T** push to `master` directly.

**DO**:
1. Clone the repository;
1. Create a branch from `master` and make your changes in it.
2. Create a PR to master.
3. Wait for review (you can go to the [Muses Code JS Slack](http://muses-code-js.slack.com/) to announce your changes)
4. If approved, your changes will be merged by the reviewer(s).

## Pushing the work done during a session

If you're organising a coding-dojo in your chapter, first of all, congratulations and thank you for teaching the best practices to others. We want to keep a clean repository.

As an organiser, you'll have to share the work done during a session with all of the attendees. To do so, request access to the `coding-dojo` repo on the [Muses Code JS Slack](http://muses-code-js.slack.com/) and then do the following

**DON'T** push to `master` directly in a folder.

**DO**:
1. Create a branch from `master` following the branch naming convention.
2. Push your changes on Github.
3. Clean the `katas/` folder. Only keep the katas you've done during the session and delete the others
3. Create a release tag with the same name as your branch.
4. Share it with the attendants.

### Branch naming convention
The branch name has to contain your chapter's name and the coding-dojo date like so: `melbourne/28-03-2018`. If your coding dojo session has more than one group, suffix the name with a letter from A to Z :
```
melbourne/28-03-2018_A
melbourne/28-03-2018_B
...
```
