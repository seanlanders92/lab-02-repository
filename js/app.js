$.ajax('data/page-1.json', {method: 'GET', dataType: 'JSON'})
    .then(data => {
        data.forEach(element => {
            new Monster(element).render();
        })
        menuRender();
    })

 const keywordsDropDown = [];

 const keywordsFunction = (stringValue) => {
     let add = true;
     keywordsDropDown.forEach(element => {
         
         if(element === stringValue){
            add = false;

        }
    })
        if(add === true){
            keywordsDropDown.push(stringValue);
        }
 }

function Monster(obj){
    this.image = obj.image_url;
    this.title = obj.title;
    this.description = obj.description;
    this.keyword = obj.keyword;
    this.horns = obj.horns;

    keywordsFunction(this.keyword);
    console.log(keywordsDropDown);
}

Monster.prototype.render = function(){
    const myTemplate = $('#photo-template').html();

    const $horns = $('<section></section>');

    $horns.html(myTemplate);

    $horns.find('h2').text(this.title);

    $horns.find('img').attr('src', this.image);

    $horns.find('img').attr('alt', this.keyword);

    $horns.find('p').text(this.description + '. There are ' + this.horns + ' horn(s) on the ' + this.title + '.');

    $('main').append($horns);
}

const menuRender =() => {   

    let dropdownOptions = $('#menu');
    keywordsDropDown.forEach(element => {
        let $selectTag = $('<option></option>');
        $selectTag.text(element);
        $('#menu').append($selectTag);
    })
}



// {
//     "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//     "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//     "keyword": "narwhal",
//     "horns": 1
//   }

//   <section id="photo-template">
//         <h2></h2>
//         <img src="" alt="">
//         <p></p>
//       </section>