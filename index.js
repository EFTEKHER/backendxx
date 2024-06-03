const express= require('express');
require('dotenv').config();

const app= express();

const githubData=
    {
        "login": "EFTEKHER",
        "id": 67416263,
        "node_id": "MDQ6VXNlcjY3NDE2MjYz",
        "avatar_url": "https://avatars.githubusercontent.com/u/67416263?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/EFTEKHER",
        "html_url": "https://github.com/EFTEKHER",
        "followers_url": "https://api.github.com/users/EFTEKHER/followers",
        "following_url": "https://api.github.com/users/EFTEKHER/following{/other_user}",
        "gists_url": "https://api.github.com/users/EFTEKHER/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/EFTEKHER/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/EFTEKHER/subscriptions",
        "organizations_url": "https://api.github.com/users/EFTEKHER/orgs",
        "repos_url": "https://api.github.com/users/EFTEKHER/repos",
        "events_url": "https://api.github.com/users/EFTEKHER/events{/privacy}",
        "received_events_url": "https://api.github.com/users/EFTEKHER/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Eftekher Ali Efte",
        "company": null,
        "blog": "https://eftekheraliefte2000.netlify.app/",
        "location": "Dhaka,Bangladesh",
        "email": null,
        "hireable": null,
        "bio": " Hi there! I'm Eftekher Ali Efte. I'm a computer science student at RUET",
        "twitter_username": null,
        "public_repos": 98,
        "public_gists": 0,
        "followers": 3,
        "following": 0,
        "created_at": "2020-06-25T10:10:17Z",
        "updated_at": "2024-06-03T14:01:14Z"
      }



app.get('/', (req, res) => {
    res.send('Hello World');
}
)
app.get('/twitter', (req, res) => {
    res.send('Hello World efte')

});

app.get('/github',(req, res) => {
    res.json(githubData);
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at eftes world</h1>');
})
app.listen(process.env.PORT,()=>{
    console.log(`Examples listening on port ${process.env.PORT}`);
});


