# COSC2759 Assignment 1
## AirBNB Clone
- Full Name/Names: Michael Mountjoy**


## 1. Overview 
This readme.md file will present a series of instructions on how to deploy a pipeline. It will also show
the commands necessary to deploy it and what the expected output of the pipeline will be. Not every
process of setting up a virtualised development environment will be shown here. Mainly the relevant parts
for setting up and deploying a pipeline.

This pipeline will execute a series of procedures that will:
- Lint code
- Unit Test a .js file
- Apply code coverage
- Generate an artifact for deployment

## 2. Prerequisites 
- Python 3.1+
- Node v17.6.0+
- Dependencies for the pipeline (check README.md in src)
- Text Editor
- Access to the code repository

## 3. Setup
In this phase, a walkthrough will be provided on how to set up the repository.
If there are any missing dependencies, simply follow the console prompts and use:

`npm install <relevant-dependancy>`

### 3.1 - Cloning the Repo
<img src="/img/1-copy-ssh-clone.png" style="height: 70px;"/>
Navigate to the Github Repository page. Shown in the image, there are a few options
of how the repository can be cloned. In this context, the approach that will be taken
is the SSH method. Copy the SSH link and navigate over to a terminal that has been authenticated
with Github.

<img src="/img/2-authenticate-ssh.png" style="height: 70px;"/>
Paste the SSH code into the terminal and hit enter. The repository should populate the directory
and all the necessary files should be pulled.

Example Input in Terminal:
`git clone git@github.com:rmit-sdo-2024-s2/s3920350-s3841493-assignment-1.git`

### 3.2 - Triggering the Pipeline
As the code has been all pre-configured and set up, the user does not need to re-configure
the existing code to trigger the pipeline. Instead, they can make a minor change
to the directory and push a change to the repository in order to see the pipeline
execute in real time. An example of this shall be performed with the existing directory.

<img src="/img/5-git-add.png" style="height: 70px;"/>

`git add .`

Git add marks any new edits, deletions or additions to be merged into the repository. The '.' keyword
specifies that the current directory is the subject of these changes.

<img src="/img/6-git-commit.png" style="height: 70px;"/>

`git commit -m "Test commit to trigger pipeline"`

Git commit consolidates the changes from the directory into a hash. This hash can represent 
a snapshot of the existing code and can be reverted back to with the "git revert" command.
The "-m" keyword specifies that what follows is a message, and should be surrounded with quotations.

<img src="/img/7-git-push.png" style="height: 70px;"/>

`git push`

Git push takes the commit and attempts to merge all the new code changes into the code repository.
If there are no merge conflicts, it will be pushed through successfully.

### 3.3 - Observing the Flow of the Pipeline
<img src="/img/8-github-actions.png" style="height: 70px;"/>
Navigate to Github Actions to view the latest commit that was pushed. Click on the title and then view the contents.
A hash commit should be associated with it as well. The `git revert` command can rewind the codebase back to
a prior point in time by using the hash commit.

<img src="/img/9-github-actions-flow.png" style="height: 70px;"/>
The above image illustrates how the flow of the pipeline should look like.
The artifact deployment depends on the successful execution of the unit-test script
in the pipeline. The unit-test script only executes if the test-lint script
works.

<img src="/img/10-test-lint.png" style="height: 70px;"/>
This is the output for the test-lint command. This will
check over the codebase in the src folder and see if
the code is consistent.

<img src="/img/11-test-unit.png" style="height: 70px;"/>
This is the output for the unit-test command. Passes the unit-test if
the test ran as expected.

<img src="/img/12-artifact.png" style="height: 70px;"/>
This is the output for the deployed artifact. If the code works as intended, 
it should only be able to be deployed to the main branch. This line in
the ci-pipeline.yml file in /.github/workflows can alter deployment behaviour:
if: github.ref == 'refs/heads/main'

## 4. Troubleshooting
If any merge or commit issues occur pushing a commit, then use the merge editor to troubleshoot it.+

<img src="/img/13-troubleshoot-merge.png" style="height: 70px;"/>

Above is a picture of how the merge editor looks like. Incoming changes are either
integrated or rejected into the existing codebase. Once these issues are resolved,
it should be possible to merge the branch in question or re-commit.
