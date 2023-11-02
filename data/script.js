const baseUrl="http://localhost:3000/posts"
const show=document.getElementById('show')

// show.addEventListener('click',


// async function fetchData() {
//     try {
//         const response=await axios.get(baseUrl)
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// })
// fetchData()


async function deletePost(postId) {
    try {
        await axios.delete(`${baseUrl}/${postId}`)
        fetchData()
    } catch (error) {
        console.log(error);
    }
}
fetchData()

