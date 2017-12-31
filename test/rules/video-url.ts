import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { VideoUrl } from '../../src/rules/video-url';

describe('VideoUrl', () => {

    let videoUrl: VideoUrl;

    beforeEach(() => {
        videoUrl = new VideoUrl();
    });

    it('is rule', () => {
        assert.instanceOf(videoUrl, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new VideoUrl('Vimeo').validate('https://player.vimeo.com/video/71787467'));
        assert.isTrue(new VideoUrl('Vimeo').validate('https://vimeo.com/71787467'));
        assert.isTrue(new VideoUrl('YouTube').validate('https://www.youtube.com/embed/netHLn9TScY'));
        assert.isTrue(new VideoUrl('YouTube').validate('https://www.youtube.com/watch?v=netHLn9TScY'));
        assert.isTrue(new VideoUrl('YouTube').validate('https://youtu.be/netHLn9TScY'));

        assert.isTrue(videoUrl.validate('https://player.vimeo.com/video/71787467')); // Vimeo
        assert.isTrue(videoUrl.validate('https://vimeo.com/71787467')); // Vimeo
        assert.isTrue(videoUrl.validate('https://www.youtube.com/embed/netHLn9TScY')); // Youtube
        assert.isTrue(videoUrl.validate('https://www.youtube.com/watch?v=netHLn9TScY')); // Youtube
        assert.isTrue(videoUrl.validate('https://youtu.be/netHLn9TScY')); // Youtube
    });

    it('values is not valid', () => {
        assert.isFalse(new VideoUrl('Vimeo').validate('https://www.youtube.com/watch?v=netHLn9TScY')); // YouTube
        assert.isFalse(new VideoUrl('YouTube').validate('https://vimeo.com/71787467')); // Vimeo

        assert.isFalse(videoUrl.validate('example.com'));
        assert.isFalse(videoUrl.validate('ftp://youtu.be/netHLn9TScY'));
        assert.isFalse(videoUrl.validate('https:/example.com/'));
        assert.isFalse(videoUrl.validate('https:/youtube.com/'));
        assert.isFalse(videoUrl.validate('https://vimeo'));
        assert.isFalse(videoUrl.validate('https://vimeo.com71787467'));
        assert.isFalse(videoUrl.validate('https://www.google.com'));
        assert.isFalse(videoUrl.validate('tel:+1-816-555-1212'));
        assert.isFalse(videoUrl.validate('text'));
        assert.isFalse(videoUrl.validate(''));
        assert.isFalse(videoUrl.validate('foo'));
        assert.isFalse(videoUrl.validate(1.0));
        assert.isFalse(videoUrl.validate('wrongtld'));
        assert.isFalse(videoUrl.validate(null));
        assert.isFalse(videoUrl.validate(undefined));
        assert.isFalse(videoUrl.validate(true));
        assert.isFalse(videoUrl.validate(false));
        assert.isFalse(videoUrl.validate([]));
        assert.isFalse(videoUrl.validate({}));
        assert.isFalse(videoUrl.validate(new Array('foo')));
        assert.isFalse(videoUrl.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(videoUrl.validate(new Foo()));
    });

});
