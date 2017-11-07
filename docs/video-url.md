# Video Url

Validates if the input is a video URL value:

Valid values:

```js
validator.videoUrl(VideoService.Vimeo).validate('https://player.vimeo.com/video/71787467');
validator.videoUrl(VideoService.Vimeo).validate('https://vimeo.com/71787467');
validator.videoUrl(VideoService.YouTube).validate('https://www.youtube.com/embed/netHLn9TScY');
validator.videoUrl(VideoService.YouTube).validate('https://www.youtube.com/watch?v=netHLn9TScY');
validator.videoUrl(VideoService.YouTube).validate('https://youtu.be/netHLn9TScY');
validator.videoUrl().validate('https://player.vimeo.com/video/71787467');
validator.videoUrl().validate('https://vimeo.com/71787467');
validator.videoUrl().validate('https://www.youtube.com/embed/netHLn9TScY');
validator.videoUrl().validate('https://www.youtube.com/watch?v=netHLn9TScY');
validator.videoUrl().validate('https://youtu.be/netHLn9TScY');
```

Invalid values:

```js
validator.videoUrl(VideoService.Vimeo).validate('https://www.youtube.com/watch?v=netHLn9TScY');
validator.videoUrl(VideoService.YouTube).validate('https://vimeo.com/71787467');
validator.videoUrl().validate('example.com');
validator.videoUrl().validate('ftp://youtu.be/netHLn9TScY');
validator.videoUrl().validate('https:/example.com/');
validator.videoUrl().validate('https:/youtube.com/');
validator.videoUrl().validate('https://vimeo');
validator.videoUrl().validate('https://vimeo.com71787467');
validator.videoUrl().validate('https://www.google.com');
validator.videoUrl().validate('tel:+1-816-555-1212');
validator.videoUrl().validate('text');
```
