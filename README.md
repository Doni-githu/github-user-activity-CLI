GitHub Event Analyzer
This script analyzes a user's recent GitHub events and logs them to the console. It get from a [this site](https://roadmap.sh/projects/github-user-activity)


## Usage

Save the script: Save the code as a JavaScript file (e.g., github_events.js).
Run the script: Open your terminal and navigate to the directory where you saved the script. Then, run the following command, replacing <username> with the actual GitHub username:
node github_events.js <username>
## Example

Running the script with the username bard might output something like this:

- Pushed 2 commits to hello-world
- Created a branch in my-project
- Starred tensorflow/tfjs
- Forked reactjs/redux
## Notes

This script uses the GitHub API to fetch a user's recent events.
The script currently only handles a few event types: PushEvent, IssuesEvent (opened, closed), ForkEvent, WatchEvent, and CreateEvent (branch, tag).
The script exits with an error message if no username is provided.
