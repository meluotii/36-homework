const news = [{
    image: 'images/page/latest-news/news-1.jpg',
    title: 'See The Unmatched Beauty Of The Great.',
    description: 'Free directories: directories are perfect for customers that are... searching for',
    icon: 'images/icon/photos-13323rs3Du9xyQ3KR.png',
    authorName: 'Isaac Dunn',
    date: '09 Feb 2017'
}, {
    image: 'images/page/latest-news/news-3.jpg',
    title: 'Effective Advertising Pointers.',
    description: 'Having a home based business is a wonderful asset to your life...',
    icon: 'images/icon/photos-13323vsWmKApDZJIh.png',
    authorName: 'Dominic Freeman',
    date: '24 Apr 2017'
}, {
    image: 'images/page/latest-news/news-4.jpg',
    title: 'Hypnotize Yourself Into The Ghost.',
    description: 'There are many things that are important to catalog design....',
    icon: 'images/icon/photos-13323TAfapiSrc9IO.png',
    authorName: 'Alice Ward',
    date: '30 Dec 2017'
}, {
    image: 'images/page/latest-news/news-2.jpg',
    title: 'See The Unmatched Beauty Of The Great.',
    description: 'There are many things that are important to catalog design....',
    icon: 'images/icon/photos-13323rs3Du9xyQ3KR.png',
    authorName: 'Isaac Dunn',
    date: '14 Mar 2016'
}, {
    image: 'images/page/latest-news/news-8.jpg',
    title: 'Hypnotize Yourself Into The Ghost.',
    description: 'Free directories: directories are perfect for customers that are... searching for',
    icon: 'images/icon/photos-13323vsWmKApDZJIh.png',
    authorName: 'Dominic Freeman',
    date: '21 Jan 2016'
}]

const blockSlider = $('.block-slider');

class News {
    constructor(data) {
        this.image = data.image;
        this.title = data.title;
        this.description = data.description;
        this.icon = data.icon;
        this.authorName = data.authorName;
        this.date = data.date;
    }

    print() {
        let result = `<div class="block-slider__item">`;
        result += `<img src="${this.image}" alt="">`;
        result += `<div class="slider-info">`;
        result += `<div class="slider-info__title">${this.title}</div>`;
        result += `<div class="slider-info__description">${this.description}</div>`;
        result += `<div class="slider-info__author">`;
        result += `<div class="profile-photo"><img src="${this.icon}" alt=""></div>`;
        result += `<div class="profile-info">`;
        result += `<div class="profile-info__name">${this.authorName}</div>`;
        result += `<div class="profile-info__date">${this.date}</div>`;
        result += `</div>`;
        result += `</div>`;
        result += `</div>`;
        result += `</div>`;

        blockSlider.append(result);
    }
}


class NewsList {
    constructor(data) {
        this.data = data;
    }

    print() {
        this.data.forEach(element => {
            const news = new News(element);
            news.print();
        })
    }
}

newsList = new NewsList(news);
newsList.print();

$('#news-standard').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
        {
            breakpoint: 1340,
            settings: {
                arrows: false
            }
        }
    ]
});

$('#news-mini').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
});