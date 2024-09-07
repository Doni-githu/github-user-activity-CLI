#! /usr/github_user_activity_cli/env node


// token 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
function findingUser(username) {
    const api =  `https://api.github.com/users/${username}/events`
    fetch(api)
        .then(res => res.json())
        .then(json => {
            const list = []
            // const len = json.filter(item => item.type === "PushEvent").length
            // console.log(len2)
            for (let i = 0; i < json.length; i++) {
                const element = json[i];

                if(element.type === "PushEvent") {
                    // console.log(`Pushed ${element.payload.commits.length} commits to ${element.repo.name}`)
                }

                if(element.type === "PullRequestEvent") {
                    let action = element.payload.action
                    action = action[0].toUpperCase() + action.slice(1)
                    if(element.payload.action === "closed") {
                        // console.log(`${action} a pull in ${element.repo.name}`)
                    }else{
                        // console.log(`${action} a new pull in ${element.repo.name}`)
                    }
                }
                
                list.push(element.type)
            }
            const newArray = [...new Set(list)]
            console.log(newArray)
        })
}

if(typeof(process.argv[2]) === "string") {
    findingUser(process.argv[2])
}else{
    console.log("please enter the username")
}