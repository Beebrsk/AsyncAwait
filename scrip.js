const avatarImg = document.querySelector(".avatar")
const fullnameText = document.querySelector(".fullname")
const emailText = document.querySelector(".email")

const url = "https://reqres.in/api/users/5"
axios
    .get(url)
    .then((res) => {
        const users = res.data.data;
        avatarImg.src = users.avatar;
        fullnameText.innerHTML = users.first_name+ " " + users.last_name;
        emailText.innerHTML = users.email;
    })
    .catch((e)=>{
       console.log('e',e);
    });

const getUser = async( )=>{
    try{
        const reponse = await axios.get(url);
        const user = reponse.data.data;
        avatarImg.src = users.avatar;
        fullnameText.innerHTML = users.first_name+ " " + users.last_name;
        emailText.innerHTML = users.email;
    } catch (e){
        console.log('e',e);
    }
};
getUser();