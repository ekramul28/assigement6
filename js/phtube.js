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
    <button onclick="categoryId('${data.category_id}')" id="btn" class="btn bg-[#d4d2d2] rounded  normal-case text-xl">${data.category}</button>
    `
        id.appendChild(createDiv);
    });

}

const categoryId = async (id) => {
    noContent(id);
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const allData = data.data;
    displayAllCategoryData(allData);



    // sortButton start hear

    const get = document.getElementById('categoryId');
    get.addEventListener('click', function () {
        allData.sort((a, b) => {
            const viewsA = parseFloat(a.others.views);
            const viewsB = parseFloat(b.others.views);

            if (a.others.views.includes('k') && b.others.views.includes('k')) {
                return viewsB - viewsA;
            } else if (a.others.views.includes('k')) {
                return viewsA * 1000 - viewsB;
            } else if (b.others.views.includes('k')) {
                return viewsA - viewsB * 1000;
            } else {
                return viewsB - viewsA;
            }

        })
        displayAllCategoryData(allData);

    });




}

const displayAllCategoryData = (allData) => {
    const card = document.getElementById('card');
    card.textContent = '';
    allData.forEach(data => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  ">
        <div class="relative">
            <figure><img class="lg:h-[170px] md:h-[220px]  w-full" src=${data.thumbnail} /></figure>
            <div class="absolute right-2 bottom-2">
            <p><span class="bg-black w-30 h-6 rounded text-white px-2">${secondsToHms(data.others.posted_date)}</span></p>
            </div >
        </div >
    <div class="py-6">
        <div class="flex gap-2">
            <img class="rounded-full h-[40px] w-[40px]" src=${data.authors[0].profile_picture} alt="">
                <div>
                    <h2 class="card-title font-bold">${data.title}</h2>
                    <div class="flex gap-2">
                        <p class="text-sm font-normal text-[#171717b3]">${data.authors[0].profile_name}</p>
                        <div id="svg-div " >
                            ${data.authors[0].verified ? '<img src="fi_10629607.svg">' : ""}
                        </div >
                    </div >
                    <p class="text-sm font-normal text-[#171717b3]">${data.others.views}</p>
                </div >
        </div >
    </div >
    </div >
    `
        card.appendChild(div);

    })
}
// date  function
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute ago, " : " minutes ago ") : "";
    return hDisplay + mDisplay;
}

// no data function heare
const noContentId = document.getElementById('no-content');
const noContent = (id) => {
    if (id == 1005) {
        noContentId.classList.remove('hidden')
    } else {
        noContentId.classList.add('hidden')

    }
}



// BlogFunction
const BlogFunction = () => {
    open('index1.html')

}




categoryId(1000)
categoryData()
