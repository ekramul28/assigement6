const categoryData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const datas = await res.json();
    const category = datas.data;
    displayCategory(category);
}
const displayCategory = (datas) => {
    const id = document.getElementById('category');
    datas.forEach(data => {
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
    <button class="btn bg-[#d4d2d2] rounded  normal-case text-xl">${data.category}</button>
    `
        id.appendChild(createDiv);
    });
}

const allCategoryData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();
    const allData = data.data;
    displayAllCategoryData(allData)
}
const displayAllCategoryData = (allData) => {
    const card = document.getElementById('card');
    allData.forEach(data => {
        console.log(data)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card   ">
        <figure><img class="lg:h-[200px] w-full" src=${data.thumbnail}/></figure>
        <div class="py-6">
            <div class="block">

                    <img class="rounded-full h-[40px] w-[40px]" src=${data.authors[0].profile_picture} alt="">

                <div>
                <h2 class="card-title">${data.title}</h2>
                <p class="text-sm font-normal text-[#171717b3]">${data.authors[0].profile_name}</p>
                <p class="text-sm font-normal text-[#171717b3]">${data.others.views}</p>
                </div>


            </div>

        </div>
    </div>
        `
        card.appendChild(div);
    })
}



allCategoryData()


categoryData()