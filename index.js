// Import stylesheets
import './style.css';
import anime from 'animejs';

// path strokeのアニメーション
anime({
  targets: 'path, circle, rect',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true,
});

// rectのアニメーション
anime({
  targets: '#グループ_1 > rect',
  width: function (target) {
    return [0, target.width.baseVal.value];
  },
  height: function (target) {
    return [0, target.height.baseVal.value];
  },
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '#sample_4 > rect',
  width: function (target) {
    return [0, target.width.baseVal.value];
  },
  height: function (target) {
    return [0, target.height.baseVal.value];
  },
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true,
});

// circleのアニメーション
anime({
  targets: '#sample_4 > circle',
  r: function (target) {
    return [0, target.r.baseVal.value];
  },
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true,
});

// path d のアニメーション
anime({
  targets: '#sample_4 > path',
  d: 'M18.5,0,37,32H0Z',
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true,
});

anime({
  targets: '#sample5 > rect',
  height: function (el) {
    return [0, anime.get(el, 'height', 'px')];
  },
  easing: 'easeInOutSine',
  duration: 1500,
  direction: 'alternate',
  loop: true,
});
