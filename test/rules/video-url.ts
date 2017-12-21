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
        assert.isTrue(new VideoUrl('vimeo').validate('https://player.vimeo.com/video/71787467'));
        assert.isTrue(new VideoUrl('vimeo').validate('https://vimeo.com/71787467'));
        assert.isTrue(new VideoUrl('youtube').validate('https://www.youtube.com/embed/netHLn9TScY'));
        assert.isTrue(new VideoUrl('youtube').validate('https://www.youtube.com/watch?v=netHLn9TScY'));
        assert.isTrue(new VideoUrl('youtube').validate('https://youtu.be/netHLn9TScY'));

        assert.isTrue(videoUrl.validate('https://player.vimeo.com/video/71787467'));
        assert.isTrue(videoUrl.validate('https://vimeo.com/71787467'));
        assert.isTrue(videoUrl.validate('https://www.youtube.com/embed/netHLn9TScY'));
        assert.isTrue(videoUrl.validate('https://www.youtube.com/watch?v=netHLn9TScY'));
        assert.isTrue(videoUrl.validate('https://youtu.be/netHLn9TScY'));
    });

    it('values is not valid', () => {
        assert.isFalse(new VideoUrl('vimeo').validate('https://www.youtube.com/watch?v=netHLn9TScY'));
        assert.isFalse(new VideoUrl('youtube').validate('https://vimeo.com/71787467'));

        assert.isFalse(videoUrl.validate('example.com'));
        assert.isFalse(videoUrl.validate('ftp://youtu.be/netHLn9TScY'));
        assert.isFalse(videoUrl.validate('https:/example.com/'));
        assert.isFalse(videoUrl.validate('https:/youtube.com/'));
        assert.isFalse(videoUrl.validate('https://vimeo'));
        assert.isFalse(videoUrl.validate('https://vimeo.com71787467'));
        assert.isFalse(videoUrl.validate('https://www.google.com'));
        assert.isFalse(videoUrl.validate('tel:+1-816-555-1212'));
        assert.isFalse(videoUrl.validate('text'));
    });

});
