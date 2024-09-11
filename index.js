// Code #1
function findingUser(username) {
    const api = `https://api.github.com/users/${username}/events`
    fetch(api)
        .then(res => res.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                const element = json[i];
                let action;
                if (element.type === "PushEvent") {
                    action = `Pushed ${element.payload.commits.length} commits to ${element.repo.name}`
                } else if (element.type === "IssuesEvent") {
                    action = `${element.payload.action.char(0).toUpperCase() + element.payload.action.slice(1)} an issues in ${element.repo.name}`
                } else if(element.type === "ForkEvent") {
                    action = `Forked ${element.repo.name}`
                } else if (element.type === "WatchEvent") {
                    action = `Starred ${element.repo.name}`
                } else if (element.type === "CreateEvent") {
                    action = `Created ${element.payload.ref_type} in ${element.repo.name}`
                }
                else {
                    action = `${element.type.replace("Event", "")} in ${element.repo.name}`
                }
                console.log(`- ${action}`)
            }
        }).catch((err )=> {
            console.log(err)
            process.exit(1)
        })
}

if (process.argv[2]) {
    findingUser(process.argv[2])
} else {
    console.log("please enter the username")
    process.exit(1)
}

// Code #2
// async function githubUserActivityApi(username) {
//     const res = await fetch(`https://api.github.com/users/${username}/events`)
//     if (!res.ok) {
//         if (res.status === 404) {
//             throw new Error("User not Found. Please check your username")
//         } else {
//             throw new Error(`Error fetching data: ${res.status}`)
//         }
//     }
//     return res.json()
// }


// function displayActivity(events) {
//     if (events.length === 0) {
//         console.log("events is empty")
//     }

//     for (let i = 0; i < events.length; i++) {
//         const element = events[i];
//         let action;
//         switch (element.type) {
//             case "PushEvent":
//                 const len = element.payload.commits.length
//                 action = `Pushed ${len} commit(s) to ${element.repo.name}`
//                 break;

//             case "IssuesEvent":
//                 const str = element.payload.action.charAt(0).toUpperCase() + element.payload.action.slice(1)
//                 action = `${str} an issues in ${element.repo.name}`
//                 break;

//             case "WatchEvent":
//                 action = `Starred ${element.repo.name}`
//                 break;
//             case "ForkEvent":
//                 action = `Forked ${element.repo.name}`
//                 break;
//             case "CreateEvent":
//                 action = `Created ${element.payload.ref_type} in ${element.repo.name}`
//                 break;
//             default:
//                 action = `${element.type.replace("Event", "")} in ${element.repo.name}`
//                 break;
//         }

//         console.log(`- ${action}`)
//     }
// }

// const startApp = () => {
//     const username = process.argv[2]
//     if (!username) {
//         console.log("Please enter the Github username")
//         process.exit(1)
//     }

//     githubUserActivityApi(username)
//         .then((events) => {
//             displayActivity(events)
//         }).catch((err) => {
//             console.log(err.message)
//             process.exit(1)
//         })
// }


// startApp()