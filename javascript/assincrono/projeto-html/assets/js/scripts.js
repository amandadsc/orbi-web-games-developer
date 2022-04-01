const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.wepurl;

    } catch(e){
        console.log(e.message);
    }
    /* Ou
    const data = await fetch(BASE_URL)
        .then((res) =: res.json())
        .catch((e) => console.log(e));
    return data.wepurl;
    */
    
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

loadImg();

catBtn.addEventListener('click', loadImg);

