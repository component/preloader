# preloader

  Preload images.

## Installation

    $ component install component/preloader

## Example

```js
var p = document.querySelector('p');
var Preloader = require('preloader');
var imgs = new Preloader;

imgs.add('http://mousebreath.com/wp-content/uploads/2011/08/maru__02.jpg');
imgs.add('http://www.weruletheinternet.com/wp-content/uploads/images/2011/june/maru_the_cat/maru_the_cat_4.jpg');
imgs.add('http://lovemeow.com/wp-content/uploads/2010/05/DSC_0959_20100420083642.jpg');

imgs.on('progress', function(e){
  p.textContent = e.percent + '%';
});

imgs.end(function(){
  p.textContent = 'complete';
  imgs.urls.forEach(function(url){
    var img = new Image;
    img.src = url;
    document.body.appendChild(img);
  });
});
```

## License

  MIT
