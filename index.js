//  const gitapi = fetch('https://api.github.com/users/ISTC-accelerator-5-2')
 const repoapi=fetch("https://api.github.com/users/ISTC-accelerator-5-2/repos")
repoapi.then(fetchRepo=>{
    const  bodyPromise = fetchRepo.json()
    bodyPromise.then(repoapi=>{
        let reponame=""
        for(i=0;i<repoapi.length;i++){
        reponame=repoapi[i].name
        console.log(i+1,reponame)
        }
    })
}
)
// Դասավորել ճիշտ հերթականությամբ 