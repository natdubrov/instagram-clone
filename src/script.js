function populatePostContainer(){
   
    const postContainer = document.getElementsByClassName('post-container')[0];

    for (let index = 0; index < data.length; index++) {
        let postData = data[index];
        let postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <div class="mainname">
                <div class="proffoto">
                    <img class="foto" src=${postData.proffoto} width="35" height="35" alt=${postData.alt}>
                </div>
                <div class="profname">
                    <div class="nameprof">
                        <b>${postData.nameprof}</b>
                    </div>
                    <div class="location">
                        ${postData.location}
                    </div>
                </div>
            </div>
            <div class="mainfoto">
                <img src=${postData.mainfoto} alt="redgirl" class="mainpic">
            </div>`;
        postContainer.appendChild(postDiv);
    }

}

function populateStoryContainer(){
   
    const storyContainer = document.getElementsByClassName('story-container')[0];

    for (let index = 0; index < stories.length; index++) {
        let storyData = stories[index];
        console.log(storyData)
        let storyDiv = document.createElement('div');
        storyDiv.className = 'story';
        storyDiv.innerHTML = `
            <div class="p1foto">
                <img class="p1foto1" src=${storyData.p1foto1} width="40" height="40" alt="noe">
            </div>
            <div class="p1name">
                <div class="p1nam">
                    <b>${storyData.p1nam}</b>
                </div>
                <div class="p1hour">
                    ${storyData.p1hour}
                </div>
            </div>`;
        storyContainer.appendChild(storyDiv);
    }


}

