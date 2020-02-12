function Monster(obj){
    this.image = obj.image_url;
    this.title = obj.title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
}

Monster.prototype.render = funciton(){
    const myTemplate = $('#photo-template').html();

    const $horns = $('<section></section>');

    $horns.html('myTemplate');

    $horns.find('h2').text(this.title);

    $horns.find('img').attr('src', this.image);

    $horns.find('img').attr('alt', this.keyword);

    $horns.find('p').text(this.description + '. There are ' + this.horns + ' horn(s) on the ' + this.title + '.');

    $('main').append($horns);
}





{
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
  }

  <section id="photo-template">
        <h2></h2>
        <img src="" alt="">
        <p></p>
      </section>